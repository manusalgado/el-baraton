import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import vinos from '../../assets/images/vinos.png'
import bebidas from '../../assets/images/bebidas.png'

class Banner extends React.Component {
    render () {
        return (
            <Carousel>
                <div>
                    <img src={vinos} alt="Vinos"/>
                </div>
                <div>
                    <img src={bebidas} alt="bebidas"/>
                </div>
            </Carousel>
        )
    }
}

export default Banner