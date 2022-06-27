import React from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
            <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'description this skill'}/>
                    <Skill title={'React'} description={'description this skill description this skill description this skill description this skill description this skill description this skill description this skill description this skill description this skill'}/>
                    <Skill title={'React'} description={'description this skill description this skill description this skill description this skill description this skill description this skill description this skill description this skill description this skill'}/>
                    <Skill title={'HTML'} description={'description this skill'}/>
                    <Skill title={'HTML'} description={'description this skill'}/>
                </div>
            </div>
        </div>
    );
};

