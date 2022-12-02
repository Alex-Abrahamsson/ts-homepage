import React from 'react';
import { Row } from 'react-bootstrap';
import BoxHeader from '../boxHeader';
import SkillProgress from '../skillProgress';

import style from './skillSectionStyle.module.scss';

export default function SkillSection() {
    return (
        <Row style={{margin: '20px 0 25px 0'}}>
            <BoxHeader title='SKILLS' />
            <SkillProgress skillLevel={2} skillName={'EntityFramework'} />
            <SkillProgress skillLevel={4} skillName={'UnrealEngine'} />
            <SkillProgress skillLevel={4} skillName={'React-Native'} />
            <SkillProgress skillLevel={4} skillName={'JavaScript'} />
            <SkillProgress skillLevel={4} skillName={'Css/Sass'} />
            <SkillProgress skillLevel={4} skillName={'HTML'} />
            <SkillProgress skillLevel={3} skillName={'C#'} />
            <SkillProgress skillLevel={1} skillName={'C++'} />
            <SkillProgress skillLevel={2} skillName={'SQL'} />
            <SkillProgress skillLevel={2} skillName={'Unity'} />
            <SkillProgress skillLevel={5} skillName={'React'} />
            <SkillProgress skillLevel={2} skillName={'Azure'} />
        </Row>
    );
}
