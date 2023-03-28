import React, {useContext, useEffect, useState} from 'react';
import "./goods.scss"
import Cart from "./Cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getProduct} from "../../../../redux/reducers/cart";

import {CustomContext} from "../../../../Context";
import {motion} from "framer-motion";
import Paginate from "./Paginate/Paginate";
import MyLoader from "./Skeleton/MyLoader";
import {useNavigate} from "react-router-dom";
import qs from 'qs'
import CartNew from "./CartNew/CartNew";
import CartSold from "./CartSold/CartSold";



const textMotion = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }
    )

}
const cartMotion = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => (
        {
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }
    )

}
const Goods = () => {
    const [product,setProduct] = useState(true)
    const [sold,setSold] = useState(false)



    const navigate = useNavigate()
    const list = [
        { name:"DEFAULT",sort:'Rating'},
        { name:"PRICE(ASK)",sort:'price'},
        { name:"PRICE(DESK)",sort:'-price'},
        { name:"WORDS",sort:'title'},
    ]
    const dispatch = useDispatch()
    const  {data} = useSelector((store) => store.cart)

    const {t,value,open,setOpen,page,setPage,isLoading,setIsLoading,sortType,setSortType} = useContext(CustomContext)
    const sort = sortType.sort.replace('-','');
    const order = sortType.sort.includes('-') ? 'ask' : 'desk';



    useEffect(() => {
        axios(`http://localhost:8080/products?_page=${page}&_limit=6&_sort=${sort}&order=${order}`)
            .then(({data}) => dispatch(getProduct(data)) )
        setTimeout(() => {
            setIsLoading(false)
        },2000)
    },[page,sortType])

    useEffect(() => {
        const queryString =  qs.stringify({
            sortType:sortType.sort,
            page
        })
          navigate(`?${queryString}`)

    },[page,sortType])

  const onClickSold = () => {
       setSold(true)
  }
    const onClickAll = () => {
        setSold(false)
        setProduct(true)
    }
    const onClickNew = () => {
        setSold(false)
        setProduct(false)
    }
    const  onClickPop = () => {
        setOpen(!open)
    }
    const changeValue = (index) => {
         setSortType(index)
        setOpen(false)
    }


    return (
        <motion.div   initial = "hidden"  whileInView = "visible"  className={'goods'}>
                <div className="goods__category">
                   <motion.ul custom = {1} variants={textMotion}    className="goods__list">
                       <li  onClick={onClickAll}  className="goods__item">{t("array.all")}</li>
                       <li onClick={onClickNew}  className="goods__item">{t("array.new")}</li>
                       <li  onClick={onClickSold}  className="goods__item">{t("array.sale")}</li>
                   </motion.ul>
                    <div className="goods__sort">
                        <motion.h2 custom = {1} variants={textMotion} onClick={onClickPop}  className="goods__short">Sort by  <span className={'goods__type'}>{sortType.name}</span></motion.h2>
                        {
                            open ?     <ul className="goods__pop">
                                {
                                    list.map((item,index) => (
                                        <li onClick={() => changeValue(item)} className={`goods__el${sortType.sort === item.sort ? 'goods__el_id' : ''}`}>{item.name}</li>
                                    ))
                                }

                                       </ul> : ''
                        }

                        <motion.div custom = {1} variants={textMotion}   className="goods__line">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6666 1.66667L5.99998 6.33333L1.33331 1.66667" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            <div className="goods__wrapper">
                {
                    sold ? <CartSold/> :
                            product ? data.filter((el) => el.title.toLowerCase().includes(value.toLowerCase())).map((item) => (
                                isLoading ? [...new Array(16)].map((_,index) => <MyLoader key={index}/>) :
                                    <Cart key={item.id} item={item}/>
                            )) : <CartNew/>

                }



            </div>
            <Paginate onChange={(number) => setPage(number)}/>
        </motion.div>
    );
};

export default Goods;