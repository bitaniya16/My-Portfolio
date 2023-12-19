import React from 'react';
import "./Home.css";
import Me from "../../assets/bitaQ.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
function Home() {
  return (
    <section  className='Home container' id='Home'>
      
      <div className="intro">
        
        <img  src={Me} alt="" className='home__img' 
        style={
          {
            width: "30%",
            height: "30%",
            objectFit: "contain",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            margin: "0 auto",
            display: "block"

          }
        } />
        <h1 className='home__name'>Bitaniya Ayenew</h1>
        
        <h4>I'm Front_end Developer<span className='home__education'> 
        </span></h4>
        <p>Hey wellcome! to My website.I am Bitaniya Ayenew and I am from Ethiopia.Anyone who wanna talk to me can find me by 👇 accounts </p>
        <HeaderSocials />

        <a href="#ContactUs" className='btn'>Hire Me</a>
        <ScrollDown />
      </div>
      
    </section>
   
  ) 
}

export default Home
