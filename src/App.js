import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import Header from "./Header"
import Navbar from "./components/Navbar.js"
import Footer from './Footer'
import CartWidget from './components/CartWidget'

const App = () => {
  return <>
        <Header/>
        <Footer/>
        <Navbar/>
        <CartWidget/>

  </>
    
  
}

export default App