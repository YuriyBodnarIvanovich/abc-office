import React, { useState } from 'react';
import MenuStyle from './ListMenu.module.css';

import downloadButton from '../../../photos/pdf 1.svg';
import phone from "../../../photos/Phone.png";
import vectorDawn from "../../../photos/vectorDawn.png";

const ListMenu = () =>{
    const [activeLend,setStatus] = useState(false)
    return(
        <div className={MenuStyle.container}>
            <p>Каталог товаров</p>
            <p>Преимущества</p>
            <p>Доставка и Оплата</p>
            <p>Контакты</p>
            <div className={MenuStyle.downloadButton}>
                <img src={downloadButton}/>
                <text> Скачать прайс</text>
            </div>

            <div className={MenuStyle.changeLanguage}>
                <div>
                    {activeLend ? <p onClick={()=>{setStatus(false)}}>UA</p> : <p style={{color:"#888888"}}>UA</p>}

                </div>
                <div className={MenuStyle.vl}/>
                <div>
                    {activeLend ? <p style={{marginLeft:"5px",color:"#888888"}}>RU</p>:
                        <p onClick={()=>{setStatus(true)}} style={{marginLeft:"5px"}}>RU</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListMenu;
