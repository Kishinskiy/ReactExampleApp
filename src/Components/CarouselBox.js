import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../Assets/Slide1.jpg'
import slide2 from '../Assets/Slide2.jpeg'
import slide3 from '../Assets/Slide3.jpeg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Slide1"
                    />
                    <Carousel.Caption>
                        <h3>Slide1</h3>
                        <p>Ea magna Lorem laborum do adipisicing in nulla est et irure aute. Anim est adipisicing esse consequat amet sit. Incididunt eu id magna officia proident. Exercitation anim nostrud ut tempor amet sunt et consequat nisi. Eu et Lorem sint ea voluptate ullamco veniam amet commodo irure ullamco Lorem laboris eu.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Slide2"
                    />
                    <Carousel.Caption>
                        <h3>Slide1</h3>
                        <p>Ea magna Lorem laborum do adipisicing in nulla est et irure aute. Anim est adipisicing esse consequat amet sit. Incididunt eu id magna officia proident. Exercitation anim nostrud ut tempor amet sunt et consequat nisi. Eu et Lorem sint ea voluptate ullamco veniam amet commodo irure ullamco Lorem laboris eu.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Slide3"
                    />
                    <Carousel.Caption>
                        <h3>Slide1</h3>
                        <p>Ea magna Lorem laborum do adipisicing in nulla est et irure aute. Anim est adipisicing esse consequat amet sit. Incididunt eu id magna officia proident. Exercitation anim nostrud ut tempor amet sunt et consequat nisi. Eu et Lorem sint ea voluptate ullamco veniam amet commodo irure ullamco Lorem laboris eu.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
