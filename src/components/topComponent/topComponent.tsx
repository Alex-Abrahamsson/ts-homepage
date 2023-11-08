import React from 'react';
import Style from './topComponent.module.scss';
import ScrollingText from '../scrollingText/scrollingText';

interface ITopComponent {
    WelcomeText: boolean;
    TopRow: string;
    BottomRow: string;
    Opacity?: number;
}

export default function TopComponent({ WelcomeText, TopRow, BottomRow, Opacity = 1 }: ITopComponent) {

    if (!WelcomeText) {
        return (
            <div className={Style.MainContainer} style={{ opacity: Opacity, pointerEvents: Opacity === 1 ? 'auto' : 'none' }}>
                <div className={Style.TextContainer}>
                    <h1>ABOUT</h1>
                    <h1>PORTFOLIO</h1>
                    <h1>CONTACT</h1>
                </div>
            </div>
        );
    }

    return (
        <div className={Style.MainContainer} style={{ opacity: Opacity, pointerEvents: Opacity === 1 ? 'auto' : 'none' }}>
            <div className={Style.TextContainer}>
                <h1>{TopRow}</h1>
                <ScrollingText />
                <h1>{BottomRow}</h1>
            </div>
        </div>
    );
}