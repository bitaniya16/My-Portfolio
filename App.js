import React from 'react';
import './App.css';
import "./index.css";
import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Blog from './Components/Blogs/Blog';
import ContactMe from './Components/ContactMe/Contact';

const App = () => {
  return (
<>
<Sidebar/>
<main className='main'>
  <Home />
  <About />
  <Blog />
  <ContactMe />
  
</main>
</>
  )
}

export default App
