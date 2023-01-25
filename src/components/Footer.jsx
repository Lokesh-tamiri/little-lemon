import React from 'react'
import logo from '../assets/logo.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="footer-background">
                    <div className="footer-container">
                        <img src={logo} alt="Little Lemon logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magni aliquid, iusto pariatur quidem dicta? Hic sequi nemo inventore quos alias aspernatur, consequatur quis iusto, error recusandae quae laboriosam odio?</p>
                        <div className="footer-content">
                            <div className="locations">
                                <h5>LOCATIONS</h5>
                                <ul>
                                    <li>London</li>
                                    <li>London</li>
                                    <li>London</li>
                                    <li>London</li>
                                </ul>
                            </div>
                            <div className="opening-times">
                                <h5>OPENING TIMES</h5>
                                <ul>
                                    <li>Mon - Wed: 10:30AM - 12:00AM</li>
                                    <li>Fri: 12:00PM - 1:00AM</li>
                                    <li>Sat - Sun: 10:30AM - 12:00AM</li>
                                </ul>
                            </div>
                            <div className="contact">
                                <h5>CONTACT US</h5>
                                <ul>
                                    <li>London, UK</li>
                                    <li>Tel: 1234567890</li>
                                    <li>Email: info@littlelemon.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer