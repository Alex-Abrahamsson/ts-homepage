import React from "react";
import { Col, Row } from "react-bootstrap";
import { CodeSlash, Display, Hammer, MusicNoteBeamed } from "react-bootstrap-icons";
import BoxHeader from "../boxHeader";
import Style from "./interests.module.scss";


export default function InterestsSection() {
    return (
        <Row className={Style.RightBorderContainer}>
        <BoxHeader title="INTERESTS" />
        <div
            style={{
                padding: '15px 0 0 0',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}
        >
            <CodeSlash className={Style.MyIcons} />
            <Display className={Style.MyIcons} />
            <MusicNoteBeamed className={Style.MyIcons} />
            <Hammer className={Style.MyIcons} />
        </div>
    </Row>
    )
}