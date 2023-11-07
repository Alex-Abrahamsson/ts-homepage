import React from 'react';
import Style from './topComponent.module.scss';
import ScrollingText from '../scrollingText/scrollingText';

export default function TopComponent() {

    return (
        <div className={Style.MainContainer}>
            <div className={Style.TextContainer}>
                <h1>Alexander</h1>
                <ScrollingText />
                <h1>Abrahamsson</h1>
                {/* Arrow component to scroll 1 section down */}
            </div>
        </div>
    );
}