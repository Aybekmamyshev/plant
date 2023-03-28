import React, {useContext} from 'react';
import plant from './01 1.png'
import "./best.scss"
 import {motion} from "framer-motion";

import "./../../../i18n"
import {CustomContext} from "../../../Context";
import {Link} from "react-router-dom";

const textMotion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        }
    )

}
const Best = () => {
    const {t} = useContext(CustomContext)
    return (

            <motion.section
                vieport = {{amount:0.2,once: true}}
                initial = "hidden"
                whileInView = "visible"
                className={'best'}>
                <div className="container">
                    <div className="best__block">
                        <motion.p custom = {1} variants={textMotion} className="best__title">{t("let.list1")}</motion.p>
                        <motion.h3 custom = {2} variants = {textMotion} className="best__subtitle">{t("let.list2")}</motion.h3>
                        <motion.p custom = {3} variants = {textMotion} className="best__txt">{t("let.list3")}</motion.p>
                        <Link to={'/shop'}>
                            <motion.button custom = {3} variants = {textMotion}  className={'best__btn'}>{t("let.list4")}</motion.button>
                        </Link>
                    </div>
                    <motion.div custom = {3} variants = {textMotion} className="best__box">
                        <img  src={plant} alt=""/>
                    </motion.div>
                </div>
            </motion.section>


    );
};

export default Best;