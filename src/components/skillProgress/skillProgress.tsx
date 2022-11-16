import react from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import style from './skillProgress.module.scss';

interface SkillProgressProps {
    skillName: string;
    skillLevel: number;
}

export default function SkillProgress({ skillName, skillLevel }: SkillProgressProps) {
    return (
        <Row style={{ marginTop: '5px' }}>
            <Col sm={4}>
                <strong className={style.strong}>{skillName}</strong>
            </Col>
            <Col sm={8}>
                <ProgressBar variant='danger' now={skillLevel} />
            </Col>
        </Row>
    );
}
