import React, {useContext} from 'react';
import "./navbar.scss"
import img from "./Super Sale.png"
import plant from "./plant.png"
import Plant from "./Plant/Plant";
import {CustomContext} from "../../../../Context";
import {motion} from "framer-motion";

const textMotion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.8}
        }
    )
}

const Navbar = () => {
    const {t}= useContext(CustomContext)
    return (
        <motion.div initial = "hidden"  whileInView = "visible" custom = {1} variants={textMotion}  className={'navbar'}>
            <h2 className="navbar__title">{t("nav.categories")}</h2>
            <ul className="navbar__list">
                <li className="navbar__item">House Plants Accessories <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Potter Plants <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Seeds <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Small Plants <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Big Plants <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Succulents <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Trerrariums <span className={'navbar__span'}>(33)</span></li>
                <li className="navbar__item"> Gardening <span className={'navbar__span'}>(33)</span></li>
            </ul>
            <div className="navbar__range">
                <h3 className="navbar__subtitle">{t("nav.range")}</h3>
                 <input className={'navbar__input'} min={0} max={100} type="range"/>
                <p className="navbar__price">{t("nav.price")} $39 - $1230</p>
                <button className={'navbar__filter'}>{t("nav.filter")}</button>
            </div>
            <div className="navbar__inner">
                <h4 className="navbar__about">Size</h4>
                <ul className="navbar__size">
                    <li className="navbar__item-size">{t("nav.small")}<span className={'navbar__num'}>(33)</span></li>
                    <li className="navbar__item-size">{t("nav.medium")}<span className={'navbar__num'}>(33)</span></li>
                    <li className="navbar__item-size">{t("nav.large")}<span className={'navbar__num'}>(33)</span></li>
                </ul>
            </div>
            <Plant/>
        </motion.div>
    );
};

export default Navbar;