import React from 'react';
import s from './Main.module.css'
import Container from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={Container.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am </h1>
                    <h1>Sergey Gordeenko</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo}>
                    PHOTO
                </div>
            </div>
        </div>
    );
};
