import react from 'react';
import { Container, Image } from 'react-bootstrap';
import Slider from 'react-touch-drag-slider';
import DassBilder from './dassImgs';

export default function Dasset() {
    return (
        <Container style={{ height: '93vh' }}>
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
                {DassBilder.map(({ url, title }, index) => (
                    <Image src={url} key={index} alt={title} style={{padding: '10px'}} />
                ))}
            </Slider>
        </Container>
    );
}
