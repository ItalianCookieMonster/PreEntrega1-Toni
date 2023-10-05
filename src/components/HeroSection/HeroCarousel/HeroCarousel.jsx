/* eslint-disable react/no-unescaped-entities */
import Carousel from "react-bootstrap/Carousel"

import Hero1 from "../Hero1/Hero1"
import Hero2 from "../Hero2/Hero2"
import Hero3 from "../Hero3/Hero3"

const HeroCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <Hero1 />
            </Carousel.Item>
            <Carousel.Item>
                <Hero2 />
            </Carousel.Item>
            <Carousel.Item>
                <Hero3 />
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroCarousel