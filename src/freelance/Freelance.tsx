import React from 'react';
import s from './Freelance.module.css'
import sContainer from './../common/styles/Container.module.css';


export const Freelance = () => {
    return (

            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.freelanceBlock}>
                <h3 className={s.title}>Looking into remote Freelance</h3>
                    <a href="#">Hire me</a>
                </div>
            </div>

    );
};

