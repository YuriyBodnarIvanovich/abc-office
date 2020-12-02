import React, { useState } from 'react';
import CatalogStyle from './CatalogOfProducts.module.css';


// import slide_1 from '../../photos/Slide/KMshelf.png';
// import slide_2 from '../../photos/Slide/main.png';
// import slide_3 from '../../photos/Slide/KM hooks.png';

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

import bord_1_1 from '../../photos/new_Photo/маркерная/main.png';
import bord_1_2 from '../../photos/new_Photo/маркерная/XlineShelf.png';
import bord_1_3 from '../../photos/new_Photo/маркерная/NewXline.png';

import bord_1_4 from '../../photos/new_Photo/пробковая/main.png';
import bord_1_5 from '../../photos/new_Photo/пробковая/CorcXline.png';
import bord_1_6 from '../../photos/new_Photo/пробковая/CorcCorner.png';

import bord_1_7 from '../../photos/new_Photo/текстильная/main.png';
import bord_1_8 from '../../photos/new_Photo/текстильная/TextilXline.png';
import bord_1_9 from '../../photos/new_Photo/текстильная/TextilCorner.png';
import bord_1_10_1 from '../../photos/new_Photo/текстильная/цуа.png';
import bord_1_10_2 from '../../photos/new_Photo/текстильная/43443.png';


import ProductWithLegs from "./Product/Product";
import Notice from "../notice/Notice";

