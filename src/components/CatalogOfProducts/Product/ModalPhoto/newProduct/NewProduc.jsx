import React, { useState }  from 'react';
import ProductStyle from './NewProduct.module.css';

const NewProduct = (props) =>{
    const [active, setStatus] = useState(false);



    return(
        <div className={ProductStyle.container}>
            {active ?
                <div className={ProductStyle.check} onClick={()=>{setStatus(!active)}}>
                    <div className={ProductStyle.checkActive}>

                    </div>
                </div>
            :
                <div className={ProductStyle.check} onClick={()=>{setStatus(!active)}}/>}

            <div className={ProductStyle.forImg}>
                <img src={props.photo}/>
            </div>
            <div className={ProductStyle.text}>
                <text>{props.text}</text>
            </div>
            <div className={ProductStyle.amount}>
                <div className={ProductStyle.changeAmountOfProductContainer}>
                    <div className={ProductStyle.minus}>
                        <b>-</b>
                    </div>
                    <div className={ProductStyle.boxOfNumber}>
                        <b>1</b>
                    </div>
                    <div className={ProductStyle.plus}>
                        <b>+</b>
                    </div>
                </div>
            </div>
            <div className={ProductStyle.price}>
                <text>{props.price === 0 ? "бесплатно" : props.price + " грн"}</text>
            </div>
        </div>
    )
}

export default NewProduct;
