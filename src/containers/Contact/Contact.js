import React, { useState } from 'react';
import ContactImage from "../../assets/img/contact-image.png";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { sendEmail } from "../../axios/"


const Contact = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({})
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Se envio')
    const form = e.currentTarget;
    console.log(form.checkValidity())

    if (form.checkValidity()) {
      console.log(formData)
      console.log('El form fue validado')
      let responseData = await sendEmail(formData)
      console.log(responseData.data)
      form.reset()
    } else {
      console.log('Te olvidaste algo')
      setShow(true)
    }
  }

  const handleOnChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    
    
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log(formData)

  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <h3>
              Get in touch<br></br>
              <span>We are hiring!</span>
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  type='text'
                  placeholder='Name'
                  name='name'
                />
              </Form.Group>

              <Form.Group >
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name='email'
                  type='email'
                  placeholder='Email'
                />
              </Form.Group>

              <Form.Group >
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name='phone'
                  type='tel'
                  placeholder='Phone'
                />
              </Form.Group>

              <Form.Group controlId='formBasicTextArea'>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name='message'
                  as='textarea'
                  rows={3}
                  placeholder='Message'
                />
                <Form.Control.Feedback type='invalid'>
                  Por favor ingrese un mensaje
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant='primary' type='submit'>
                Send
              </Button>
            </Form>
            < br />
          </Col>
          
          <Col md={12} lg={7}>
            <img src={ContactImage} alt='Contact' className='d-block w-100' />
          </Col>
        </Row>
      </Container>
        {
                        show ? ( <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                          Change this and that and try again.
                        </p>
                      </Alert>) : null
        }
    </section>
  );
}

export default Contact;