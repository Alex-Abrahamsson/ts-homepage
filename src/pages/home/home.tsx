import react, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Style from './home.module.scss';

export default function Home() {
    const [windowWidth, setWindowWidth] = react.useState(window.innerWidth / 15 + 'vh');

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth / 15 + 'vh');
        });
    }, []);

    return (
        <Container style={{ maxHeight: '93vh', maxWidth: '940px' }}>
            <div className={Style.background}>
                <img
                    style={{ height: windowWidth, width: windowWidth }}
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png'
                    alt=''
                />
                <div className={Style.stars}></div>
                <div className={Style.twinkling}></div>
                <div className={Style.clouds}></div>
            </div>
        </Container>
    );
}
