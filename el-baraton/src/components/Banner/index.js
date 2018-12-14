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
                    <img src={vinos} />
                    <p className="legend">Vinos</p>
                </div>
                <div>
                    <img src={bebidas} />
                    <p className="legend">Bebidas</p>
                </div>
            </Carousel>
        )
    }
}

export default Banner