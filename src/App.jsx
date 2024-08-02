import React from "react"
import './index.css';
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Hero/>
      <About/>
      <Tech/>
      <Works/>
      <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
    </BrowserRouter>
    
  )
}

export default App
