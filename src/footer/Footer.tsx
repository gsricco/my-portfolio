import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerItems}>
                <div className={s.item}>icon</div>
                <div className={s.item}>icon</div>
                <div className={s.item}>icon</div>
                <div className={s.item}>icon</div>
            </div>
        </div>
    );
};

