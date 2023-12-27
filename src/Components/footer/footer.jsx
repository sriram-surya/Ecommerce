import React from 'react'
import './footer.css'
import { FaCrown } from "react-icons/fa";
import instagram_icon from '../Assets/images/instagram_icon.png'
import whatapp_icon from '../Assets/images/whatsapp_icon.png'
import pinterst_icon from '../Assets/images/pintester_icon.png'


const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
           
            <p> <FaCrown/> ARMOUR</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Shops</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div> 
            <div className="footer-icons-container">
            <img src={whatapp_icon} alt="" />
            </div> 
            <div className="footer-icons-container">
            <img src={pinterst_icon} alt="" />
            </div> 
                
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default footer