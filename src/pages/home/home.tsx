import React from 'react';
import ContentContainer from '../../components/contentContainer/contentContainer';

import Style from './home.module.scss';
import TopComponent from '../../components/topComponent/topComponent';

export default function Home() {

    return (
        <ContentContainer>
            <TopComponent />
        </ContentContainer>
    );
}
