import React from 'react';
import picture from './images.png'
import "./lost.scss"
const Lost = () => {
    return (
        <div className={'lost'}>
            <div className="lost__pic">
                <img className={'lost__find'} src={picture} alt=""/>
            </div>
            <div className="lost__wrapper">
                <h2 className="lost__title">Ничего не найдено</h2>
                <p className="lost__txt">Добавьте что нибудь</p>
            </div>

        </div>
    );
};

export default Lost;