import React from 'react';
import FooterStyle from './Footer.module.css';
import {useSelector} from "react-redux";
import local from '../../photos/footer/Group 69.png';
import cool from '../../photos/footer/Vector.png';
import message from '../../photos/footer/Group 37.png';
import logo from '../../photos/logo.png';
import download from '../../photos/download.png';
import MenuStyle from "../menu/Listmenu/ListMenu.module.css";
import downloadButton from "../../photos/pdf 1.svg";

const Footer = () =>{

    const languageData = useSelector(state=>state.languageData);

    return(
        <div className={FooterStyle.container} name="Footer">
            <div className={FooterStyle.content}>
                <div className={FooterStyle.firstBlock}>
                    <div className={FooterStyle.contact}>
                        <div className={FooterStyle.contactContainer}>
                            <img src={local} style={{height:"20px"}}/>
                            <text>
                                {languageData.secondNotice.secondNotice.getByYourSelf.second[languageData.indexOfLanguage]}
                            </text>
                        </div>
                        <div className={FooterStyle.contactContainer}>
                            <img src={cool} style={{marginTop:"7px"}}/>
                            <text>(044) 599 39 22, (094) 899 39 22, (067) 765 11 85</text>
                        </div>
                        <div className={FooterStyle.contactContainer}>
                            <img src={message} style={{marginTop:"8px"}}/>
                            <text>info@abc-office.com.ua</text>
                        </div>
                    </div>
                    <div className={FooterStyle.logo}>
                        <img src={logo} />
                    </div>
                    <p className={FooterStyle.age}>2006 - 2020 © ABC Office</p>
                </div>
                <div className={FooterStyle.secondBlock}>
                    <div className={FooterStyle.itemsDataContainer}>
                        <p>{languageData.menu.ProductCatalog[languageData.indexOfLanguage]}</p>
                        <p>{languageData.menu.Benefits[languageData.indexOfLanguage]}</p>
                        <p>{languageData.menu.DeliveryAndPayment[languageData.indexOfLanguage]}</p>
                        <p>{languageData.menu.Contacts[languageData.indexOfLanguage]}</p>
                    </div>
                    <h3 className={FooterStyle.newTitle}>
                        {languageData.footer.DownloadPrice.mainTitle[languageData.indexOfLanguage]}
                    </h3>
                    <p className={FooterStyle.addTitle}>
                        {languageData.footer.DownloadPrice.firstTitle[languageData.indexOfLanguage]}
                    </p>
                    <div className={MenuStyle.downloadButton}>
                        <img src={downloadButton}/>
                        <text>{languageData.footer.DownloadPrice.button[languageData.indexOfLanguage]}</text>
                    </div>
                </div>
            </div>
            {/*--------------------------------------*/}
            <div className={FooterStyle.avg_Footer}>
                <div className={FooterStyle.itemsDataContainer}>
                    <p>{languageData.menu.ProductCatalog[languageData.indexOfLanguage]}</p>
                    <p>{languageData.menu.Benefits[languageData.indexOfLanguage]}</p>
                    <p>{languageData.menu.DeliveryAndPayment[languageData.indexOfLanguage]}</p>
                    <p>{languageData.menu.Contacts[languageData.indexOfLanguage]}</p>
                </div>
                <div className={FooterStyle.contact}>
                    <div className={FooterStyle.contactContainer}>
                        <img src={local} style={{height:"20px"}}/>
                        <text>
                            {languageData.secondNotice.secondNotice.getByYourSelf.second[languageData.indexOfLanguage]}
                        </text>
                    </div>
                    <div className={FooterStyle.contactContainer}>
                        <img src={cool} style={{marginTop:"7px"}}/>
                        <text>(044) 599 39 22, (094) 899 39 22, (067) 765 11 85</text>
                    </div>
                    <div className={FooterStyle.contactContainer}>
                        <img src={message} style={{marginTop:"8px"}}/>
                        <text>info@abc-office.com.ua</text>
                    </div>
                </div>
                <div className={FooterStyle.logo}>
                    <img src={logo} />
                </div>
                <div className={FooterStyle.title_end}>
                    <p className={FooterStyle.age}>2006 - 2020 © ABC Office</p>
                </div>
                    <div className={FooterStyle.firstBlock}>

                    </div>
                    <div className={FooterStyle.secondBlock}>

                        <h3 className={FooterStyle.newTitle}>Актуальный прайс-лист</h3>
                        <p className={FooterStyle.addTitle}>
                            Вы можете скачать прайс на весь ассортимент продукции ABC Office
                        </p>
                        <div className={MenuStyle.downloadButton}>
                            <img src={downloadButton}/>
                            <text> Скачать прайс</text>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Footer;
