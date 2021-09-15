import React from 'react';
import LeftArrow from "../../assets/img/Icon feather-arrow-left-circle.svg";
import RightArrow from "../../assets/img/Icon feather-arrow-right-circle.svg";
import LakeHouse from "../../assets/img/section3-image.png";



const Products = () => {
    return( 
        <section id="products" className="products">
            <div className="cuadro-products">
                <h3>Sed ut perspiciatis</h3>
                <h2>Nemo Enim</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <img src={LeftArrow} alt="left-arrow" className="flecha-izquierda"/>
                <img src={RightArrow} alt="right-arrow" className="flecha-derecha"/>
            </div >
            <img src={LakeHouse} alt="casa de lago" className="section3-image"/>
        </section>
    );
}


export default Products