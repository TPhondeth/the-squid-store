import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./index.css";
import a1 from  "../../a1.jpg"
import a3 from  "../../a3.jpg"
import a2 from  "../../a2.jpg"
import a4 from  "../../a4.jpg"
import a5 from  "../../a5.jpg"


function Rotation() {
    return (

        <div className="Carousel">
        <Carousel showThumbs={false}>
        <div>
            <img src={a1} />
       
        </div>
        <div>
            <img src={a2} />
          
        </div>
        <div>
            <img src={a3} />
           
        </div>
        <div>
            <img src={a4} />
           
        </div>
        <div>
            <img src={a5} />
           
        </div>
    </Carousel>
    </div>
    )
}

export default Rotation