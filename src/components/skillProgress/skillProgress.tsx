import react from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import style from './skillProgress.module.scss';

interface SkillProgressProps {
    skillName: string;
    skillLevel: number;
}

export default function SkillProgress({ skillName, skillLevel }: SkillProgressProps) {

    const [grayDots, setGrayDots] = react.useState<string[]>([]);
    const [greenDots, setGreenDots] = react.useState<string[]>([]);

    react.useEffect(() => {
        const grayDotsArray: string[] = [];
        const greenDotsArray: string[] = [];

        for (let i = 0; i < 5; i++) {
            if (i < skillLevel) {
                greenDotsArray.push('green');
            } else {
                grayDotsArray.push('gray');
            }
        }

        setGrayDots(grayDotsArray);
        setGreenDots(greenDotsArray);
        console.log(grayDots, greenDots);
    }, [skillLevel]);



    


    return (
        <Row style={{ marginTop: '5px' }}>
            <Col xs={5}>
                <p className={style.SkillListP}>{skillName}</p>
            </Col>
            <Col>
                <Row style={{display: 'flex'}}>
                    {greenDots.map((index) => (
                        <div
                            key={index}
                            className={style.FilledDot}
                        ></div>
                    ))}
                    {grayDots.map((index) => (
                        <span
                            key={index}
                            className={style.Dot}
                        ></span>
                    ))}
                </Row>
            </Col>
        </Row>
    );
}