const CatalogOfProducts = () =>{
    const [activeFirs,setStatus] = useState(true)

    const ProductsWithLegsArr =[
        {
            name:'Slide',
            price: 1999,
            newPrice:1799,
            discount:'-10%',
            title:'Суперцена',
            action:'Акция! Альбом 64х90 см, 20 листов в подарок!',
            img:[
                {src:slide_2},
                {src:slide_1},
                {src:slide_3},
            ],
            description:[
                'Размеры поверхности 70 x 100 см',
                'Держатель для альбомов с прижимной планкой на пружине',
                'Передвижные крючки для альбомов',
                'Рама S-line',
                'Устойчивые профилированные ноги',
                'Поверхность от Arcelor (Германия)',
            ],
            amount:1,
        },
        {
            name:'Training',
            price:2399,
            newPrice:0,
            discount:'',
            title:'Хит продаж',
            action:'Акция! Альбом 64х90 см, 20 листов в подарок!',
            img:[
                {src:training_1},
                {src:training_2},
                {src:training_3},
            ],
            description:[
                'Размеры поверхности 70 x 100 см',
                'Держатель для альбомов с прижимной планкой на пружине',
                'Передвижные крючки для альбомов',
                'Два дополнительных «крыла» для отдельных листов',
                'Устойчивые профилированные ноги',
                'Рама S-line',
                'Поверхность от Arcelor (Германия)',
            ],
            amount:1,
        },
        {
            name:'Standard',
            price:2799,
            newPrice:0,
            discount:'',
            title:'',
            action:'Акция! Альбом 64х90 см, 20 листов в подарок!',
            img:[
                {src:standart_1},
                {src:standart_2},
                {src:standart_3},
                {src:standart_4},
            ],
            description:[
                'Размеры поверхности 70 x 100 см',
                'Держатель для альбомов передвижные крючки с защитой от падения альбома',
                'Устойчивые профилированные ноги',
                'Стальная рама',
                'Поверхность от Arcelor (Германия)',
            ],
            amount:1,

        },
        {
            name:'Mobile',
            price:3999,
            newPrice:0,
            discount:'',
            title:'',
            action:'Акция! Альбом 64х90 см, 20 листов в подарок!',
            img:[
                {src:mobile_1},
                {src:mobile_2},
                {src:mobile_3},
                {src:mobile_4},
                {src:mobile_5},
            ],
            description:[
                'Размеры поверхности 70 x 100 см',
                'Регулировка наклона поверхности',
                'Держатель для альбомов с прижимной планкой на пружине',
                'Передвижные крючки для альбомов',
                'Устойчиая опора имеет три колеса с тормозом ',
                'Рама S-line',
                'Поверхность от Arcelor (Германия)',
            ],
            amount:1,
        },
        {
            name:'Double',
            price:2799,
            newPrice:0,
            discount:'',
            title:'',
            action:'Акция! Альбом 64х90 см, 20 листов в подарок!',
            img:[
                {src:double_1},
                {src:double_2},
                {src:double_3},
            ],
            description:[
                'Размеры поверхности 100 x 150 см',
                'Держатель для альбомов с прижимной планкой на пружине',
                'Устойчивые профилированные четыри ноги',
                'Передвижные крючки для альбомов',
                'Рама S-line',
                'Поверхность от Arcelor (Германия)',

            ],
            amount:1,
        },
    ];

    const BlackBord =[
        {
            name:'Маркерная',
            price:749,
            newPrice:0,
            discount:'',
            title:'Хит продаж',
            action:'Акция! Набор магнитов для доски 25 мм, 6 шт в подарок!',
            size:[
                {value:'65х100 см'},
                {value:'90х120 см'},
                {value:'100х150 см'},
                {value:'100х180 см'},
            ],
            colors:[
                {
                    color:'',
                    arr:[
                        {src:bord_1_1},
                        {src:bord_1_2},
                        {src:bord_1_3},
                    ],
                },
            ],
            description:[
                'Передвижная полка для маркеров',
                'Скрытое крепление в углах',
                'Поверхность от Arcelor (Германия)',

            ],
            amount:1,
        },
        {
            name:'Текстильная',
            price:649,
            newPrice:0,
            discount:'',
            title:'',
            action:'Акция! Булавки цветные в подарок!',
            size:[
                {value:'65х100 см'},
                {value:'90х120 см'},
                {value:'100х150 см'},
                {value:'100х180 см'},
            ],
            colors:[
                {   color:'#29458E',

                    arr:[
                        {src:bord_1_10_2},
                        {src:bord_1_10_1},
                    ],
                },
                {
                    color:'#CCCCCC',
                    arr:[
                        {src:bord_1_7},
                        {src:bord_1_8},
                        {src:bord_1_9}
                    ],
                }
            ],
            description:[
                'Поверхность из специального текстиля',
                'Скрытое крепление в углах',
                'Рама S-line',
            ],
            amount:1,
        },
        {
            name:'Пробковая',
            price:715,
            newPrice:649,
            discount:'- 10%',
            title:'Суперцена',
            action:'Акция! Булавки цветные в подарок!',
            size:[
                {value:'65х100 см'},
                {value:'90х120 см'},
                {value:'100х150 см'},
                {value:'100х180 см'},
            ],
            colors:[
                {
                    color:'',
                    arr:[
                        {src:bord_1_4},
                        {src:bord_1_5},
                        {src:bord_1_6},
                    ],
                },
            ],
            description:[
                'Поверхность из натуральной пробки',
                'Скрытое крепление в углах',
                'Рама S-line',
            ],
            amount:1,
        },

    ];
    const [indexOfMainPhoto, setIndexOfMainPhoto] = useState(0);

    const catalogOfProducts = ProductsWithLegsArr.map((item)=>{
        return <ProductWithLegs data={item} kindOfProduct={true} indexOfMainPhoto={indexOfMainPhoto}
                                setIndexOfMainPhoto={setIndexOfMainPhoto}/>
    });

    const catalogOfBord = BlackBord.map((item)=>{
        return <ProductWithLegs data={item} kindOfProduct={false} setStatus={setStatus}/>
    });

    const ShowProductWithLeg = () =>{
        return(
            <div className={CatalogStyle.container}>
                <Notice setStatus={setStatus} activeFirs={activeFirs}/>
                <div className={CatalogStyle.content}>
                    {catalogOfProducts}
                </div>
            </div>
        )
    }

    const ShowProductBord = () =>{
        return(
            <div className={CatalogStyle.container}>
                <Notice setStatus={setStatus} activeFirs={activeFirs}/>
                <div className={CatalogStyle.content_Bord}>
                    {catalogOfBord}
                </div>
            </div>
        )
    }

    if(activeFirs){
        return ShowProductWithLeg();
    }
    else {
        return ShowProductBord();
    }
}

export default CatalogOfProducts;
