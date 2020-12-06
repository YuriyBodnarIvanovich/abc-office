import React, { useState } from 'react';
import MenuStyle from './ListMenu.module.css';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import downloadButton from '../../../photos/pdf 1.svg';
import phone from "../../../photos/Phone.png";
import vectorDawn from "../../../photos/vectorDawn.png";
import { Link, animateScroll as scroll } from "react-scroll";

const ListMenu = () =>{
    const dataLanguage = useSelector(state=>state.languageData);
    const dispatch = useDispatch();
    const [activeLend,setStatus] = useState(false)
    return(
        <div className={MenuStyle.container}>
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
            <div className={MenuStyle.downloadButton}>
                <img src={downloadButton}/>
                <text> Скачать прайс</text>
            </div>

            <div className={MenuStyle.changeLanguage}>
                <div>
                    {dataLanguage.indexOfLanguage === 0 ?
                        <p className={MenuStyle.active}>RU</p>
                        :
                        <p onClick={()=>dispatch({type:"CHANGE_INDEX_OF_LANGUAGE",index:0})}
                           className={MenuStyle.passive}>RU</p>
                    }
                </div>
                <div className={MenuStyle.vl}/>
                <div>
                    {dataLanguage.indexOfLanguage === 1 ?
                        <p className={MenuStyle.active}>EN</p>
                        :
                        <p onClick={()=>dispatch({type:"CHANGE_INDEX_OF_LANGUAGE",index:1})}
                           className={MenuStyle.passive}>EN</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListMenu;
