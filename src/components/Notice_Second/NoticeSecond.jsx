import React from 'react';
import NoticeStyle from './NoticeSecond.module.css';

import notice_1 from '../../photos/First_Notice.png';
import notice_2 from '../../photos/SecondNotice.png';
import notice_3 from '../../photos/ThirdNotice.png';
import novaPosta from '../../photos/Nova_Poshta_2014_logo.png';
import localPost from '../../photos/Group 69.png';

const NoticeSecond = () =>{
    return(
        <div className={NoticeStyle.container}>
            <div className={NoticeStyle.firstNotice} style={{backgroundImage:`url(${notice_1})`}}>
                <div className={NoticeStyle.firstNotice_Title_one}>
                    <text >Покупая свою новою доску
                        <br/>
                        <text>не забудьте о аксесуарах</text>
                    </text>
                </div>
                <div className={NoticeStyle.firstNotice_Title_two}>
                    <text >Аксесуары можна выбрать и заказать  дополнительно <br/>
                        <text>при подтверждении заказа</text>
                    </text>
                </div>

            </div>
            <div className={NoticeStyle.forNotices}>
                <div className={NoticeStyle.secondNotice} style={{backgroundImage:`url(${notice_2})`}}>
                    <text className={NoticeStyle.firstTitle}>Доставка</text><br/>
                    <div className={NoticeStyle.marginLeft_div_first}>
                        <div style={{marginTop:"25px"}}>
                            <text className={NoticeStyle.second_title}>Адресная доставка по Украине </text><br/>
                            <text className={NoticeStyle.second_add}>Пн - Пт: с 9:00 до 14:00</text> <br/>
                        </div>
                        <div style={{marginTop:"25px"}}>
                            <text  className={NoticeStyle.second_title}>Срок поставки: </text>
                            <text className={NoticeStyle.second_add}>Склад перевозчика - от 1 до 3 рабочих дней</text><br/>
                            <text className={NoticeStyle.second_add}>   К двери - от 2 до 5 рабочих дней.</text>
                        </div>
                        <div className={NoticeStyle.novaPosta}>
                            <img src={novaPosta} style={{marginTop:"20px"}}/>
                            <text className={NoticeStyle.newPost_title}>Нова Пошта - из отделения, курьер Новая почта</text>
                        </div>
                        <div className={NoticeStyle.novaPosta}>
                            <img src={localPost} style={{marginTop:"20px"}}/>
                            <text className={NoticeStyle.get_title}>Самовывоз - <text style={{color:"#FFE81E"}}>г. Киев, ул. Светлицкого 35, оф. 510</text></text>
                        </div>
                    </div>
                </div>
                <div  className={NoticeStyle.secondNotice} style={{backgroundImage:`url(${notice_3})`}}>
                    <text className={NoticeStyle.firstTitle}>Оплата</text>
                    <div className={NoticeStyle.marginLeft_div_second}>
                        <div className={NoticeStyle.second_title}>
                            <text >Безналичный расчет </text><br/>
                        </div>
                        <div className={NoticeStyle.second_add}>
                            <text >Товар отгружается после поступления денег на расчетный счет.</text>
                        </div>
                        <div className={NoticeStyle.second_title}>
                            <text >Наличный расчет </text>
                        </div>
                        <div className={NoticeStyle.second_add}>
                            <text >Оплачиваете товар при получении на основании расходной накладной.</text>
                        </div>
                        <div className={NoticeStyle.second_title}>
                            <text >Наложенным платежом </text>
                        </div>
                        <div className={NoticeStyle.second_add}>
                            <text >При доставке по Украине оплата производится
                                наложенным   платежом при получении товара у фирмы-перевозчика.</text>
                        </div>





                    </div>

                </div>
            </div>
        </div>
    )
}

export default NoticeSecond;
