import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
   <section  className="section ContactMe container section" id='ContactMe'>
    
    <h1 className="section__title">Get In Touch With Me</h1>

    <div className="contact__container grid">
      <div className="contact__info">
      <p className="contact__details">Need toget in touch?No problem!You can use my contact form to send me a message.👋</p>
      <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h2>Location:</h2>
                <p>Addis abeba,Ethiopia</p>
                <div>
          <iframe  src="https://www.google.com/maps/place/Addis+Ababa/data=!4m2!3m1!1s0x164b85cef5ab402d:0x8467b6b037a24d49?sa=X&ved=2ahUKEwjVgPWil8uCAxWEs6QKHQkCDD0Q8gF6BAhaEAA&hl=en" frameborder="0" allowfullscreen=""></iframe>
          
        </div>
              </div>
              
    </div>

    <form action="" className="contact__form">
      <div className="contact__form-group">
        <div className="contact__form-div">
          <input type="text" className="contact__form-input"
          placeholder='Insert Your Name' />
        </div>

        <div className="contact__form-div">
          <input type="email" className="contact__form-input"
          placeholder='Insert Your Email' />
        </div>
      </div>

      <div className="contact__form-div">
          <input type="text" className="contact__form-input"
          placeholder='Insert Your Subject' />
        </div>

        <div className="contact__form-div contact__form-area">
          <textarea name="" id="" cols="30" rows="10" class='Contact__form-input' placeholder='Write your message'>

          </textarea>
          <div className="col-md-12">
          <span className="checkmark">
            <label class="form-group custom-checkbox float-left">I've read to contact you  <input type="checkbox" class="form-control" name="privacy-policy" value="accept"/>  </label> </span></div>

          <button className='btn'> Send</button>
        </div>
        
        
    </form>
    
    </div>
   </section>
  );
};

export default Contact
