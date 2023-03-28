import React, {useContext, useState} from 'react';
import {createContext} from "react";
import {useTranslation} from "react-i18next";
export  const CustomContext = createContext()

const Context = (props) => {
    const [popUp,setPopUp] =useState(false)
    const [value,setValue] = useState('')
    const [active,setActive] = useState(false)
    const {t,i18n} = useTranslation()
        const [open,setOpen] = useState(false)
    const [choose,setChoose] = useState(0)
    const [page,setPage] = useState(1)
    const [isLoading,setIsLoading] = useState(true)
    const [sortType,setSortType] = useState({
          name:"Default",sort:'rating'
    })

    const valueContext = {
        t,
        i18n,
       value,
        setValue,
        popUp,
        setPopUp,
        active,setActive,
        open,
        setOpen,
        choose,
        setChoose,
        page,
        setPage,
        isLoading,
        setIsLoading,
        sortType,
        setSortType
    }
    return <CustomContext.Provider  value={valueContext}>
                {props.children}
           </CustomContext.Provider>
};

export default Context
