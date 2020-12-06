import React, { useState } from 'react';
import ProductsStyle from './Product.module.css';
import zoom from '../../../photos/zoom-in 1.png';
import ModalPhoto from "./ModalPhoto/ModalPhoto";
import ModalProduct from "./ModalProduct/ModalProduct";
import {useSelector} from "react-redux";

const Products = (props) =>{

    const languageData = useSelector(state=>state.languageData);

    const [indexOfMainPhoto, setIndexOfMainPhoto] = useState(0);
    let [amount, setAmount] = useState(1);
    const [openModalPhoto, setStatusOfModalPhoto] = useState(false);
    const [openModalProduct, setStatusOfModalProduct] = useState(false);

    let catalogOfPhoto;
    let catalogOfDescription;
    catalogOfPhoto = props.data.img.map((item,index)=>{
        return <img src={item.src} onClick={()=>setIndexOfMainPhoto(index)} style={{marginLeft:"5px"}}/>;
    });

    catalogOfDescription = props.data.description.map((item,index)=>{
        if(index <3){
            return <li>{item}</li>;
        }
    });

    return(
        <div className={ProductsStyle.container}>
            <div>
                {props.data.title !== '' ? <div className={ProductsStyle.title_ac}>
                                                <text>{props.data.title}</text>
                                          </div> : null}
                <div className={ProductsStyle.mainPhoto}>
                    <img src={props.data.img[indexOfMainPhoto].src}
                         onClick={()=>{setStatusOfModalPhoto(true)}}/>

                    {openModalPhoto ? <ModalPhoto photo={props.data.img[indexOfMainPhoto].src} name={props.data.name}
                                                  setStatusOfModalPhoto={setStatusOfModalPhoto} data={props.data}
                                                  indexOfMainPhoto={indexOfMainPhoto}
                                                  kindOfProduct={props.kindOfProduct}
                                                  setIndexOfMainPhoto={setIndexOfMainPhoto}
                                                  amount={amount}/> : null}
                </div>
                <div className={ProductsStyle.innerContaiter}>
                    <div className={ProductsStyle.pryblyzyty}>
                        <img src={zoom} alt={''}/>
                        <text>{languageData.Products.product.clickToPhoto[languageData.indexOfLanguage]}</text>
                    </div>
                    <div className={ProductsStyle.catalogOfPhoto}>
                        {catalogOfPhoto}
                    </div>
                    <div className={ProductsStyle.name}>
                        <text >{props.data.name}</text>
                    </div>
                    <div className={ProductsStyle.columb_D_P}>
                        <div className={ProductsStyle.for_action_container}>
                            <text className={ProductsStyle.action}>{props.data.action}</text>
                        </div>
                        <div className={ProductsStyle.description}>
                            <ul>
                                {catalogOfDescription}
                            </ul>
                            <div>
                                <text className={ProductsStyle.look_more} style={{color:"#46BFF3",height:"20px"}}
                                      onClick={()=>{setStatusOfModalProduct(true)}}>
                                    {languageData.Products.product.ViewMore[languageData.indexOfLanguage]}
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className={ProductsStyle.containerOfPriceAndAmount}>
                        <div className={ProductsStyle.priceContainer}>
                            {props.data.newPrice !== 0 ?
                                <text className={ProductsStyle.lastPrice}>{props.data.price + "грн"}</text>
                                :
                                <div />
                            }
                            <br/>
                            <text className={ProductsStyle.price}>{props.data.price + "грн"}</text>
                        </div>
                        {props.data.discount !== '' ? <div className={ProductsStyle.discount}><b>{props.data.discount}</b></div >:<div className={ProductsStyle.discount_None}> </div>}
                        <div className={ProductsStyle.changeAmountOfProductContainer}>
                            <div className={ProductsStyle.minus}>
                                <b onClick={()=>{if(amount > 1){setAmount(amount -=1)}}}>-</b>
                            </div>
                            <div className={ProductsStyle.boxOfNumber}>
                                <b>{amount}</b>
                            </div>
                            <div className={ProductsStyle.plus}>
                                <b onClick={()=>{setAmount(amount +=1)}}>+</b>
                            </div>
                        </div>
                    </div>
                    <div className={ProductsStyle.forSumbmit}>
                        <button className={ProductsStyle.submit}
                                onClick={()=>{setStatusOfModalProduct(true)}}>
                            {languageData.Products.product.order[languageData.indexOfLanguage]}
                        </button>
                        {openModalProduct ?
                            <ModalProduct
                                photoProduct={props.data.img[indexOfMainPhoto].src}
                                catalogOfPhoto={catalogOfPhoto}
                                data={props.data}
                                setStatusOfModalProduct={setStatusOfModalProduct}
                            />
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
