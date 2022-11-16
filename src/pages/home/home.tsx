import react from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BoxHeader from '../../components/boxHeader';
import { CodeSlash, Display, MusicNoteBeamed, Hammer } from 'react-bootstrap-icons';

import style from './home.module.scss';
import SkillProgress from '../../components/skillProgress';

export default function Home() {
    return (
        <Container style={{ maxHeight: '93vh', maxWidth: '940px' }}>
            <Row>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={style.Diamond}></div>
                </div>
                <BoxHeader isMainHeader={true} title="Alex Abrahamsson" />
            </Row>
            <Row style={{ display: 'flex', height: '80%' }}>
                <Col style={{ display: 'flex', flexDirection: 'column' }}>
                    <Row className={style.RightBorderContainer}>
                        <div className={style.SmallContainerLeft}>
                            <div className={style.ColoredDiv}>
                                <strong>SUMMARY</strong>
                            </div>
                        </div>
                        <p>
                            Been working as welder in an industrial workshop for most of my adult
                            life, mostly becouse it´s been "The safe choice". I´ve always been
                            interested in computers but i never dared to persuit a carrier in that
                            genre, but 2019 when Covid forced us all to change our daily rutines i
                            jump on the oppertunity and started to study. I quickly fell in love
                            with programming and the rest is history.
                        </p>
                    </Row>
                    <Row className={style.RightBorderContainer}>
                        <BoxHeader title="EXPERIENCE" />
                        <ul>
                            <li className={style.CenteredList}>
                                <strong>2018 - Present</strong>
                                <br />
                                <span>Indy game development</span>
                                <br />
                                <span>Creating webpages</span>
                                <br />
                                <span>Workig on my own application</span>
                            </li>
                            <li className={style.CenteredList}>
                                <strong>2008 - 2021</strong>
                                <br />
                                <span>13 years as welder/blacksmith</span>
                            </li>
                            <li className={style.CenteredList}>
                                <strong>2001 - 2008</strong>
                                <br />
                                <span>Working at ICA and other service jobs</span>
                                <br />
                                <span>Docks worker, container boats</span>
                                <br />
                                <span>Firefighter at F4, Military service</span>
                            </li>
                        </ul>
                    </Row>
                    <Row className={style.RightBorderContainer}>
                        <BoxHeader title="INTERESTS" />
                        <div
                            style={{
                                padding: '15px 0 0 0',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <CodeSlash className={style.MyIcons} />
                            <Display className={style.MyIcons} />
                            <MusicNoteBeamed className={style.MyIcons} />
                            <Hammer className={style.MyIcons} />
                        </div>
                    </Row>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column' }}>
                    <Row className={style.RightBorderContainer}>
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
                    <Row>
                        <BoxHeader title="EDUCATION" />
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
                    <Row>
                        <BoxHeader title="SKILLS" />
                        <SkillProgress skillLevel={60} skillName={'C#'}/>
                        <SkillProgress skillLevel={20} skillName={'C++'}/>
                        <SkillProgress skillLevel={80} skillName={'HTML'}/>
                        <SkillProgress skillLevel={80} skillName={'Css/Sass'}/>
                        <SkillProgress skillLevel={80} skillName={'JavaScript'}/>
                        <SkillProgress skillLevel={80} skillName={'React'}/>
                        <SkillProgress skillLevel={50} skillName={'SQL'}/>
                        <SkillProgress skillLevel={50} skillName={'EntityFramework'}/>
                        <SkillProgress skillLevel={40} skillName={'Azure'}/>
                        <SkillProgress skillLevel={80} skillName={'UnrealEngine'}/>
                        <SkillProgress skillLevel={30} skillName={'Unity'}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
