import React, { useState } from 'react'
import ContactImage from '../../assets/img/contact-image.png'
import { Form, Button, Col, Container, Row, Alert } from 'react-bootstrap'
import {sendEmail} from '../../axios'

const Contact = () => {

  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({})
  const [show, setShow] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('se envio');
    const form = e.currentTarget
    console.log(form.checkValidity());

    if(form.checkValidity()) {
      console.log(formData);
      console.log('El form fue validado');
      let responseData = await sendEmail(formData)
      console.log(responseData.data);
      form.reset()
    } else {
      setShow(true)
    }
  }

  const handleOnChange = (e) => {
    console.log(e.target.name); 
    console.log(e.target.value); 
    
    
    setFormData((prevState) => {
      return {
        ...prevState,
         [e.target.name]: e.target.value
      }
    })
  }
    console.log(formData);
  return(
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <h3>
              Get in touch <br></br>
              <span>We are hiring!</span>
            </h3>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control
                  onChange={handleOnChange}
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control
                  onChange={handleOnChange}
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                
                <Form.Control 
                  onChange={handleOnChange}
                  required
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                
                <Form.Control 
                  onChange={handleOnChange}
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  name="message"
                />

              </Form.Group>
              {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  Change this and that and try again.
                </p>
            </Alert> : null
              }
              

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>

          </Col>
          <Col md={12} lg={5}>
            <img src={ContactImage} alt="" className="globo"/>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

export default Contact