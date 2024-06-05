import React from 'react';
import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './page/Home';


export default function App(){
  return (
  <BrowserRouter>
  <header>
  <nav>
  <Link t0="/home">#VANLive</Link>
  <Link t0="/about">About</Link>
  </nav>
  </header>
  
  <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />

    </Routes>
  </BrowserRouter>
  )
}


