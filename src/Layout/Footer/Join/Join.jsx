import React from 'react';
import pic from "../first.png";
import second from "../second.png";
import "./join.scss"

const Join = () => {
    return (
        <div className={'join'}>
            <div className="join__wrapper">
                <div className="join__wrapp">
                    <div className="join__block">
                        <div className="join__image">
                            <img className={'footer__picture'} src={pic} alt=""/>
                        </div>
                        <h2 className="join__title">Garden Care</h2>
                        <p className="join__txt">We are an online plant shop offering a wide range of cheap and trendy plants.</p>

                    </div>
                    <div className="join__block">
                        <div className="join__image">
                            <img className={'footer__picture'} src={second} alt=""/>
                        </div>
                        <h2 className="join__title">Plant Renovation</h2>
                        <p className="join__txt">We are an online plant shop offering a wide range of cheap and trendy plants.</p>

                    </div>
                    <div className="join__block">
                        <div className="join__image">
                            <img className={'footer__picture'} src={second} alt=""/>
                        </div>
                        <h2 className="join__title">Watering Graden</h2>
                        <p className="join__txt">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                </div>
            <div className="join__box">
                <h3 className="join__subtitle">Would you like to join newsletters?</h3>
                <label className={'join__label'}>
                    <input placeholder={'enter your email address...'} className={'join__input'} type="text"/>
                    <button className={'join__btn'}>Join</button>
                </label>
                <p className="join__text">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
            </div>
        </div>
    );
};

export default Join;