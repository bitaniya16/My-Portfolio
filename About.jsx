import React from 'react';
import "./About.css";
import Image  from "../../assets/bitaQ2.svg";
import AboutBox from './AboutBox';
import ScrollDown from './ScrollDown2';
const About = () => {
  return (
    <section className="about container section" id='about' >
      <h1 className='section__title'>About Me</h1>

      <div className="about__container  grid">
       <img src={Image} alt="" className='about__img'
       style={
        {
          width: "100%",
          height: "50%",
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          margin: "0 auto",

        }
      }
       />

       <div className="about__data grid">
        <div className="about__info">
          <p>I am Bitaniya Ayenew Software Enginerring Student From Arbaminch University, Ethiopia.And Also I am crazy About Arts and Nature.I like drawing.</p>
          <div className="about__discription">
            <a href='' className="btn">Download Cv</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className='skills__name'>Front_End</h3>
                <span className='skills__number' >70%</span>
              </div>
              <div className="skills__bar">
                <spans className="skills__percentage front__end"></spans>
              </div>
            </div>
            
            <div className="skills__data">
              <div className="skills__title">
                <h3 className='skills__name'>Photography</h3>
                <span className='skills__number'>60%</span>
              </div>
              <div className="skills__bar">
                <spans className="skills__percentage photography"></spans>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className='skills__name'>Drawing</h3>
                <span className='skills__number' >70%</span>
              </div>
              <div className="skills__bar">
                <spans className="skills__percentage drawing"></spans>
              </div>
            </div>
             
             
          </div>
        </div>
       </div>
      </div>
      <AboutBox />
      <ScrollDown />
    </section>
  )
}

export default About;
