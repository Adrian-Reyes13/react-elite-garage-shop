import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import Header from "./Header"
import Navbar from "./components/Navbar.js"
import Footer from './Footer'
import CartWidget from './components/CartWidget'
import ItemCount from './components/ItemCount'

const App = () => {
  return <>
        <Header/>
        <Footer/>
        <Navbar/>
        <CartWidget/>
        <ItemCount/>

  </>
    
  
}

export default App