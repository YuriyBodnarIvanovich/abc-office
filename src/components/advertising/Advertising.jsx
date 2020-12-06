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
import {useSelector} from "react-redux";

const Advertising = () =>{
    const dataLanguage = useSelector(state=>state.languageData);
    return(
        <div className={AdvertisingStyle.container} name="Advertising">
            <div>
                <div className={AdvertisingStyle.title}>
                    <h3>{dataLanguage.advertising.title[dataLanguage.indexOfLanguage]}</h3>
                </div>
                <div className={AdvertisingStyle.container_max_1320px}>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${one})`,paddingTop:"30px", paddingLeft:"20px"}}>
                            <text className={AdvertisingStyle.title_One_first}>{dataLanguage.advertising.block_one.title[dataLanguage.indexOfLanguage]}</text>
                            <div  style={{marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist}>{dataLanguage.advertising.block_one.second_title[dataLanguage.indexOfLanguage]}</text>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${two})`, position:"relative"}}>
                            <div style={{position:"absolute",bottom:0,paddingBottom:"30px",paddingTop:"30px",
                                paddingLeft:"25px"}}>
                                <text className={AdvertisingStyle.title_One_first} style={{marginBottom:"10px"}}>
                                    {dataLanguage.advertising.block_two.title[dataLanguage.indexOfLanguage]}</text>
                                <br/>
                                <div style={{color:"white",fontSize:"14px",marginBottom:"10px", marginTop:"10px"}}>
                                    <text className={AdvertisingStyle.title_Two_Frist}>
                                        {dataLanguage.advertising.block_two.second_title[dataLanguage.indexOfLanguage]}
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${three})`,paddingTop:"30px", paddingLeft:"31px"}} >
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_three.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                           <div  style={{ marginTop:"10px"}}>
                               <text className={AdvertisingStyle.title_Two_Frist}>
                                   {dataLanguage.advertising.block_three.second_title[dataLanguage.indexOfLanguage]}
                               </text>
                           </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.secondAdvertising}>
                        <div style={{backgroundImage:`url(${second_one})`,paddingTop:"270px"}}>
                            <div className={AdvertisingStyle.just_second_One}>
                                <div style={{marginLeft:"30px"}} >
                                    <text className={AdvertisingStyle.title_One_first}>
                                        {dataLanguage.advertising.block_four.title[dataLanguage.indexOfLanguage]}
                                    </text>
                                    <br/>
                                    <div style={{marginTop:"10px"}}>
                                        <text className={AdvertisingStyle.title_Two_Frist}>
                                            {dataLanguage.advertising.block_four.second_title[dataLanguage.indexOfLanguage]}
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${second_two})`,paddingLeft:"114px",paddingTop:"30px"}}>
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_five.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <div style={{marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist} >
                                    {dataLanguage.advertising.block_five.second_title[dataLanguage.indexOfLanguage]}
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${third_one})`,
                            position:"relative",paddingBottom:"30px",
                            boxSizing:"border-box",paddingTop:"30px",
                            paddingLeft:"60px"}}>

                            <div style={{marginTop:"320px",paddingBottom:"30px"}}>
                                <text className={AdvertisingStyle.title_One_first}>
                                    {dataLanguage.advertising.block_six.title[dataLanguage.indexOfLanguage]}
                                </text>
                                <br/>
                                <div style={{marginTop:'10px'}}>
                                    <text className={AdvertisingStyle.title_Two_Frist}
                                          style={{marginBottom:"30px"}}>
                                        {dataLanguage.advertising.block_six.second_title[dataLanguage.indexOfLanguage]}
                                    </text>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${third_two})`,paddingTop:"30px", paddingLeft:"67px"}}>
                            <text className={AdvertisingStyle.title_One_first} >
                                {dataLanguage.advertising.block_seven.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <div style={{marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist} >
                                    {dataLanguage.advertising.block_seven.second_title[dataLanguage.indexOfLanguage]}
                                </text>
                            </div>

                        </div>
                        <div style={{backgroundImage: `url(${third_three})`,paddingTop:"30px", paddingLeft:"37px"}}>
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_eight.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <div style={{marginTop:"10px"}}>
                                <text className={AdvertisingStyle.title_Two_Frist}>
                                    {dataLanguage.advertising.block_eight.second_title[dataLanguage.indexOfLanguage]}
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-----------------------------------------------------------------------------------------------*/}
                <div className={AdvertisingStyle.container_1320px}>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${one})`,paddingTop:"30px", paddingLeft:"37px"}}>
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_one.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}>
                                {dataLanguage.advertising.block_one.second_title[dataLanguage.indexOfLanguage]}
                            </text>
                        </div>
                        <div style={{backgroundImage:`url(${two})`,paddingTop:"30px", paddingLeft:"20px", position:"relative"}}>
                            <div style={{position:"absolute",bottom:0,paddingBottom:"30px"}}>
                                <text  className={AdvertisingStyle.title_One_first}>
                                    {dataLanguage.advertising.block_two.title[dataLanguage.indexOfLanguage]}
                                </text>
                                <br/>
                                <text style={{color:"white",fontSize:"14px"}} className={AdvertisingStyle.title_Two_Frist}>
                                    {dataLanguage.advertising.block_two.second_title[dataLanguage.indexOfLanguage]}
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
                                        <text>
                                            {dataLanguage.advertising.block_four.title[dataLanguage.indexOfLanguage]}
                                        </text>
                                        <br/>
                                        <text>
                                            {dataLanguage.advertising.block_four.second_title[dataLanguage.indexOfLanguage]}
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage:`url(${third_one})`,position:"relative",paddingBottom:"30px",
                            boxSizing:"border-box"}} >
                            <div style={{marginTop:"350px",paddingLeft:"30px"}}>
                                <text className={AdvertisingStyle.title_One_first}>
                                    {dataLanguage.advertising.block_six.title[dataLanguage.indexOfLanguage]}
                                </text>
                                <br/>
                                <text className={AdvertisingStyle.title_Two_Frist}>
                                    {dataLanguage.advertising.block_six.second_title[dataLanguage.indexOfLanguage]}
                                </text>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${third_two})`,paddingTop:"30px",paddingLeft:"40px"}}>
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_seven.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}>
                                {dataLanguage.advertising.block_seven.second_title[dataLanguage.indexOfLanguage]}
                            </text>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.secondAdvertising}>
                        <div style={{backgroundImage:`url(${second_two})`, position:"relative"}}
                             className={AdvertisingStyle.for_bigSecond}>
                            <div className={AdvertisingStyle.just_second_One}
                                style={{paddingTop:"10px"}}>
                                <div style={{width:"355px"}}>
                                    <text>
                                        {dataLanguage.advertising.block_five.title[dataLanguage.indexOfLanguage]}
                                    </text>
                                    <br/>
                                    <text>
                                        {dataLanguage.advertising.block_five.second_title[dataLanguage.indexOfLanguage]}
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={AdvertisingStyle.firstAdvertising}>
                        <div style={{backgroundImage: `url(${three})`,paddingTop:"30px", paddingLeft:"30px"}} >
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_three.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}>
                                {dataLanguage.advertising.block_three.second_title[dataLanguage.indexOfLanguage]}
                            </text>
                        </div>
                        <div style={{backgroundImage: `url(${third_three})`,paddingTop:"30px",paddingLeft:"40px"}}>
                            <text className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_eight.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}>
                                {dataLanguage.advertising.block_eight.second_title[dataLanguage.indexOfLanguage]}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
            {/*-----------------------------------------------------------------------------------------------*/}
            <div className={AdvertisingStyle.container_362}>
                <div className={AdvertisingStyle.firstAdvertising}>
                    <div style={{backgroundImage:`url(${one})`,paddingTop:"30px", paddingLeft:"45px"}}>
                        <text className={AdvertisingStyle.title_One_first}>
                            {dataLanguage.advertising.block_one.title[dataLanguage.indexOfLanguage]}
                        </text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist} style={{marginLeft:"20px"}}>
                            {dataLanguage.advertising.block_one.second_title[dataLanguage.indexOfLanguage]}
                        </text>
                    </div>
                    <div style={{backgroundImage:`url(${two})`,paddingTop:"30px", paddingLeft:"20px", position:"relative"}}>
                        <div style={{position:"absolute",bottom:0,paddingBottom:"30px"}}>
                            <text style={{marginLeft:"35px"}} className={AdvertisingStyle.title_One_first}>
                                {dataLanguage.advertising.block_two.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <text style={{color:"white",fontSize:"14px",marginLeft:"20px"}}
                                  className={AdvertisingStyle.title_Two_Frist}>
                                {dataLanguage.advertising.block_two.second_title[dataLanguage.indexOfLanguage]}
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
                                    <text>
                                        {dataLanguage.advertising.block_four.title[dataLanguage.indexOfLanguage]}
                                    </text>
                                    <br/>
                                    <text style={{marginLeft:"20px"}}>
                                        {dataLanguage.advertising.block_four.second_title[dataLanguage.indexOfLanguage]}
                                    </text>
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
                                {dataLanguage.advertising.block_six.title[dataLanguage.indexOfLanguage]}
                            </text>
                            <br/>
                            <text className={AdvertisingStyle.title_Two_Frist}
                                  style={{marginLeft:"10px"}}>
                                {dataLanguage.advertising.block_four.second_title[dataLanguage.indexOfLanguage]}
                            </text>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${third_two})`,paddingTop:"30px",paddingLeft:"30px"}}>
                        <text className={AdvertisingStyle.title_One_first}
                              style={{marginLeft:"20px"}}>
                            {dataLanguage.advertising.block_seven.title[dataLanguage.indexOfLanguage]}
                        </text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist}>
                            {dataLanguage.advertising.block_seven.second_title[dataLanguage.indexOfLanguage]}
                        </text>
                    </div>
                </div>
                <div className={AdvertisingStyle.secondAdvertising}>
                    <div style={{backgroundImage:`url(${second_two})`, position:"relative"}}
                         className={AdvertisingStyle.for_bigSecond}>
                        <div className={AdvertisingStyle.just_second_One}
                             style={{paddingTop:"10px"}}>
                            <div style={{width:"250px",marginLeft:"40px"}}>
                                <text>
                                    {dataLanguage.advertising.block_five.title[dataLanguage.indexOfLanguage]}
                                </text>
                                <br/>
                                <text>
                                    {dataLanguage.advertising.block_five.second_title[dataLanguage.indexOfLanguage]}
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={AdvertisingStyle.firstAdvertising}>
                    <div style={{backgroundImage: `url(${three})`,paddingTop:"30px", paddingLeft:"40px"}} >
                        <text className={AdvertisingStyle.title_One_first} style={{marginLeft:"10px"}}>
                            {dataLanguage.advertising.block_three.title[dataLanguage.indexOfLanguage]}
                        </text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist} >
                            {dataLanguage.advertising.block_three.second_title[dataLanguage.indexOfLanguage]}
                        </text>
                    </div>
                    <div style={{backgroundImage: `url(${third_three})`,paddingTop:"30px",paddingLeft:"40px"}}>
                        <text className={AdvertisingStyle.title_One_first}>
                            {dataLanguage.advertising.block_eight.title[dataLanguage.indexOfLanguage]}
                        </text>
                        <br/>
                        <text className={AdvertisingStyle.title_Two_Frist}>
                            {dataLanguage.advertising.block_eight.second_title[dataLanguage.indexOfLanguage]}
                        </text>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Advertising;
