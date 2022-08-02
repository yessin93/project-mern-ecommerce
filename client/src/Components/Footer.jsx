import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-conatiner'>
        <div className='footer'>


       <div className='footer-heading footer-1'>
       <h2>About us</h2>
       <a href='#'>Blog </a>  
       <a href='#'>Demo  </a>
       <a href='#'>Customers </a>
       <a href='#'>Investors  </a>
       <a href='#'>Terms of service </a>
       </div>

       <div className='footer-heading footer-2'>
       <h2>Contact us</h2>
       <a href='#'>Support </a>  
       <a href='#'>Contact </a>
       <a href='#'>Sponsoships </a>
       </div>

       <div className='footer-heading footer-3'>
       <h2>Social media</h2>
       <a href='#'>Instagram </a>  
       <a href='#'>Facebook  </a>
       <a href='#'>Youtube </a>
       <a href='#'>Twitter  </a>
       </div>
       <div className='footer-email-form'>
        <h2>Join our newsletter</h2>
        <input type="email" placeholder="Enter your email adress" id="footer-email"></input>
        <input type="submit" value="Sign Up" id="footer-email-btn"></input>
       </div>

       </div>






    </div>
  )
}

export default Footer