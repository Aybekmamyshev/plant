import React from 'react';
import './like.scss'
import Heart from "./Heart/Heart";
const Like = () => {

    return (
        <div className={'like'}>
            <div className="container">
                <Heart/>
            </div>
        </div>
    );
};

export default Like;