import React, { useState } from 'react';
import SlideStyle from './Slide.module.css';

import MaskGroup from '../../photos/Image.jpg';
import MaskGroup_2 from '../../photos/Group56.jpg';
import RunVideo from '../../photos/Component.png';
import useInterval from "@restart/hooks/cjs/useInterval";
import mobile_photo from '../../photos/Group56.png';

const slideData = [
    {
        imgSrc: MaskGroup,
        text:'Особенные по многим\n' +
            'причинам'
    },
    {
        imgSrc: MaskGroup_2,
        text: 'Лучшее решение для демонстрации идей'
    }
];

const Slide = () =>{
    const [indexOfSlide, setIndex] = useState(0);

    const ButtonOfSlide = (props) =>{
        if(props.index === indexOfSlide){
            return(
                <div className={SlideStyle.activeSlide} onClick={()=>{setIndex(props.index)}}/>
            )
        }else {
            return(
                <div className={SlideStyle.passiveSlide} onClick={()=>{setIndex(props.index)}}/>
            )
        }

    }

    const buttonOfSlide = slideData.map((item,index)=>{
        return <ButtonOfSlide index={index}/>
    });

    function chengPhotoOfSlide(){

        if(indexOfSlide  < 1){
            setIndex(indexOfSlide + 1)
        }else{
            setIndex(0)
        }
    }

    useInterval(() => {
        chengPhotoOfSlide()
    }, 7000);

    return(
        <div>
            <div className={SlideStyle.container} style={{backgroundImage:`url(${slideData[indexOfSlide].imgSrc})`}}>
                <div className={SlideStyle.content}>
                    <p>Офисные доски и флипчарты АВС Office</p>
                    <h1>{slideData[indexOfSlide].text}</h1>
                    <div className={SlideStyle.addInformation}>
                        <button> Заказать </button>
                        <div className={SlideStyle.runVideo}>
                            <img  src={RunVideo} alt={'run'}/>
                            <p>Смотреть видео</p>
                        </div>
                    </div>
                </div>
                <div className={SlideStyle.containerOfButtonForSlides}>
                    <div className={SlideStyle.buttonsContainer}>
                        {buttonOfSlide}
                    </div>
                </div>
            </div>
            <div className={SlideStyle.container_modile} style={{backgroundImage:`url(${mobile_photo})`}}>

                <div className={SlideStyle.content}>
                    <p>Офисные доски и флипчарты АВС Office</p>
                    <h1>Лучшее решение для демонстрации идей</h1>

                    <div className={SlideStyle.addInformation}>
                        <button> Заказать </button>
                        <div className={SlideStyle.runVideo}>
                            <img  src={RunVideo} alt={'run'}/>
                            <p>Смотреть видео</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slide;
