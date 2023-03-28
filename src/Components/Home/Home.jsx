import React from 'react';
import Best from "./Best/Best";
import Category from "./Category/Category";
import User from "./User/User";

const Home = () => {
    return (
        <div className={'category'}>
            <div className="container">
                <Best/>
                <Category/>
            </div>
        </div>
    );
};

export default Home;