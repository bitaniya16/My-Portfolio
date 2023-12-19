import React from 'react'
import "./Blog.css"
import Image1 from"../../assets/bitaQ.svg";
import Image2 from"../../assets/blogs1.svg";
import Image3 from"../../assets/blogs2.svg";

const Blog = () => {
  return (
    <section className="Blogs continaer section" id='Blogs' >
      <h1 className="section__title">Latest Posts</h1>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#" ><span className="blog__category">My Videos</span></a>
            <a href="#" ><img src={Image1} alt="" className='blog__img'/></a>
            
          </div>
          <div className="blog__details">
            <h2 className='blog__title'>Tik Tok</h2>
            <a href="https://www.tiktok.com/@bitayee?_t=8hNktyXO
         " className='home__social-link' target='_blank'>
        <i class="fa-brands fa-tiktok"></i>
        </a>
            <div className="blog__meta">
              <span>2023</span>
              <span className="blog__dot"></span>
              
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#" ><span className="blog__category">My Instagram Pictures</span></a>
            <a href="#" ><img src={Image2} alt="" className='blog__img'/>
            </a>
            
          </div>
          <div className="blog__details">
            <h2 className='blog__title'>Instagram</h2>
            <a href="https://www.instagram.com/
         " className='home__social-link' target='_blank'>
        <i class="fa-brands fa-square-instagram"></i>
        </a>
            <div className="blog__meta">
              <span>2023</span>
              <span className="blog__dot"></span>
              
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#" ><span className="blog__category">My Facebook</span></a>
            <a href="#" ><img src={Image3} alt="" className='blog__img'/></a>
           
          </div>
          <div className="blog__details">
            <h2 className='blog__title'>Facebook</h2>
            <a href="https://www.facebook.com/
         " className='home__social-link' target='_blank'>
        <i class="fa-brands fa-facebook"></i>
        </a>
            <div className="blog__meta">
              <span>2023</span>
              <span className="blog__dot"></span>
        
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
