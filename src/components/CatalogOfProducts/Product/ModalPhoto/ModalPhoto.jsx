import React, { useState } from 'react';
import ModalStyle from './ModalPhoto.module.css'
import ProductsStyle from "../Product.module.css";
import ModalProduct from '../ModalProduct/ModalProduct';

const ModalPhoto = (props) =>{
    function last(){
        if(props.indexOfMainPhoto > 0){
            props.setIndexOfMainPhoto(props.indexOfMainPhoto - 1);
        }
    }

    function next(){
        if(props.kindOfProduct){
            if(props.indexOfMainPhoto < props.data.img.length - 1){
                props.setIndexOfMainPhoto(props.indexOfMainPhoto + 1);
            }
        }else {
            if(props.indexOfMainPhoto < props.data.colors[props.indexOfColor].arr.length - 1){
                props.setIndexOfMainPhoto(props.indexOfMainPhoto + 1);
            }
        }

    }

    let [amount, setAmount] = useState(props.amount);

    return(
        <div className={ModalStyle.container}>
            <div className={ModalStyle.container_OfContent}>
                <div className={ModalStyle.top_Container}>
                    <div>
                        <p>{props.name}</p>
                    </div>
                    <div className={ModalStyle.exit}>
                        <img onClick={()=>{props.setStatusOfModalPhoto(false)}}
                            src={"https://cdn.icon-icons.com/icons2/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png"}/>
                    </div>
                </div>
                <div className={ModalStyle.photoContainer}>
                    <div className={ModalStyle.containerOf_Photo}>
                        <div className={ModalStyle.last}>
                            <p onClick={()=>{last()}}>{"<"}</p>
                        </div>
                        <div className={ModalStyle.forImg}>
                            <img src={props.data.img[props.indexOfMainPhoto].src}/>
                        </div>
                        <div className={ModalStyle.next}>
                            <p onClick={()=>{next()}}>{">"}</p>
                        </div>
                    </div>
                    <div className={ModalStyle.forPrice}>
                        <div className={ModalStyle.row}>
                            <div>
                                <text className={ModalStyle.price}>{props.data.price + "грн"}</text>
                            </div>
                            <div >
                                <div className={ModalStyle.changeAmountOfProductContainer}>
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
                        </div>
                        <div>
                            <button className={ModalStyle.submit}>Заказать</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ModalPhoto;
