import React, { useState } from 'react';
import ModalStyle from './ModalProduct.module.css';
import NewProduct from '../ModalPhoto/newProduct/NewProduc';
import axios from "axios";

import newProduct_1 from '../../../../photos/addProducts/1.svg';
import newProduct_2 from '../../../../photos/addProducts/2.svg';
import newProduct_3 from '../../../../photos/addProducts/3.svg';
import newProduct_4 from '../../../../photos/addProducts/4.svg';
import newProduct_5 from '../../../../photos/addProducts/5.svg';

const ModalProduct = (props) =>{

    // axios.post('https://api.novaposhta.ua/v2.0/json/',{
    //     "modelName": "Address",
    //     "calledMethod": "getCities",
    //     "methodProperties": {
    //         "FindByString": "І"
    //     },
    //
    //     "apiKey": "252109f31d937ad2b9daf35b92323d0f"
    // })
    //     .then(function (response) {
    //
    //         console.log(response);
    //         // console.log(response.data.token.id_token);
    //         // localStorage.setItem('token', response.data.token.id_token);
    //         // dispatch({type:'SHOW_INPUT_BOX',status:false});
    //         // dispatch({type:'CHANGE_STATUS_OF_USER',userStatus:true});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    let catalogOfDescription;

    let newProduct = [
        {
            text:'Альбом для флипчарта 64х90 см, 20 листов',
            srcPhoto:newProduct_1,
            status:false,
            price: 0
        },
        {
            text:'Губка для досок магнитная',
            srcPhoto:newProduct_2,
            status:false,
            price: 120
        },
        {
            text:'Набор магнитов для доски 25 мм, 6 штук',
            srcPhoto:newProduct_3,
            status:false,
            price: 56,
        },
        {
            text:'Магнитная прищепка для доски',
            srcPhoto:newProduct_4,
            status:false,
            price: 38
        },
        {
            text:'Альбом для флипчарта 64х90 см, 20 листов',
            srcPhoto:newProduct_5,
            status:false,
            price:105,
        },
    ];

    const catalog = newProduct.map((item,index)=>{
        return(
            <NewProduct text={item.text} photo={item.srcPhoto} price={item.price}/>
        )
    });

    catalogOfDescription = props.data.description.map((item,index)=>{
            return <li>{item}</li>;
    });
    return(
        <div className={ModalStyle.container}>
            <div className={ModalStyle.container_OfContent}>
                <div className={ModalStyle.firstContainer}>
                    <div className={ModalStyle.informationAboutProduct}>
                        <div className={ModalStyle.title}>
                            <text>Флипчарт Training ABC Оffice 70x100см</text>
                        </div>
                        <div className={ModalStyle.rowContainer}>
                            <div className={ModalStyle.column}>
                                <div className={ModalStyle.center}>
                                    <div className={ModalStyle.photoContainer}>
                                        <img src={props.photoProduct} className={ModalStyle.photoContainer}/>
                                    </div>
                                </div>
                                <div className={ModalStyle.catalogOfPhoto}>
                                    {props.catalogOfPhoto}
                                </div>
                            </div>
                            <div>
                                <div className={ModalStyle.description}>
                                    <div className={ModalStyle.text_of_title_description}>
                                        <text>Характеристика товара:</text>
                                    </div>
                                    {catalogOfDescription}
                                </div>
                                <div className={ModalStyle.notice}>
                                    <text>Обмен/возврат товара в течение 14 дней</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ModalStyle.futherProduct}>
                        {catalog}
                    </div>
                </div>
                <div className={ModalStyle.secondContainer}>

                </div>
            </div>

        </div>
    )
}

export default ModalProduct;
