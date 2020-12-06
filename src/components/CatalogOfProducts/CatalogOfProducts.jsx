import React, { useState } from 'react';
import CatalogStyle from './CatalogOfProducts.module.css';

import slide_1 from '../../photos/new_Photo/Slide/main.png';
import slide_2 from '../../photos/new_Photo/Slide/main1.png';
import slide_3 from '../../photos/new_Photo/Slide/main3.png';


import training_1 from '../../photos/new_Photo/Training/main1.png';
import training_2 from '../../photos/new_Photo/Training/main2.png';
import training_3 from '../../photos/new_Photo/Training/main3.png';


import standart_1 from '../../photos/new_Photo/standart/main.png';
import standart_2 from '../../photos/new_Photo/standart/KMshelf.png';
import standart_3 from '../../photos/new_Photo/standart/станд.png';
import standart_4 from '../../photos/new_Photo/standart/2 ctand.png';

import mobile_1 from '../../photos/new_Photo/Mobile/main.png';
import mobile_2 from '../../photos/new_Photo/Mobile/Mobiletriangle.png';
import mobile_3 from '../../photos/new_Photo/Mobile/Mobileback.png';
import mobile_4 from '../../photos/new_Photo/Mobile/NewMobile.png';
import mobile_5 from '../../photos/new_Photo/Mobile/е.png';

import double_1 from '../../photos/new_Photo/Double/Mobilka.png';
import double_2 from '../../photos/new_Photo/Double/mobilkaShelf1.png';
import double_3 from '../../photos/new_Photo/Double/MobilrfShelf2.png';

import Products from "./Product/Product";
import Notice from "../notice/Notice";
import {useSelector} from "react-redux";

const CatalogOfProducts = () =>{

    const languageData = useSelector(state=>state.languageData);

    const [activeFirs,setStatus] = useState(true)

    const ProductsWithLegsArr =[
        {
            name:'Slide',
            price: 1999,
            newPrice:1799,
            discount:'-10%',
            title:languageData.Products.Slide.title[languageData.indexOfLanguage],
            action:languageData.Products.Slide.action[languageData.indexOfLanguage],
            img:[
                {src:slide_2},
                {src:slide_1},
                {src:slide_3},
            ],
            description:[
                languageData.Products.Slide.description.first[languageData.indexOfLanguage],
                languageData.Products.Slide.description.second[languageData.indexOfLanguage],
                languageData.Products.Slide.description.third[languageData.indexOfLanguage],
                languageData.Products.Slide.description.fourth[languageData.indexOfLanguage],
                languageData.Products.Slide.description.fifth[languageData.indexOfLanguage],
                languageData.Products.Slide.description.sixth[languageData.indexOfLanguage],
            ],
            amount:1,
        },
        {
            name:'Training',
            price:2399,
            newPrice:0,
            discount:'',
            title:languageData.Products.Training.title[languageData.indexOfLanguage],
            action:languageData.Products.Training.action[languageData.indexOfLanguage],
            img:[
                {src:training_1},
                {src:training_2},
                {src:training_3},
            ],
            description:[
                languageData.Products.Training.description.first[languageData.indexOfLanguage],
                languageData.Products.Training.description.second[languageData.indexOfLanguage],
                languageData.Products.Training.description.third[languageData.indexOfLanguage],
                languageData.Products.Training.description.fourth[languageData.indexOfLanguage],
                languageData.Products.Training.description.fifth[languageData.indexOfLanguage],
                languageData.Products.Training.description.sixth[languageData.indexOfLanguage],
                languageData.Products.Training.description.seventh[languageData.indexOfLanguage],
            ],
            amount:1,
        },
        {
            name:'Standard',
            price:2799,
            newPrice:0,
            discount:'',
            title:'',
            action:languageData.Products.Standard.action[languageData.indexOfLanguage],
            img:[
                {src:standart_1},
                {src:standart_2},
                {src:standart_3},
                {src:standart_4},
            ],
            description:[
                languageData.Products.Standard.description.first[languageData.indexOfLanguage],
                languageData.Products.Standard.description.second[languageData.indexOfLanguage],
                languageData.Products.Standard.description.third[languageData.indexOfLanguage],
                languageData.Products.Standard.description.fourth[languageData.indexOfLanguage],
            ],
            amount:1,

        },
        {
            name:'Mobile',
            price:3999,
            newPrice:0,
            discount:'',
            title:'',
            action:languageData.Products.Mobile.action[languageData.indexOfLanguage],
            img:[
                {src:mobile_1},
                {src:mobile_2},
                {src:mobile_3},
                {src:mobile_4},
                {src:mobile_5},
            ],
            description:[
                languageData.Products.Mobile.description.first[languageData.indexOfLanguage],
                languageData.Products.Mobile.description.second[languageData.indexOfLanguage],
                languageData.Products.Mobile.description.third[languageData.indexOfLanguage],
                languageData.Products.Mobile.description.fourth[languageData.indexOfLanguage],
                languageData.Products.Mobile.description.fifth[languageData.indexOfLanguage],
                languageData.Products.Mobile.description.sixth[languageData.indexOfLanguage],
                languageData.Products.Mobile.description.seventh[languageData.indexOfLanguage],
            ],
            amount:1,
        },
        {
            name:'Double',
            price:2799,
            newPrice:0,
            discount:'',
            title:'',
            action:languageData.Products.Double.action[languageData.indexOfLanguage],
            img:[
                {src:double_1},
                {src:double_2},
                {src:double_3},
            ],
            description:[
                languageData.Products.Double.description.first[languageData.indexOfLanguage],
                languageData.Products.Double.description.second[languageData.indexOfLanguage],
                languageData.Products.Double.description.third[languageData.indexOfLanguage],
                languageData.Products.Double.description.fourth[languageData.indexOfLanguage],
                languageData.Products.Double.description.fifth[languageData.indexOfLanguage],
            ],
            amount:1,
        },
    ];

    const [indexOfMainPhoto, setIndexOfMainPhoto] = useState(0);

    const catalogOfProducts = ProductsWithLegsArr.map((item)=>{
        return <Products data={item} kindOfProduct={true} indexOfMainPhoto={indexOfMainPhoto}
                                setIndexOfMainPhoto={setIndexOfMainPhoto}/>
    });

   return(
       <div className={CatalogStyle.container} name="CatalogOfProducts">
           <Notice setStatus={setStatus} activeFirs={activeFirs}/>
           <div className={CatalogStyle.content}>
               {catalogOfProducts}
           </div>
       </div>
   )
}

export default CatalogOfProducts;
