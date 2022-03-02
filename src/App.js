import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import Header from "./Header"
import Navbar from "./components/Navbar.js"
import Footer from './Footer'

const App = () => {
  return <>
        <Header/>
        <Footer/>
        <Navbar/>

  </>
    
  
}

export default App