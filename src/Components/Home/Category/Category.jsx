import React from 'react';
import Navbar from "./Navbar/Navbar";
import Goods from "./Goods/Goods";
import "./category.scss"
const Category = () => {
    return (
        <div className={'category'}>
            <div className="category__wrapper">
                <Navbar/>
                <Goods/>
            </div>
        </div>
    );
};

export default Category;