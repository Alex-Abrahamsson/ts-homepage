import react, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BoxHeader from '../../components/boxHeader';
import EducationSection from '../../components/eduactionSection/educationSection';
import ExperienceSection from '../../components/experienceSection/experienceSection';
import InterestsSection from '../../components/interestsSection/interestsSection';
import SkillSection from '../../components/skillSection/skillSection';
import SocialsSection from '../../components/socialsSection';
import SummarySection from '../../components/summarySection/summarySection';
import Style from './cvPage.module.scss';



export default function CvPage() {
    const [isMobile, setIsMobile] = react.useState(false);

    window.addEventListener('resize', () => {
        if (window.innerWidth < 770) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });


    if ( isMobile ) {
        return (
            <Container className={Style.Container}>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row className={Style.Diamond}></Row>
                    </Col>
                    <BoxHeader isMainHeader={true} title='Alex Abrahamsson' />
                </Row>
                <Col>
                    <SummarySection />
                    <ExperienceSection />
                    <EducationSection />
                    <SkillSection />
                    <SocialsSection />
                </Col>
            </Container>
        );
    } else {
        return (
            <Container className={Style.Container}>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row className={Style.Diamond}></Row>
                    </Col>
                    <BoxHeader isMainHeader={true} title='Alex Abrahamsson' />
                </Row>
                <Row>
                    <SummarySection />
                    <Col>
                        <EducationSection />
                        <SkillSection />
                    </Col>
                    <Col>
                        <ExperienceSection />
                        <InterestsSection/>
                        <SocialsSection />
                    </Col>
                </Row>
            </Container>
        );
    }
}
