import React from 'react';
import ContentContainer from '../../components/contentContainer/contentContainer';
import TopComponent from '../../components/topComponent/topComponent';

import Style from './home.module.scss';

export default function Home() {
    const [page1Opacity, setPage1Opacity] = React.useState(1);
    const [page2Opacity, setPage2Opacity] = React.useState(0);
    const [arrowDirection, setArrowDirection] = React.useState('↓' as '↓' | '↑');

    const switchOpacity = () => {
        if (page1Opacity === 1) {
            setPage1Opacity(0);
            setPage2Opacity(1);
            setArrowDirection('↑');
        } else {
            setPage1Opacity(1);
            setPage2Opacity(0);
            setArrowDirection('↓');
        }
    };

    //Switch pages with Opacity

    return (
        <ContentContainer>
            <TopComponent TopRow='Alexander' BottomRow='Abrahamsson' Opacity={page1Opacity} WelcomeText={true}/>
            <TopComponent Opacity={page2Opacity} WelcomeText={false}/>

            <button 
                className={Style.AboutButton}
                onClick={() => {
                    switchOpacity();
                }}
            >
                <p>{arrowDirection}</p>
            </button>
        </ContentContainer>
    );
}
