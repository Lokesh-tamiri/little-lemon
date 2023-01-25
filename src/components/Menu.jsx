import React from 'react'
import '../styles/menu.css'
import img from '../assets/bruschetta1.jpg'
import MenuCard from './MenuCard'

const Menu = () => {
    return (


        <div className="specials-section-container">
            <div className="specials-section-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu">Online Menu</button>
                </div>
            </div>
            <div className='offer__cards'>
                <MenuCard
                    img={img}
                    title={"Burrito"}
                    price={10.0}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni natus, consequuntur earum"}
                />

                <MenuCard
                    img={img}
                    title={"Burrito"}
                    price={10.0}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni natus, consequuntur earum"}
                />

                <MenuCard
                    img={img}
                    title={"Burrito"}
                    price={10.0}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magni natus, consequuntur earum"}
                />

            </div>
        </div>

    )
}

export default Menu