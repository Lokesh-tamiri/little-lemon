import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/titlecomponent.css'
import img from '../assets/gourmet.jpg'

const TitleComponent = () => {
    return (
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, quas quibusdam quis nihil commodi debitis autem ut neque quasi non atque beatae officiis voluptate quidem porro ullam iure sapiente illum.</p>
                    <NavLink to="/booking"><button className="btn">Reserve a Table</button></NavLink>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <img src={img} alt="Serving delicious dish" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TitleComponent