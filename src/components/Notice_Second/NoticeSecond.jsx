import React from 'react';
import NoticeStyle from './NoticeSecond.module.css';
import {useSelector} from "react-redux";

import notice_1 from '../../photos/First_Notice.png';
import notice_2 from '../../photos/SecondNotice.png';
import notice_3 from '../../photos/ThirdNotice.png';
import novaPosta from '../../photos/Nova_Poshta_2014_logo.png';
import localPost from '../../photos/Group 69.png';

const NoticeSecond = () =>{

    const languageData = useSelector(state=>state.languageData);
    return(
        <div className={NoticeStyle.container} name="NoticeSecond">
            <div className={NoticeStyle.firstNotice} style={{backgroundImage:`url(${notice_1})`}}>
                <div className={NoticeStyle.firstNotice_Title_one}>
                    <text>
                        {languageData.secondNotice.firstNotice.title[languageData.indexOfLanguage]}
                    </text>
                </div>
                <div className={NoticeStyle.firstNotice_Title_two}>
                    <text>
                        {languageData.secondNotice.firstNotice.secondTitle[languageData.indexOfLanguage]}
                    </text>
                </div>
            </div>
            <div className={NoticeStyle.forNotices}>
                <div className={NoticeStyle.secondNotice} style={{backgroundImage:`url(${notice_2})`}}>
                    <text className={NoticeStyle.firstTitle}>
                        {languageData.secondNotice.secondNotice.title[languageData.indexOfLanguage]}
                    </text>
                    <br/>
                    <div className={NoticeStyle.marginLeft_div_first}>
                        <div style={{marginTop:"25px"}}>
                            <text className={NoticeStyle.second_title}>
                                {languageData.secondNotice.secondNotice.address[languageData.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={NoticeStyle.second_add}>
                                {languageData.secondNotice.secondNotice.timeWork[languageData.indexOfLanguage]}
                            </text>
                            <br/>
                        </div>
                        <div style={{marginTop:"25px"}}>
                            <text  className={NoticeStyle.second_title}>
                                {languageData.secondNotice.secondNotice.DeliveryTime.title[languageData.indexOfLanguage]}
                            </text>
                            <text className={NoticeStyle.second_add}>
                                {languageData.secondNotice.secondNotice.DeliveryTime.time[languageData.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={NoticeStyle.second_add}>
                                {languageData.secondNotice.secondNotice.DeliveryTime.toDoor[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={NoticeStyle.novaPosta}>
                            <img src={novaPosta} style={{marginTop:"20px"}}/>
                            <text className={NoticeStyle.newPost_title}>
                                {languageData.secondNotice.secondNotice.newPost[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={NoticeStyle.novaPosta}>
                            <img src={localPost} style={{marginTop:"20px"}}/>
                            <text className={NoticeStyle.get_title}>
                                {languageData.secondNotice.secondNotice.getByYourSelf.firstWord[languageData.indexOfLanguage]}
                                <text style={{color:"#FFE81E"}}>
                                    {languageData.secondNotice.secondNotice.getByYourSelf.second[languageData.indexOfLanguage]}
                                </text>
                            </text>
                        </div>
                    </div>
                </div>
                <div  className={NoticeStyle.secondNotice} style={{backgroundImage:`url(${notice_3})`}}>
                    <text className={NoticeStyle.firstTitle}>
                        {languageData.secondNotice.thirdNotice.title[languageData.indexOfLanguage]}
                    </text>
                    <div className={NoticeStyle.marginLeft_div_second}>
                        <div className={NoticeStyle.second_title}>
                            <text>
                                {languageData.secondNotice.thirdNotice.firstTitle.title[languageData.indexOfLanguage]}
                            </text>
                            <br/>
                        </div>
                        <div className={NoticeStyle.second_add}>
                            <text>
                                {languageData.secondNotice.thirdNotice.firstTitle.secondTitle[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={NoticeStyle.second_title}>
                            <text>
                                {languageData.secondNotice.thirdNotice.secondTitle.title[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={NoticeStyle.second_add}>
                            <text>
                                {languageData.secondNotice.thirdNotice.secondTitle.secondTitle[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={NoticeStyle.second_title}>
                            <text>
                                {languageData.secondNotice.thirdNotice.thirdTitle.title[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={NoticeStyle.second_add}>
                            <text>
                                {languageData.secondNotice.thirdNotice.thirdTitle.secondTitle[languageData.indexOfLanguage]}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeSecond;
