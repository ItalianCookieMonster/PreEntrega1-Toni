import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar.jsx';
// import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContextProvider from './components/context/CartContext.jsx';
import CartContainer from './components/CartContainer/CartContainer.jsx';
// import RegForm from './components/Forms/RegForm/RegForm.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';



function App() {

  return (
    <>
      <Router>
        <CartContextProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:cid' element={<ItemListContainer />} />
              <Route path='/detail/:pid' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
            </Routes>
          <Footer />
        </CartContextProvider>
      </Router>

    </>
  )
}

export default App
