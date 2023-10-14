//My components
import HeroContact from "../HeroSection/HeroContact/HeroContact"
import ContactContainer from "./ContactContainer/ContactContainer"

const ContactUs = () => {
    return (
        // <Container className='d-flex flex-column justify-content-center align-items-center p-4'>
        //     <h2>Ooops, the contanct page is under construction. Please check back later. Thank you! 😄</h2>
        //     <img
        //         width='400px'
        //         height='400px'
        //         className='mt-3'
        //         style={{ borderRadius: '50%' }}
        //         src='/assets/img/under-construction.png'
        //         alt='under construction'
        //     />
        // </Container>
        <>
            <HeroContact />
            <ContactContainer />
        </>
    )
}

export default ContactUs