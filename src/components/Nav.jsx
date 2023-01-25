import React from 'react'
import '../styles/navigation.css'


const Nav = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav