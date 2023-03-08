
import React from 'react';
import './App.css';
import Navbar from './mycomponent/Navbar';
import Main from './mycomponent/Main';
import About from './mycomponent/About';
import Footer from './mycomponent/Footer';
import Skills from './mycomponent/Skills';

function App(){
  return (
 <>
 <Navbar/>
 <Main/>
 <Skills/>
 <About/>
 <Footer/>
 </>
  );
}

export default App;

