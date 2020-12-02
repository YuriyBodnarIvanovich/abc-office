import React from 'react';
import NoticeStyle from './Notice.module.css';
import FirstVariable from '../../photos/FirstVariable.png';
import SecondVariable from '../../photos/SecondVariable.png';

const Notice = (props) =>{
    return(
        <div className={NoticeStyle.container}>
            <div className={NoticeStyle.title}>
                <b>Выберите свою новую <br/> доску ABC Office</b>
            </div>
            <div className={NoticeStyle.containerOfChangeProducts}>
                {props.activeFirs ?  <div className={NoticeStyle.activeProduct} onClick={()=>{props.setStatus(true)}}>
                    <img src={FirstVariable} alt={''}/>
                    <p>Доски на треноге</p>
                </div>
                :
                    <div className={NoticeStyle.passiveProduct} onClick={()=>{props.setStatus(true)}}>
                        <img src={FirstVariable} alt={''}/>
                        <p>Доски на треноге</p>
                    </div>}
                {
                    props.activeFirs ? <div className={NoticeStyle.passiveProduct} onClick={()=>{props.setStatus(false)}}>
                        <img src={SecondVariable} alt={''}/>
                        <p>Настенные доски</p>
                    </div>
                        :
                        <div className={NoticeStyle.activeProduct} onClick={()=>{props.setStatus(false)}}>
                            <img src={SecondVariable} alt={''}/>
                            <p>Настенные доски</p>
                        </div>
                }

            </div>
            <p className={NoticeStyle.fild}>Флипчарт - незаменимый инструмент для проведения совещаний, обучения и обмена информацией</p>
        </div>
    )
}
export default Notice;
