// import { useState } from 'react'

import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <NavBar />

      <ItemListContainer saluda="Greetings!" />
    </>
  )
}

export default App
