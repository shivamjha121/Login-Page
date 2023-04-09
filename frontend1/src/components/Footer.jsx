import React from 'react'
import logo from '../img/logo.png'
import './Footer.css'
function Footer() {
  return (
    <div >
        <footer className='footer'>
        <h4>Powered by</h4>
        <img src={logo} alt='logo'/>
        <a className='need a'  href='' >Need Help?</a>
        <a className='a' href='' >Privecy Policy</a>
      
        <p className='and'>&</p>
        <a className='a t' href='' >Terms</a>



        </footer>
       
    </div>
  )
}

export default Footer