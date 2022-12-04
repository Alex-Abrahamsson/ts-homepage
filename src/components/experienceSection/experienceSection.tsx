import React from 'react';
import { Row } from 'react-bootstrap';
import BoxHeader from '../boxHeader';
import Style from './experience.module.scss';

export default function ExperienceSection() {
    return (
        <Row>
            <BoxHeader title='EXPERIENCE' />
            <ul>
                <li className={Style.CenteredList}>
                    <strong>2021 - Present</strong>
                    <br />
                    <span>Software developer - Loomer</span>
                </li>
                <li className={Style.CenteredList}>
                    <strong>2018 - 2021</strong>
                    <br />
                    <span>Indy game development</span>
                    <br />
                    <span>Creating webpages</span>
                    <br />
                    <span>Workig on my own application</span>
                </li>
                <li className={Style.CenteredList}>
                    <strong>2008 - 2021</strong>
                    <br />
                    <span>13 years as welder/blacksmith</span>
                </li>
                <li className={Style.CenteredList}>
                    <strong>2001 - 2008</strong>
                    <br />
                    <span>Working at ICA and other service jobs</span>
                    <br />
                    <span>Docks worker, container boats</span>
                    <br />
                    <span>Firefighter at F4, Military service</span>
                </li>
            </ul>
        </Row>
    );
}
