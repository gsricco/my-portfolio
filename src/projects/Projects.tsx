import React from 'react';
import s from './Projects.module.css'
import sContainer from './../common/styles/Container.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'Project1'} description={'description this project'}/>
                    <Project title={'Project2'} description={'description this project description this project description this project description this project description this project description this project description this project'}/>
                    <Project title={'Project3'} description={'description this project'}/>
                    <Project title={'Project4'} description={'description this project'}/>
                    <Project title={'Project4'} description={'description this project'}/>
                    <Project title={'Project4'} description={'description this project'}/>
                </div>
            </div>
        </div>
    );
};

