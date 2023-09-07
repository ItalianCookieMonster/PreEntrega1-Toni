import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';




function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Hero />
        <Routes>
        <Route path='/' element={  <ItemListContainer />}/>
        <Route path='/category/:cid' element={  <ItemListContainer />}/>
        <Route path='/detail/:pid' element={  <ItemDetailContainer />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
