import React, { useState } from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Style from './appPageStyle.module.scss';
import iosSVG from '../../assets/iosSVG.svg';
import androidSVG from '../../assets/androidSVG.svg';
import { url } from 'inspector';

export default function AppPage() {
    return (
        <Container className={Style.Container}>
            <h1 style={{ color: 'white' }}>AppPage</h1>
            <Row style={{ marginTop: 20 }}>
                <Row>
                    <h5 style={{ color: 'white' }}>Store Manager</h5>
                </Row>
                <Row>
                    <p style={{ color: 'white' }}>Try the app on Expo Go</p>
                    <Col style={{ height: '200px' }}>
                        <p style={{ color: 'white' }}>iOS</p>
                        <Col
                            style={{
                                backgroundImage: `url(${iosSVG})`,
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        ></Col>
                    </Col>
                    <Col>
                        <p style={{ color: 'white' }}>Android</p>
                        <Col
                            style={{
                                backgroundImage: `url(${androidSVG})`,
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        ></Col>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}
