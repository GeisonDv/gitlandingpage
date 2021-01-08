import React from 'react';
import Carditem from '../../components/Carditem';
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                            src="./images/img-6.jpg"
                            text="Explore the hidden waterfall deep 
                            inside the Amazon jungle" 
                            label="Adventure" 
                            path="/services"
                        />
                        <Carditem 
                            src="./images/img-2.jpg"
                            text="Travel through the Islands of  Bali in a Private Cruise" 
                            label="Luxury" 
                            path="/products"
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                            src="./images/img-9.jpg"
                            text="Explore the hidden waterfall deep 
                            inside the Amazon jungle" 
                            label="Adventure" 
                            path="/sign-up"
                        />
                        <Carditem 
                            src="./images/img-4.jpg"
                            text="Travel through the Islands of  Bali in a Private Cruise" 
                            label="Luxury" 
                            path="/products"
                        />
                        <Carditem 
                            src="./images/img-8.jpg"
                            text="Travel through the Islands of  Bali in a Private Cruise" 
                            label="Adrenaline" 
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
