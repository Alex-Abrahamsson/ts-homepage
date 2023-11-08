import React, { ReactNode } from 'react';

import Style from './aboutText.module.scss';

interface IAboutText {
    beforeO: string;
    afterO: string;
    onClick?: () => void;
    expanded?: boolean;
    hiddenPage?: ReactNode;
}

export default function AboutText({ beforeO, afterO, onClick, expanded, hiddenPage }: IAboutText) {

    return (
        <div className={Style.MainContainer}>
            <h1>{beforeO}</h1>
            <div 
                className={!expanded ? Style.TheO : Style.TheOExpanded}
                onClick={onClick} 
            >
                {expanded && 
                    <div className={Style.ExpandedText}>
                        {hiddenPage}
                    </div>
                }
            </div>
            <h1>{afterO}</h1>
        </div>
    );
}