import React from "react";
import FeatherUp from "../../assets/img/Icon feather-chevron-up.svg";
import FeatherDown from "../../assets/img/Icon feather-chevron-down.svg";



const Services = () => {
    return(
    <section id="services" className="services">
        
        <div className="acordeon-1">
            <h3>Sed ut perspiciatis</h3>
            <img src={FeatherUp} alt="flecha arribla"/>
        </div>
        <div className="acordeon-2">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="acordeon-3">
            <h3>Ut enim ad minima veniam</h3>
            <img src={FeatherDown} alt="flecha abajo"/>
        </div>
        <div className="acordeon-4">
            <h3>Sit amet, consectetur, adipisci</h3>
            <img src={FeatherDown} alt="flecha abajo"/>
        </div>
        
    </section>
    );
}

export default Services