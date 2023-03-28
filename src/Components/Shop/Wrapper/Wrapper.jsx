import React from 'react';
import Sale from "./Sale/Sale";
import Swiper from  "./Swiper/Swiper"
import "./wrapper.scss"
const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <div className="container">
                <h2 className="wrapper__title">Home / Shop</h2>
                <div className="wrapper__inner">
                    <div className="wrapper__div">
                        <Swiper/>
                    </div>
                    <Sale/>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;