import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {addToShop} from "../../../../redux/reducers/sale";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper.scss"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {data} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    data.map((item) => (
                        <SwiperSlide>
                            <img src={item.image} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                direction={"vertical"}

            >
                {
                    data.map((item) => (
                        <SwiperSlide>
                            <img onClick={() => dispatch(addToShop(item))} src= {item.image} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
