import React, { useState } from "react";
import MenuStyle from './Menu.module.css';
import logo from '../../photos/logo.png';
import downloadButton from '../../photos/pdf 1.svg';
import phone from '../../photos/Phone.png';
import vectorDawn from '../../photos/vectorDawn.png';
import menu from '../../photos/icons8-menu-48.png';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";


const Menu = (props) =>{
    const dataLanguage = useSelector(state=>state.languageData);
    const dispatch = useDispatch();
    return(
       <div className={MenuStyle.containerMenu}>
            <div className={MenuStyle.menu}>
                    <div>
                        <img src={logo} className={MenuStyle.logo}/>
                    </div>
                    <div className={MenuStyle.catalog}>
                        <Link activeClass="active" to="CatalogOfProducts" spy={true} smooth={true} offset={50} duration={500}>
                            {dataLanguage.menu.ProductCatalog[dataLanguage.indexOfLanguage]}
                        </Link>
                        <Link activeClass="active" to="Advertising" spy={true} smooth={true} offset={50} duration={500}>
                            {dataLanguage.menu.Benefits[dataLanguage.indexOfLanguage]}
                        </Link>
                        <Link activeClass="active" to="NoticeSecond" spy={true} smooth={true} offset={50} duration={500}>
                            {dataLanguage.menu.DeliveryAndPayment[dataLanguage.indexOfLanguage]}
                        </Link>
                        <Link activeClass="active" to="Footer" spy={true} smooth={true} offset={50} duration={500}>
                            {dataLanguage.menu.Contacts[dataLanguage.indexOfLanguage]}
                        </Link>
                    </div>
                    <div className={MenuStyle.downloadButton}>
                        <img src={downloadButton}/>
                        <text>{dataLanguage.menu.Download[dataLanguage.indexOfLanguage]}</text>
                    </div>
                    <div className={MenuStyle.changeLanguage}>
                        <div>
                            {dataLanguage.indexOfLanguage === 0 ?
                                <p className={MenuStyle.active}>RU</p>
                                :
                                <p onClick={()=>dispatch({type:"CHANGE_INDEX_OF_LANGUAGE",index:0})}>RU</p>
                            }
                        </div>
                        <div className={MenuStyle.vl}/>
                        <div>
                            {dataLanguage.indexOfLanguage === 1 ?
                                <p className={MenuStyle.active}>EN</p>
                                :
                                <p onClick={()=>dispatch({type:"CHANGE_INDEX_OF_LANGUAGE",index:1})}>EN</p>
                            }
                        </div>
                    </div>
                    <div className={MenuStyle.numberOfPhone}>
                        <img src={phone} className={MenuStyle.phone}/>
                        <p>(044) 555 55 55</p>
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
                    <p>(044) 555 55 55</p>
                    <img src={vectorDawn} className={MenuStyle.arrow}/>
                </div>
            </div>
       </div>
    )
}

export default Menu;
