import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
      <div className="about__box">
        <div className="about__icon icon-fire"
        style={
          {
            width: "140px",
            height: "150px",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            margin: "0 auto",
    
          }
        }>
            <div>
                <h3 className="about__title">3 </h3>
                <span className="about__subtitle"
                >Project Completed</span>
            </div>
        </div>
      </div>

      <div className="about__box">
        <div className="about__icon icon-cup"
        style={
          {
            width: "120px",
            height: "130px",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            margin: "0 auto",
    
          }
        }>
            <div>
                <h3 className="about__title"> 350 </h3>
                <span className="about__subtitle">Cup Of Coffee</span>
            </div>
        </div>
      </div>

    </div>
  )
}

export default AboutBox
