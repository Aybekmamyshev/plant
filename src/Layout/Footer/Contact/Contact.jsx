import React from 'react';
import logo from './Vector (1).png'
import green from './Group (2).png'
import "./contact.scss"
const Contact = () => {
    return (
        <div className={'contact'}>
            <div className="contact__wrapper">
                    <div className="contact__logo">
                      <div className="contact__vector">
                          <img className={'contact__image'} src={logo} alt=""/>
                      </div>
                        <h2 className="contact__title">greenshop</h2>
                    </div>
                <div className="contact__block">
                    <div className="contact__img">
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.09184 7.92531C9.09184 6.77425 8.15914 5.84155 7.00808 5.84155C5.85787 5.84155 4.92517 6.77425 4.92517 7.92531C4.92517 9.07552 5.85787 10.0082 7.00808 10.0082C8.15914 10.0082 9.09184 9.07552 9.09184 7.92531Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.99959 16.5C4.58457 16.5 0.75 12.2989 0.75 7.8322C0.75 4.33539 3.54758 1.5 6.99959 1.5C10.4516 1.5 13.25 4.33539 13.25 7.8322C13.25 12.2989 9.41543 16.5 6.99959 16.5Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="contact__txt">70 West Buckingham Ave.
                        Farmingdale, NY 11735</p>
                </div>
                <div className="contact__block-sec">
                    <div className="contact__img">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6208 6.51587C13.6208 6.51587 10.9457 9.72639 8.98919 9.72639C7.03347 9.72639 4.32837 6.51587 4.32837 6.51587" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.0434 8.97404C1.0434 3.27562 3.02753 1.37671 8.97991 1.37671C14.9323 1.37671 16.9164 3.27562 16.9164 8.97404C16.9164 14.6716 14.9323 16.5714 8.97991 16.5714C3.02753 16.5714 1.0434 14.6716 1.0434 8.97404Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="contact__txt">contact@greenshop.com</p>
                </div>
                <div className="contact__block-third">
                    <div className="contact__img">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9604 1.29175C15.0446 1.63425 17.4813 4.06758 17.8279 7.15175" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9604 4.24414C13.4363 4.53081 14.5896 5.68497 14.8771 7.16081" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.41708 12.5825C0.668758 6.83352 1.48616 4.20096 2.09213 3.35263C2.16997 3.21552 4.08873 0.343233 6.1455 2.02839C11.2507 6.23288 4.78759 5.63843 9.0745 9.92607C13.3623 14.2128 12.7669 7.74996 16.9716 12.8541C18.6568 14.9117 15.7844 16.8303 15.6482 16.9073C14.7998 17.5141 12.1663 18.3315 6.41708 12.5825Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="contact__txt">+88 01911 717 490</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;