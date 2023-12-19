import React from 'react';
import "./Sidebar.css";
import logo from "../assets/bitasLogo.svg";
const Sidebar = () => {
  return (
   <aside className='aside'>
    <a href="#Home" className='nav__logo'>
      <img src={logo} alt=""
      style=
        {
          {
          width: "100px",
          height: "80px",
          borderRadius: "100%",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          margin: "0 auto",
          display: "block",
          
      }
    }
      />
    </a>
    <nav className='nav' >
      <div className='nav__menu'>
        <ul className='nav__list'>

          <li className='nav__item'>
            <a href="#Home" className='nav__link'>
              <i className="icon-home"></i></a>
          </li>

          <li className='nav__item'>
            <a href="#about" className='nav__link'>
            <i className="icon-user-following"></i></a>   
          </li>

          <li className='nav__item'>
            <a href="#Blogs" className='nav__link'>
            <i className="icon-briefcase"></i></a>   
          </li> 

          <li className='nav__item'>
            <a href="#ContactMe" className='nav__link'>
            <i className="icon-graduation"></i></a>   
          </li> 

           

        </ul>
      </div>
    </nav>

    <div className="nav__footer">
      
    </div>
   </aside>
  )
}

export default Sidebar
