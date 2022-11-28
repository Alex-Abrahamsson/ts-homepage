import react from 'react';
import { Row } from 'react-bootstrap';
import BoxHeader from '../boxHeader';

import style from './educationStyle.module.scss';

export default function EducationSection() {
    return (
        <Row>
            <BoxHeader title='EDUCATION' />
            <ul>
                <li className={style.CenteredList}>
                    <strong>2019 - 2022</strong>
                    <br />
                    <em>Yrkeshögskolan, Full stack .Net Developer</em>
                </li>
                <li className={style.CenteredList}>
                    <strong>2018 - 2019</strong>
                    <br />
                    <em>Hermods, Programming 1</em>
                </li>
                <li className={style.CenteredList}>
                    <strong>1999 - 2001</strong>
                    <br />
                    <em>Polhem, Teknik Process Produktion</em>
                </li>
            </ul>
        </Row>
    );
}
