import React from 'react'
import './Footer.css'
import fb from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import LinkedIn from '../Assets/linkedin.png'
import inst from '../Assets/instagram.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/healthplan">
                        <p>Health Plan</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Resources</h4>
                    <a href="/employer">
                        <p>Resources Center</p>
                    </a>
                    <a href="/healthplan">
                        <p>Testimonials</p>
                    </a>
                    <a href="/individual">
                        <p>STV</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Minute Magic</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">
                        <p><img src={fb}/></p>
                        <p><img src={twitter}/></p>
                        <p><img src={LinkedIn}/></p>
                        <p><img src={inst}/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer