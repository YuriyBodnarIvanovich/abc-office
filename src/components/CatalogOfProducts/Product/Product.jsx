import React, { useState } from 'react';
import ProductsStyle from './Product.module.css';
import zoom from '../../../photos/zoom-in 1.png';
import ModalPhoto from "./ModalPhoto/ModalPhoto";
import ModalProduct from "./ModalProduct/ModalProduct";

const ProductWithLegs = (props) =>{
    const [indexOfMainPhoto, setIndexOfMainPhoto] = useState(0);
    const [indexOfColor, setIndexOfColor] = useState(0);
    const [openModalPhoto, setStatusOfModalPhoto] = useState(false);
    const [openModalProduct, setStatusOfModalProduct] = useState(false);

    let catalogOfPhoto;
    let catalogOfDescription;
    let catalogOfSize;
    let catalogOfColors;
    if(props.kindOfProduct){
        catalogOfPhoto = props.data.img.map((item,index)=>{
            return <img src={item.src} onClick={()=>setIndexOfMainPhoto(index)} style={{marginLeft:"5px"}}/>;
        });

         catalogOfDescription = props.data.description.map((item,index)=>{
            if(index <3){
                return <li>{item}</li>;
            }
        });
    }else {
        catalogOfPhoto = props.data.colors[indexOfColor].arr.map((item,index)=>{
            return <img src={item.src} onClick={()=>setIndexOfMainPhoto(index)} style={{marginLeft:"5px"}}/>;
        });
        catalogOfDescription = props.data.description.map((item,index)=>{
                return <li>{item}</li>;
        });
        catalogOfSize = props.data.size.map((item)=>{
            return <div className={ProductsStyle.container_ofItem_size}>
                        <text>{item.value}</text>
                  </div>
        });

        catalogOfColors = props.data.colors.filter(function (item) {
            return item.color !== "";

        }).map((item,index)=>{
            return   <div className={ProductsStyle.color_div}
                          style={{backgroundColor: item.color}}
                          onClick={()=>{setIndexOfColor(index)}}>
                        <div onClick={()=>{setIndexOfColor(index)}}>

                        </div>
                     </div>
        });
    }

    return(
        <div className={ProductsStyle.container}>
            <div>
                {props.data.title !== '' ? <div className={ProductsStyle.title_ac}>
                                                <text>{props.data.title}</text>
                                          </div> : null}
                {props.kindOfProduct ? null : <div className={ProductsStyle.containerForColor} onClick={()=>{setIndexOfMainPhoto(0)}}> {catalogOfColors}</div>}
                    {props.kindOfProduct ?
                        <div className={ProductsStyle.mainPhoto}>
                         <img src={props.data.img[indexOfMainPhoto].src}
                              onClick={()=>{setStatusOfModalPhoto(true)}}/>


                            {openModalPhoto ? <ModalPhoto photo={props.data.img[indexOfMainPhoto].src} name={props.data.name}
                                                          setStatusOfModalPhoto={setStatusOfModalPhoto} data={props.data}
                                                          indexOfMainPhoto={indexOfMainPhoto}
                                                          kindOfProduct={props.kindOfProduct}
                                                          setIndexOfMainPhoto={setIndexOfMainPhoto}/> : null}
                        </div>
                        :
                        <div className={ProductsStyle.mainPhoto_2}>

                            <img src={props.data.colors[indexOfColor].arr[indexOfMainPhoto].src}
                                 onClick={()=>{setStatusOfModalPhoto(true)}} />


                            {openModalPhoto ? <ModalPhoto photo={props.data.colors[indexOfColor].arr[indexOfMainPhoto].src}
                                    name={props.data.name} setStatusOfModalPhoto={setStatusOfModalPhoto} data={props.data}
                                                          indexOfColor={indexOfColor} indexOfMainPhoto={indexOfMainPhoto}
                                                          setIndexOfMainPhoto={setIndexOfMainPhoto}/> : null}
                        </div>
                    }
                <div className={ProductsStyle.innerContaiter}>
                    <div className={ProductsStyle.pryblyzyty}>
                        <img src={zoom} alt={''}/>
                        <text>Нажмите на изображение для увеличения</text>
                    </div>
                    <div className={ProductsStyle.catalogOfPhoto}>
                        {catalogOfPhoto}
                    </div>
                    <div className={ProductsStyle.name}>
                        <text >{props.data.name}</text>
                    </div>

                    {props.kindOfProduct ? null :
                        <div className={ProductsStyle.size}>
                            {catalogOfSize}
                        </div>
                    }
                    <div className={ProductsStyle.columb_D_P}>
                        <div className={ProductsStyle.for_action_container}>
                            <text className={ProductsStyle.action}>{props.data.action}</text>
                        </div>
                        <div className={ProductsStyle.description}>
                            <ul>
                                {catalogOfDescription}
                            </ul>
                            <div>
                                <text className={ProductsStyle.look_more} style={{color:"#46BFF3",height:"20px"}}>
                                    Смотреть больше
                                </text>
                            </div>
                        </div>
                    </div>
                    {props.kindOfProduct ?
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
                                    <b>-</b>
                                </div>
                                <div className={ProductsStyle.boxOfNumber}>
                                    <b>{props.data.amount}</b>
                                </div>
                                <div className={ProductsStyle.plus}>
                                    <b>+</b>
                                </div>
                            </div>
                        </div>

                        :


                        <div className={ProductsStyle.containerOfPriceAndAmountWithoutLeg}>
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
                                    <b>-</b>
                                </div>
                                <div className={ProductsStyle.boxOfNumber}>
                                    <b>{props.data.amount}</b>
                                </div>
                                <div className={ProductsStyle.plus}>
                                    <b>+</b>
                                </div>
                            </div>
                        </div>


                    }

                    <div className={ProductsStyle.forSumbmit}>
                        <button className={ProductsStyle.submit}
                                onClick={()=>{setStatusOfModalProduct(true)}}>Заказать</button>
                        {openModalProduct ?
                            <ModalProduct
                                photoProduct={props.data.img[indexOfMainPhoto].src}
                                catalogOfPhoto={catalogOfPhoto}
                                data={props.data}
                            />

                            : null}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductWithLegs;
