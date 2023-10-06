//React-router-dom imports
import {
  shRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//Boostrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Components imports
import NavBar from './components/Navbar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContextProvider from './components/context/CartContext.jsx';
import CartContainer from './components/CartContainer/CartContainer.jsx';
import Error404 from './components/404/Error404.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';

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
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </Router>

    </>
  )
}

export default App
