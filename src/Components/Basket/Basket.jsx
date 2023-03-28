import React from 'react';
import Buy from "./Buy/Buy";
import "./basket.scss"
import Total from "./Total/Total";
 import Slider from '../Shop/Slider/Slider'
const Basket = () => {
    return (
        <section className={'basket'}>
            <div className="container">
                <div className="basket__list">
                    <p className="basket__link">Home /</p>
                    <p className="basket__link">Shop/</p>
                    <p className="basket__link">Shopping Cart/</p>
                </div>
                <div className="basket__wrapper">
                     <Buy/>
                    <Total/>
                </div>
                <Slider/>
            </div>
        </section>
    );
};

export default Basket;