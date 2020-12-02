import React from 'react';
import AdvertisingStyle from './Advertising.module.css';

import one from '../../photos/Notice_one/1_n.png';
import two from '../../photos/Notice_one/2_n.png';
import three from '../../photos/Notice_one/3_n.png';
import second_one from '../../photos/Notice_one/4_n.png';
import second_two from '../../photos/Notice_one/5_n.png';
import third_one from '../../photos/Notice_one/6_n.png';
import third_two from '../../photos/Notice_one/7_n.png';
import third_three from '../../photos/Notice_one/8_n.png';


const Advertising = () =>{
    return(
        <div className={AdvertisingStyle.container}>
            <div>
                <div className={AdvertisingStyle.title}>
                    <h3>Продуманность и надежность в каждой детали</h3>
                </div>
                <div className={AdvertisingStyle.container_max_1320px}>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${one})`,paddingTop:"30px", paddingLeft:"67px"}}>
                            <text className={AdvertisingStyle.title_One_first}>Прижимная планка на пружине</text>
                            <div  style={{marginLeft:"44px",marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist}>Бумага никогда не упадет</text>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${two})`, position:"relative"}}>
                            <div style={{position:"absolute",bottom:0,paddingBottom:"30px",paddingTop:"30px",
                                paddingLeft:"25px"}}>
                                <text className={AdvertisingStyle.title_One_first} style={{paddingLeft:"40px",marginBottom:"10px"}}>
                                    Поверхность для рисования<br/> <b style={{paddingLeft:"70px"}}>от Arcelor (Германия)</b></text>
                                <br/>
                                <div style={{color:"white",fontSize:"14px",marginBottom:"10px",
                                            marginLeft:"15px", marginTop:"10px"}}>
                                    <text className={AdvertisingStyle.title_Two_Frist}>
                                        Долговечность и устойчивость к повреждениям
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${three})`,paddingTop:"30px", paddingLeft:"31px"}} >
                            <text className={AdvertisingStyle.title_One_first}>Передвижные держатели для блокнотов</text>
                            <br/>
                           <div  style={{paddingLeft:"59px", marginTop:"10px"}}>
                               <text className={AdvertisingStyle.title_Two_Frist}>
                                   Любая бумага будет висеть ровно
                               </text>
                           </div>

                        </div>
                    </div>
                    <div className={AdvertisingStyle.secondAdvertising}>
                        <div style={{backgroundImage:`url(${second_one})`,paddingTop:"270px"}}>
                            <div className={AdvertisingStyle.just_second_One}>
                                <div style={{marginLeft:"30px"}} >
                                    <text className={AdvertisingStyle.title_One_first}>Полка на всю ширину</text>
                                    <br/>
                                    <div style={{marginLeft:"40px",marginTop:"10px"}}>
                                        <text className={AdvertisingStyle.title_Two_Frist}>
                                            Все поместится
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${second_two})`,paddingLeft:"114px",paddingTop:"30px"}}>
                            <text className={AdvertisingStyle.title_One_first}>Дополнительные "крылья" в модели Standard</text>
                            <br/>
                            <div style={{paddingLeft:"90px",marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist} >Когда много информации</text>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${third_one})`,
                            position:"relative",paddingBottom:"30px",
                            boxSizing:"border-box",paddingTop:"30px",
                            paddingLeft:"60px"}}>

                            <div style={{marginTop:"320px",paddingBottom:"30px"}}>
                                <text className={AdvertisingStyle.title_One_first}>Никаких пластиковых элементов <br/>
                                    <b style={{marginLeft:"37px"}}>в конструкции треноги</b>
                                </text>
                                <br/>
                                <div style={{marginTop:'10px'}}>
                                    <text className={AdvertisingStyle.title_Two_Frist}
                                          style={{marginLeft:"22px",marginBottom:"30px"}}>
                                        Чрезвычайная мощь и устойчивость
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${third_two})`,paddingTop:"30px", paddingLeft:"67px"}}>
                            <text className={AdvertisingStyle.title_One_first} >
                                Надежное крепление в 4 углах
                            </text>
                            <br/>
                            <div style={{marginLeft:"10px",marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist} >
                                    Не требуется разметка для монтажа
                                </text>
                            </div>

                        </div>
                        <div style={{backgroundImage: `url(${third_three})`,paddingTop:"30px", paddingLeft:"67px"}}>
                            <text className={AdvertisingStyle.title_One_first}>Передвижная и съемная полка</text>
                            <br/>
                            <div style={{marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist}>
                                    Позволяет повесить доску вертикально
                                    <br/>
                                    <text style={{marginLeft:"60px"}}>или горизонтально</text>
                                </text>
                            </div>


                        </div>
                    </div>
                </div>
                {/*-----------------------------------------------------------------------------------------------*/}
                <div className={AdvertisingStyle.container_1320px}>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${one})`,paddingTop:"30px", paddingLeft:"67px"}}>
                            <text className={AdvertisingStyle.title_One_first}>Прижимная планка на пружине</text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist} style={{marginLeft:"20px"}}>Бумага никогда не упадет</text>
                        </div>
                        <div style={{backgroundImage:`url(${two})`,paddingTop:"30px", paddingLeft:"20px", position:"relative"}}>
                            <div style={{position:"absolute",bottom:0,paddingBottom:"30px"}}>
                                <text style={{marginLeft:"60px"}} className={AdvertisingStyle.title_One_first}>
                                    Поверхность для рисования<br/>
                                <text style={{marginLeft:"90px"}}>от Arcelor (Германия)</text></text>
                                <br/>
                                <text style={{color:"white",fontSize:"14px"}} className={AdvertisingStyle.title_Two_Frist}>Долговечность и устойчивость к повреждениям</text>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.centerPosition}>
                        <div className={AdvertisingStyle.secondAdvertising}>
                            <div style={{backgroundImage:`url(${second_one})`, position:"relative"}}
                                 className={AdvertisingStyle.for_bigSecond}>
                                <div className={AdvertisingStyle.just_second_One}>
                                    <div className={AdvertisingStyle.text_fristNotice_margin}>
                                        <text >Полка на всю ширину</text>
                                        <br/>
                                        <text style={{marginLeft:"20px"}}>Все поместится</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${third_one})`,position:"relative",paddingBottom:"30px",
                            boxSizing:"border-box"}} >
                            <div style={{marginTop:"350px",paddingLeft:"30px"}}>
                                <text className={AdvertisingStyle.title_One_first} style={{marginLeft:"20px"}}>
                                    Никаких пластиковых элементов <br/>
                                    <text style={{marginLeft:"60px"}}>в конструкции треноги</text>
                                </text>
                                <br/>
                                <text className={AdvertisingStyle.title_Two_Frist}
                                      style={{marginLeft:"10px"}}>Чрезвычайная мощь и устойчивость</text>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${third_two})`,paddingTop:"30px",paddingLeft:"40px"}}>
                            <text className={AdvertisingStyle.title_One_first}
                            style={{marginLeft:"20px"}}>Надежное крепление в 4 углах</text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}>Не требуется разметка для монтажа</text>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.secondAdvertising}>
                        <div style={{backgroundImage:`url(${second_two})`, position:"relative"}}
                             className={AdvertisingStyle.for_bigSecond}>
                            <div className={AdvertisingStyle.just_second_One}
                                style={{paddingTop:"10px"}}>
                                <div style={{width:"250px",marginLeft:"40px"}}>
                                    <text>Дополнительные "крылья" в<br/>
                                        <text style={{marginLeft:"40px"}}>модели Standard</text>
                                    </text>
                                    <br/>
                                    <text>Когда много информации</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage: `url(${three})`,paddingTop:"30px", paddingLeft:"30px"}} >
                            <text className={AdvertisingStyle.title_One_first}>
                                Передвижные держатели для блокнотов
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist} style={{marginLeft:"20px"}}>
                                Любая бумага будет висеть ровно
                            </text>
                        </div>
                        <div style={{backgroundImage: `url(${third_three})`,paddingTop:"30px",paddingLeft:"40px"}}>
                            <text className={AdvertisingStyle.title_One_first} style={{marginLeft:"30px"}}>
                                Передвижная и съемная полка
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}>
                                Позволяет повесить доску вертикально<br/>
                                <text style={{marginLeft:"70px"}}>или горизонтально</text>
                            </text>
                        </div>
                    </div>
                </div>
            </div>
            {/*-----------------------------------------------------------------------------------------------*/}
            <div className={AdvertisingStyle.container_362}>
                <div className={AdvertisingStyle.firstAdvertising}>
                    <div style={{backgroundImage:`url(${one})`,paddingTop:"30px", paddingLeft:"45px"}}>
                        <text className={AdvertisingStyle.title_One_first}>Прижимная планка на пружине</text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist} style={{marginLeft:"20px"}}>Бумага никогда не упадет</text>
                    </div>
                    <div style={{backgroundImage:`url(${two})`,paddingTop:"30px", paddingLeft:"20px", position:"relative"}}>
                        <div style={{position:"absolute",bottom:0,paddingBottom:"30px"}}>
                            <text style={{marginLeft:"35px"}} className={AdvertisingStyle.title_One_first}>
                                Поверхность для рисования<br/>
                                <text style={{marginLeft:"60px"}}>от Arcelor (Германия)</text></text>
                            <br/>
                            <text style={{color:"white",fontSize:"14px",marginLeft:"20px"}}
                                  className={AdvertisingStyle.title_Two_Frist}>
                                Долговечность и устойчивость к <br/><text style={{marginLeft:"90px"}}>повреждениям</text>
                            </text>
                        </div>
                    </div>
                </div>
                <div className={AdvertisingStyle.centerPosition}>
                    <div className={AdvertisingStyle.secondAdvertising}>
                        <div style={{backgroundImage:`url(${second_one})`, position:"relative"}}
                             className={AdvertisingStyle.for_bigSecond}>
                            <div className={AdvertisingStyle.just_second_One}>
                                <div className={AdvertisingStyle.text_fristNotice_margin}>
                                    <text >Полка на всю ширину</text>
                                    <br/>
                                    <text style={{marginLeft:"20px"}}>Все поместится</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={AdvertisingStyle.firstAdvertising}>
                    <div style={{backgroundImage:`url(${third_one})`,position:"relative",paddingBottom:"30px",
                        boxSizing:"border-box"}} >
                        <div style={{marginTop:"350px",paddingLeft:"17px"}}>
                            <text className={AdvertisingStyle.title_One_first} style={{marginLeft:"20px"}}>
                                Никаких пластиковых элементов <br/>
                                <text style={{marginLeft:"60px"}}>в конструкции треноги</text>
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}
                                  style={{marginLeft:"10px"}}>Чрезвычайная мощь и устойчивость</text>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${third_two})`,paddingTop:"30px",paddingLeft:"30px"}}>
                        <text className={AdvertisingStyle.title_One_first}
                              style={{marginLeft:"20px"}}>Надежное крепление в 4 углах</text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist}>Не требуется разметка для монтажа</text>
                    </div>
                </div>
                <div className={AdvertisingStyle.secondAdvertising}>
                    <div style={{backgroundImage:`url(${second_two})`, position:"relative"}}
                         className={AdvertisingStyle.for_bigSecond}>
                        <div className={AdvertisingStyle.just_second_One}
                             style={{paddingTop:"10px"}}>
                            <div style={{width:"250px",marginLeft:"40px"}}>
                                <text>Дополнительные "крылья" в<br/>
                                    <text style={{marginLeft:"40px"}}>модели Standard</text>
                                </text>
                                <br/>
                                <text>Когда много информации</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={AdvertisingStyle.firstAdvertising}>
                    <div style={{backgroundImage: `url(${three})`,paddingTop:"30px", paddingLeft:"40px"}} >
                        <text className={AdvertisingStyle.title_One_first} style={{marginLeft:"10px"}}>
                            Передвижные держатели для <br/> <text style={{marginLeft:"75px"}}>блокнотов</text>
                        </text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist} >
                            Любая бумага будет висеть ровно
                        </text>
                    </div>
                    <div style={{backgroundImage: `url(${third_three})`,paddingTop:"30px",paddingLeft:"40px"}}>
                        <text className={AdvertisingStyle.title_One_first}>
                            Передвижная и съемная полка
                        </text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist}>
                            <text style={{marginLeft:"20px"}}>Позволяет повесить доску<br/>
                                <text style={{marginLeft:"70px"}}>вертикально</text> </text>
                            <br/>
                            <text style={{marginLeft:"45px"}}>или горизонтально</text>
                        </text>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Advertising;
