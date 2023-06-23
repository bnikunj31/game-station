import React from 'react'
import './styles/Footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footercontainer">
                <div className="box1 box">
                    <h1 className='footer-heading'>About Us</h1>
                    <div className="footer-box1-links">Game Station is a demo webpage. All rights and &copy; reserved and designed, by Nikunj Bansal. Game Station is a website where we have imformation about games.</div>
                </div>
                <div className="box2 box">
                    <h1 className='footer-heading'>Categories</h1>
                    <p className="footer-box2-links">Action</p>
                    <p className="footer-box2-links">Adventure</p>
                    <p className="footer-box2-links">Survival</p>
                    <p className="footer-box2-links">Simulation</p>
                    <p className="footer-box2-links">Racing</p>
                </div>
                <div className="box3 box">
                    <h1 className='footer-heading'>Platforms</h1>
                    <p className="footer-box3-links">Xbox</p>
                    <p className="footer-box3-links">MAC</p>
                    <p className="footer-box3-links">Windows</p>
                    <p className="footer-box3-links">IOS</p>
                    <p className="footer-box3-links">Android</p>
                </div>
                <div className="box4 box">
                    <h1 className='footer-heading'>Contact Us</h1>
                        <div className="footer-box4-links">
                        <div className='footer-box4-links-child'>
                            <a href='mailto:nikunj.banssal@gmail.com'><i className="footer-box4-icon fa-solid fa-envelope  fa-beat-fade"></i><span className='mail'>nikunj.banssal@gmail.com</span></a>
                        </div>
                        <div className='footer-box4-links-child'>
                            <i className="footer-box4-icon fa-solid fa-location-dot fa-bounce"></i><span className='mail'>Jagadhri, YamunaNagar, 135001, Haryana</span>
                        </div>
                        <div className='footer-box4-links-child'>
                            <a href='tel:+919729891959'><i className="footer-box4-icon fa-solid fa-phone fa-shake"></i><span className='mail'>+91-1234567890</span></a>
                        </div>
                        </div>
                        <div className="icons">
                            <a className='social-profiles' href='https://www.linkedin.com/in/nikunj-bansal-webdeveloper/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin"></i></a>
                            <a className='social-profiles' href='https://instagram.com/nikunj0_obansal?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noreferrer'><i class="fa-brands fa-instagram"></i></a>
                            <a className='social-profiles' href='https://www.facebook.com/nikunj.bansal.3956/' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook"></i></a>
                            <a className='social-profiles' href='https://github.com/bnikunj31' target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                        </div>
                </div>
            </div>
            <div className="footer-content">
                &copy; 2023 Game Station. All rights reserved | Design by Nikunj Bansal
            </div>
        </div>
    )
}
