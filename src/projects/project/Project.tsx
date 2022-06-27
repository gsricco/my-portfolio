import React from 'react';
import s from "./Project.module.css";

export type ProjectPropsType={
    title:string
    description:string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>
                <a href="#">Link</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

