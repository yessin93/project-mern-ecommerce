import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


const Navbar = () => {
  return (

        <div className='navbar'>
          
        <ul >
            <li><Link to='/' className='link'><ion-icon name="home-outline"></ion-icon> Home</Link></li>
            <li><Link to='/Products' className='link'><ion-icon name="desktop-outline"></ion-icon> Products</Link></li>
            <li><Link to='#' className='link'><ion-icon name="chatbubbles-outline"></ion-icon> Contact us</Link> </li>
            <li><Link to='/SignIn' className='link'> <ion-icon name="person-outline"></ion-icon> Sign in</Link></li>
            <li><Link to='/SignUp'className='link'><ion-icon name="person-add-outline"></ion-icon> Sign up</Link></li>
            <li><Link to='#' className='link'><ion-icon name="cart-outline"></ion-icon> Cart</Link></li>
            
        </ul>
        </div>
        
  )
}

export default Navbar