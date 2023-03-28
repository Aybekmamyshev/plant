import React from 'react';
import "./buy.scss"
import pic from "./image 11 (2).png"
import {removeCart} from "../../../redux/reducers/basket";
import {useDispatch, useSelector} from "react-redux";
import {addCount,removeCount,clearCart} from "../../../redux/reducers/basket";
import Lost from "./Lost/Lost";

const Buy = () => {
    const dispatch = useDispatch()
    const  {data,total} = useSelector((store) => store.basket)
    return (

        <div className={'buy'}>
            <div className="buy__row">
                <h2 className="buy__title buy__title_first">Products</h2>
                <h3 className="buy__title buy__title_sub">Price</h3>
                <h4 className="buy__title buy__title_center">Quantity</h4>
                <h5 className="buy__title buy__title_last">Total</h5>
                <h5 onClick={() => dispatch(clearCart())} className="buy__title buy__title_clear">Очистить</h5>
            </div>
            <div className="buy__row-sec">
                {
                    data.length ?  data.map((item) => (


                        <div className="buy__block">
                            <div className="buy__wrapp">
                                <div className="buy__pic">
                                    <img className={'buy__img'} src={item.image} alt=""/>
                                </div>
                                <div className="buy__about">
                                    <h5 className="buy__name">{item.title}</h5>
                                    <p className="buy__text">SKU: 1995751877966</p>
                                </div>
                            </div>
                            <p className="buy__price">{item.price}</p>
                            <div className="buy__add">
                                <button disabled={item.count === 0 ? true : ''}  onClick={() =>dispatch(removeCount(item))} className={'buy__btn'}>-</button>
                                <span className={'buy__count'}>{item.count}</span>
                                <button onClick={() => dispatch(addCount(item)) } className={'buy__btn'}>+</button>
                            </div>
                            <p className="buy__total">$ {total}</p>
                            <div onClick={() => dispatch(removeCart(item.id))} className="buy__clear">
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8892 8.55408C15.8892 16.5731 17.0435 20.1979 9.27967 20.1979C1.5149 20.1979 2.693 16.5731 2.693 8.55408" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17.3651 5.47979H1.2146" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7148 5.47979C12.7148 5.47979 13.2434 1.71408 9.28911 1.71408C5.33578 1.71408 5.86435 5.47979 5.86435 5.47979" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </div>
                        </div>
                    )) : <Lost/>


                }


            </div>
        </div>
    );
};

export default Buy;