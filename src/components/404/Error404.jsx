/* eslint-disable react/no-unescaped-entities */

// External libraries 
import { Link } from 'react-router-dom';

// Boostap Component imports
import Container from 'react-bootstrap/Container';

// Component imports
import MyButton from '../Buttons/MyButton/MyButton';

const Error404 = () => {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center p-4'>
      <h2>Ooops, it looks like you're in the wrong place.</h2>
      <img width='400px' height='400px' className='mt-3' style={{ borderRadius: '50%' }} src='/public/assets/img/404-error.jpg' alt='under construction' />
      <Link to='/'><MyButton>Go to Homepage</MyButton></Link>
    </Container>
  )
}

export default Error404