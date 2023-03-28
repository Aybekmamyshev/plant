import React from 'react';
import img from "../Super Sale.png";
import plant from "../plant.png";
import "./plant.scss"
const Plant = () => {
    return (
        <div className={'plant'}>
            <div className="plant__super">
                <img src={img} alt=""/>
            </div>
            <h4 className="plant__procent">UP TO 75% OFF</h4>
            <div className="plant__picture">
                <img src={plant} alt=""/>
            </div>
        </div>
    );
};

export default Plant;