import React from 'react'
import '../styles/menucard.css'

const MenuCard = ({ img, title, price, desc }) => {
    return (
        <div className='menu__card'>
            <img className='menu_img' src={img} alt='img' />
            <div className='second_column'>
                <span>{title}</span>
                <span>{price}</span>
            </div>
            <div className='third_column'>
                <p>{desc}</p>

                <h3>Order a delivery</h3>
            </div>

        </div>
    )
}

export default MenuCard