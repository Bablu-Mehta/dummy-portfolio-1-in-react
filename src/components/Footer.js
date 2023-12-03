import { FaEnvelope, FaFacebook, FaHome, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>123 Home</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4> 
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> 1234567902
                    </h4>
                </div>
                <div className='email'>
                    <h4> 
                        <FaEnvelope size={20} style={{color:"#fff", marginRight:"2rem"}}/> Info@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>Somthing about the person goes here</h4>
                <p>a lot of somthing goes here</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;