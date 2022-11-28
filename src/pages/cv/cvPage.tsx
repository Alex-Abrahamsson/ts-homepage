import react from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BoxHeader from '../../components/boxHeader';
import ContactSection from '../../components/contactSection/contactSection';
import EducationSection from '../../components/eduactionSection/educationSection';
import ExperienceSection from '../../components/experienceSection/experienceSection';
import InterestsSection from '../../components/interestsSection/interestsSection';
import SkillSection from '../../components/skillSection/skillSection';
import SummarySection from '../../components/summarySection/summarySection';
import Style from './cvPage.module.scss';

export default function CvPage() {
    return (
        <Container className={Style.Container}>
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row className={Style.Diamond}></Row>
                </Col>
                <BoxHeader isMainHeader={true} title='Alex Abrahamsson' />
            </Row>
            <Col>
                <SummarySection/>
                <ExperienceSection/>
                <EducationSection/>
                <SkillSection/>
                <InterestsSection/>
                <ContactSection/>
            </Col>
        </Container>
    );
}
