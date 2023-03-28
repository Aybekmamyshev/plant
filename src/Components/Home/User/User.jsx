import React, {useContext} from 'react';
import "./user.scss"
import {CustomContext} from "../../../Context";
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {dark} from "@material-ui/core/styles/createPalette";

const User = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {popUp,setPopUp} = useContext(CustomContext)
    const {
         reset,
        register,
        handleSubmit,
        formState: {
             errors
        }
    } = useForm({
        mode:'onBlur'
    })
    const registerUser =  (data) => {
        axios.post('http://localhost:8080/users', {
            ...data
        }).then((res) => {
            console.log(data)
            reset()
            navigate('/')

        })
            .catch((error) => error)

    }
    const loginUser = (data) => {
        axios.post('http://localhost:8080/users', {
            ...data,
        }).then(() => {
            reset()
            navigate('/')

        })


    }

    const onSubmit = (data) => {
        location.pathname === 'register' ? registerUser(data) : loginUser(data)
        setPopUp(false)
    }
    return (
        <>
            {
                popUp ?
                    <div onSubmit={handleSubmit(onSubmit)} onClick={() => setPopUp(false)} className={'user'}>
                        <form   onClick={(event) => event.stopPropagation() } action="" className="user__form">
                            <div className="user__wrapper">
                                <Link to={'/login'} className={`user__login ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
                                <Link to={'/register'} className={`user__register ${location.pathname === '/register ' ? '' : ''}`}>Register</Link>
                            </div>
                            <div onClick={() => setPopUp(false)} className="user__close">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.170067 0.170067C0.396823 -0.056689 0.764467 -0.056689 0.991223 0.170067L6 5.17884L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82116 6L11.8299 11.0088C12.0567 11.2355 12.0567 11.6032 11.8299 11.8299C11.6032 12.0567 11.2355 12.0567 11.0088 11.8299L6 6.82116L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17884 6L0.170067 0.991223C-0.056689 0.764467 -0.056689 0.396823 0.170067 0.170067Z" fill="#46A358"/>
                                </svg>
                            </div>
                            <p className="user__enter">Enter your username and password to login.</p>
                            <div className="user__block">
                                {
                                    location.pathname === '/login' ? '' :  <label className="user__label">
                                        <input {...register('login',{
                                            required: {
                                                message:"Заполните логин",
                                                value: true
                                            },
                                            maxLength: {
                                                message: 'Максимальная длинна 15 символов',
                                                value: 15
                                            },
                                            minLength:{
                                                message: 'Минимальная длинна 3',
                                                value: 3
                                            }
                                        })} placeholder={'Username'} type="text" className="user__name"/>
                                        <span className={'user__field'}>{errors.login && errors.login.message}</span>
                                    </label>
                                }

                                <label className="user__label">
                                    <input {...register('email', {
                                        required: {
                                            message:"Заполните email",
                                            value: true
                                        },
                                        maxLength: {
                                            message: 'Максимальная длинна 15 символов',
                                            value: 15
                                        },
                                        minLength:{
                                            message: 'Минимальная длинна 3',
                                            value: 3
                                        }
                                    })} placeholder={'Enter your email address'} type="email" className="user__email"/>
                                    <span className={'user__field'}>{errors.email && errors.email.message}</span>

                                </label>
                                <label className="user__label">
                                    <input {...register('password', {
                                        required:{
                                            message:"Заполните пароль",
                                            value:true
                                        },
                                        maxLength: {
                                            message: 'Максимальная длинна 15',
                                            value: 15
                                        },
                                        minLength:{
                                            message: 'Минимальная длинна 3 ',
                                            value: 3
                                        }
                                    })} placeholder={'Password'} type="password" className="user__password"/>
                                    <span className={'user__field'}>{errors.password && errors.password.message}</span>


                                </label>
                                <label className="user__label">
                                    <input {...register('confirm', {
                                        required:{
                                            message:"Заполните пароль",
                                            value:true
                                        },
                                        maxLength: {
                                            message: 'Максимальная длинна 15',
                                            value: 15
                                        },
                                        minLength:{
                                            message: 'Минимальная длинна 3',
                                            value: 3
                                        }
                                    })} placeholder={'Confirm Password'} type="password" className="user__again"/>
                                    <span className={'user__field'}>{errors.confirm && errors.confirm.message}</span>

                                </label>

                            </div>

                            <button type={"submit"} className={'user__btn'}>{
                                location.pathname === '/login' ?  'Войти' :  'Зарегистрироваться'
                            }
                            </button>
                            <p className="user__in">{
                                location.pathname === '/login' ? <>Нету аккаунта ? <Link className={'user__reg'} to={'/register'}>Зарегестрироваться</Link></> : <>Уже есть аккаунт: <Link className={'user__reg'} to={'/login'}>Войти</Link> </>
                            }</p>
                            <h4 className="user__with">Or register with</h4>
                            <div className="user__social">
                                <div className="user__google">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.4336 17.6055C14.6992 19.0703 12.4493 20 10 20C6.35547 20 3.15621 17.9922 1.42188 15.0625L2.07117 12.0695L4.94922 11.5352C5.61719 13.6914 7.63278 15.2734 10 15.2734C11.1484 15.2734 12.2148 14.9102 13.0938 14.2656L15.8594 14.6875L16.4336 17.6055Z"
                                            fill="#59C36A"/>
                                        <path
                                            d="M16.4336 17.6055L15.8594 14.6875L13.0937 14.2656C12.2148 14.9102 11.1484 15.2734 10 15.2734V20C12.4493 20 14.6992 19.0703 16.4336 17.6055Z"
                                            fill="#00A66C"/>
                                        <path
                                            d="M4.72656 10C4.72656 10.539 4.8086 11.0546 4.94922 11.5352L1.42188 15.0625C0.542969 13.5859 0 11.8515 0 10C0 8.1484 0.542969 6.41406 1.42188 4.9375L4.25285 5.42473L4.94922 8.46484C4.8086 8.94527 4.72656 9.4609 4.72656 10Z"
                                            fill="#FFDA2D"/>
                                        <path
                                            d="M20 10C20 13.0468 18.5899 15.7773 16.4336 17.6055L13.0938 14.2656C13.7734 13.7734 14.3477 13.1171 14.7227 12.3437H10C9.67184 12.3437 9.41406 12.0859 9.41406 11.7578V8.24219C9.41406 7.91402 9.67184 7.65625 10 7.65625H19.25C19.5312 7.65625 19.7773 7.85543 19.8242 8.13668C19.9414 8.74609 20 9.37887 20 10Z"
                                            fill="#4086F4"/>
                                        <path
                                            d="M14.7227 12.3437C14.3477 13.1171 13.7734 13.7734 13.0938 14.2656L16.4336 17.6055C18.5899 15.7773 20 13.0469 20 10C20 9.37887 19.9414 8.74609 19.8242 8.13668C19.7773 7.85543 19.5312 7.65625 19.25 7.65625H10V12.3437H14.7227Z"
                                            fill="#4175DF"/>
                                        <path
                                            d="M16.5977 2.79293C16.6094 2.95699 16.5391 3.10937 16.4336 3.22652L13.9258 5.72262C13.7266 5.93355 13.3985 5.95699 13.1641 5.78121C12.2382 5.08984 11.1484 4.72656 10 4.72656C7.63278 4.72656 5.61719 6.30855 4.94922 8.46484L1.42188 4.9375C3.15621 2.00781 6.35547 0 10 0C12.332 0 14.6055 0.859375 16.3867 2.35934C16.5156 2.46484 16.5859 2.62887 16.5977 2.79293Z"
                                            fill="#FF641A"/>
                                        <path
                                            d="M13.1641 5.78121C13.3984 5.95703 13.7265 5.93355 13.9257 5.72262L16.4336 3.22652C16.5391 3.10938 16.6094 2.95703 16.5976 2.79293C16.5859 2.62883 16.5156 2.46484 16.3867 2.35934C14.6055 0.859375 12.332 0 10 0V4.72656C11.1484 4.72656 12.2382 5.08984 13.1641 5.78121Z"
                                            fill="#F03800"/>
                                    </svg>
                                </div>
                                <span className={'user__span'}>Continue with Google</span>
                            </div>
                            <div className="user__social">
                                <div className="user__facebook">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_9_1156)">
                                            <path
                                                d="M13.3308 3.32083H15.1566V0.140833C14.8416 0.0975 13.7583 0 12.4966 0C6.71993 0 8.2916 6.54167 8.0616 7.5H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.1475 10.9874 3.32083 13.3308 3.32083Z"
                                                fill="#3B5999"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9_1156">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span className={'user__span'}>Continue with Google</span>
                            </div>
                        </form>
                    </div> : ''
            }

        </>
    );
};

export default User;