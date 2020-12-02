import React, { useState } from "react";
import MenuStyle from './Menu.module.css';

import logo from '../../photos/logo.png';
import downloadButton from '../../photos/pdf 1.svg';
import phone from '../../photos/Phone.png';
import vectorDawn from '../../photos/vectorDawn.png';
import menu from '../../photos/icons8-menu-48.png';
const Menu = (props) =>{
    const [activeLend,setStatus] = useState(false)

    return(
       <div className={MenuStyle.containerMenu}>
            <div className={MenuStyle.menu}>
                    <div>
                        <img src={logo} className={MenuStyle.logo}/>
                    </div>
                    <div className={MenuStyle.catalog}>
                        <p style={{width:"120px"}}>Каталог товаров</p>
                        <p style={{width:"110px"}}>Преимущества</p>
                        <p style={{width:"140px"}}>Доставка и Оплата</p>
                        <p style={{width:"75px"}}>Контакты</p>
                    </div>
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
                    <div className={MenuStyle.numberOfPhone}>
                        <img src={phone} className={MenuStyle.phone}/>
                        <p>(044) 599 39 22</p>
                        <img src={vectorDawn} className={MenuStyle.arrow}/>
                    </div>
            </div>
            <div className={MenuStyle.mobile}>
                <div className={MenuStyle.menuLogo}>
                    <img src={menu} alt={'menu'} onClick={()=>{props.setStatus(!props.showAllMenu)}}/>
                </div>
                <div>
                    <img src={logo} className={MenuStyle.logo}/>
                </div>
                <div className={MenuStyle.numberOfPhone}>
                    <img src={phone} className={MenuStyle.phone}/>
                    <p>(044) 599 39 22</p>
                    <img src={vectorDawn} className={MenuStyle.arrow}/>
                </div>
            </div>
       </div>
    )
}

export default Menu;
