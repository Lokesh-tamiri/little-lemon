import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="image-wrapper">
                    <NavLink to="/">{<img className="logo-img" src={logo} alt="Little Lemon logo" />}</NavLink>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header