import React from 'react';
import { Row } from 'react-bootstrap';
import style from './contact.module.scss';

export default function ContactSection() {
    return (
        <Row>
            <div className={style.SmallContainerRight}>
                <div className={style.ColoredDiv}>
                    <strong>CONTACT ME</strong>
                </div>
            </div>
            <ul style={{ marginLeft: '20px' }}>
                <li>E-mail: Alex.Abrahamsson@gmail.com</li>
                <li>Mobile: 072-xxx xx 94</li>
                <li>Website: www.AlexAbrahamsson.com</li>
            </ul>
        </Row>
    );
}
