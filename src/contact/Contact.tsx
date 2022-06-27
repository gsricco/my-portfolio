import React from 'react';
import s from './Contact.module.css'
import sContainer from './../common/styles/Container.module.css';

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
            <h2 className={s.title}>Contacts</h2>
            <form className={s.forms}>
                <input type="text"/>
                <input type="text"/>
                <textarea/>
            </form>
            <button>Send</button>
            </div>
        </div>
    );
};

