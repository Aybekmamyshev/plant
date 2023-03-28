import React from 'react';
import Wrapper from "./Wrapper/Wrapper";
import Description from "./Description/Description";
import  Slider from  "./Slider/Slider"
const Shop = () => {
    return (
        <div className={'shop'}>
            <div className="container">
                <Wrapper/>
                <Description/>
                <Slider/>
            </div>

        </div>
    );
};

export default Shop;