import react from 'react';
import style from './boxHeader.module.scss';

interface BoxHeaderProps {
    title: string;
    isMainHeader?: boolean;
}


export default function BoxHeader({ title, isMainHeader = false }: BoxHeaderProps) {
    return (
        <div className={style.MyNameContainer}>
            <div className={style.BoxBorderDiv}>
                {isMainHeader ? <h3>{title}</h3> : <h5>{title}</h5>}
            </div>
        </div>
    );
}
