import React from 'react';
import "./total.scss"
import {useSelector} from "react-redux";
const Total = () => {
    const {totalPrice} = useSelector((state) => state.basket)
    return (
        <div className={'total'}>
            <h2 className="total__title">Cart Totals</h2>
            <h3 className="total__subtitle">Coupon Apply</h3>
            <div className="total__wrapper">
                <label  className={'total__label'}>
                    <input placeholder={'Enter coupon code here...'} className={'total__input'} type="text"/>
                </label>
                <div className="total__apply">
                    Apply
                </div>
            </div>
            <div className="total__wrapp">
                <h4 className="total__txt">Subtotal</h4>
                <p className="total__money">$2,683.00</p>
            </div>
            <div className="total__wrapp">
                <h4 className="total__txt">Coupon Discount</h4>
                <p className="total__money">(-) 00.00</p>
            </div>
            <div className="total__wrapp">
                <h4 className="total__txt">Shiping</h4>
                <p className="total__money">$16.00</p>
            </div>
            <div className="total__inner">
               <div className="total__oval"></div>
                <div className="total__dollar">View shipping charge</div>
            </div>
            <div className="total__inner">
                <h5 className="total__all">Total</h5>
                <div className="total__num">{totalPrice} $</div>
            </div>

            <button className={'total__btn'}>Proceed To Checkout</button>
            <button className={'total__btn-sec'}>Proceed To Checkout</button>
        </div>
    );
};

export default Total;