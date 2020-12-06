import React from 'react';
import NoticeStyle from './Notice.module.css';
import {useSelector} from "react-redux";

const Notice = (props) =>{
    const languageData = useSelector(state=>state.languageData);

    return(
        <div className={NoticeStyle.container}>
            <div className={NoticeStyle.title}>
                <b>{languageData.noticeOne[languageData.indexOfLanguage]}</b>
            </div>
        </div>
    )
}
export default Notice;
