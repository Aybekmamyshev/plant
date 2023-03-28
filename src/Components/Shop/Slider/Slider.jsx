import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import {useSelector} from "react-redux";

export default function App() {
    const {data} = useSelector((store) => store.cart)
    return (
        <div className={'mySwiperSecond'}>
            <h2 className="mySwiperSecond__list">Releted Products</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiperSecond"
            >
                {
                    data.map((item) => (
                        <SwiperSlide className={'mySwiperSecond__wrapp'}>
                            <div className="mySwiperSecond__box">
                                <img src={item.image} alt=""/>
                            </div>
                            <h2 className="mySwiperSecond__title">{item.title}</h2>
                            <span className="mySwiperSecond__price">{item.price}</span>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}
