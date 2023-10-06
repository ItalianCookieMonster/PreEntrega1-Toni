/* eslint-disable react/no-unescaped-entities */

// Boostrap component imports
import Container from "react-bootstrap/Container"

const AboutUs = () => {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center p-4'>
            <h2>Ooops, the "About us" page is under construction. Please check back later. Thank you! 😄</h2>
            <img width='400px' height='400px' className='mt-3' style={{ borderRadius: '50%' }} src='/public/assets/img/under-construction.png' alt='under construction' />
        </Container>
    )
}

export default AboutUs