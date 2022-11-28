import react from 'react';
import Style from './summary.module.scss';

export default function SummarySection() {
    return (
        <div className={Style.SmallContainerLeft}>
            {/* <div className={Style.ColoredDiv}>
                <strong>SUMMARY</strong>
            </div> */}
            <p>
                Been working as welder in an industrial workshop for most of my adult life, mostly
                becouse it´s been "The safe choice". I´ve always been interested in computers but i
                never dared to persuit a carrier in that genre, but 2019 when Covid forced us all to
                change our daily rutines i jump on the oppertunity and started to study. I quickly
                fell in love with programming and the rest is history.
            </p>
        </div>
    );
}
