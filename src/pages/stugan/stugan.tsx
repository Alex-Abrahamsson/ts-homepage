import react from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-touch-drag-slider';
import Images from './images';
import Friggan from './friggan';

export default function Stugan() {
    return (
        <Container style={{ height: '93vh' }}>
            <Row style={{height: '50%'}}>
                <Slider
                    onSlideComplete={(i) => {
                        console.log('finished dragging, current slide is', i);
                    }}
                    onSlideStart={(i) => {
                        console.log('started dragging on slide', i);
                    }}
                    activeIndex={0}
                    threshHold={100}
                    transition={0.5}
                    scaleOnDrag={true}
                >
                    {Images.map(({ url, title }, index) => (
                        <img src={url} key={index} alt={title} />
                    ))}
                </Slider>
            </Row>
            <Row style={{height: '50%'}}>
                <Slider
                    onSlideComplete={(i) => {
                        console.log('finished dragging, current slide is', i);
                    }}
                    onSlideStart={(i) => {
                        console.log('started dragging on slide', i);
                    }}
                    activeIndex={0}
                    threshHold={100}
                    transition={0.5}
                    scaleOnDrag={true}
                >
                    {Friggan.map(({ url, title }, index) => (
                        <img src={url} key={index} alt={title} />
                    ))}
                </Slider>
            </Row>
        </Container>
    );
}