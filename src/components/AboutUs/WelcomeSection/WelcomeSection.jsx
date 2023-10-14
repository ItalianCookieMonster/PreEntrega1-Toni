//Boostrap components
import Container from 'react-bootstrap/Container';

//Styles
import '../AboutUs.css'

const WelcomeSection = () => {
    return (
        <Container className="welcome-container">
            <h2 className="about-title">Welcome to SustainiShop</h2>
            <p>Welcome to Sustainishop, your destination for a greener, more sustainable future!</p>
            <p>At Sustainishop, we are driven by a shared passion for preserving our planet and reducing the detrimental impact of plastic and waste on our environment. </p>
            <p>Our mission is simple yet profound: to offer you a curated selection of high-quality, eco-friendly, and sustainable products that empower you to make environmentally conscious choices in your everyday life.</p>
        </Container>
    )
}

export default WelcomeSection