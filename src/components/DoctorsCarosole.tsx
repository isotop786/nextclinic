import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import img1 from '../../public/img/carousel-1.jpg';
import img2 from '../../public/img/carousel-2.jpg';
import img3 from '../../public/img/carousel-3.jpg';

import Image from 'next/image';

export default class DoctorsCarosole extends Component { 
    render() { 
        return ( 
            <div> 
              <Carousel autoPlay={true} interval={3500} infiniteLoop={true}> 
                  <div> 
                      <Image className="img-fluid"src={img1} width={0} height={0} alt="image1"/> 
                      <p className="legend">Cardiology</p> 
  
                  </div> 
                  <div> 
                      <Image className="img-fluid"src={img2} width={0} height={0} alt="image1"/> 
                      <p className="legend">Neurology</p> 
  
                  </div> 
                  <div> 
                      <Image className="img-fluid"src={img3} width={0} height={0} alt="image1"/> 
                      <p className="legend">Pulmonary</p> 
  
                  </div> 

              </Carousel> 
            </div> 
        ); 
    } 
};

