import React, { useState } from 'react';
import SlideStyle from './Slide.module.css';

import MaskGroup from '../../photos/Image.jpg';
import MaskGroup_2 from '../../photos/Group56.jpg';
import RunVideo from '../../photos/Component.png';
import useInterval from "@restart/hooks/cjs/useInterval";
import mobile_photo from '../../photos/Group56.png';
import {useSelector} from "react-redux";

const Slide = () =>{

    const languageData = useSelector(state=>state.languageData);
    const [indexOfSlide, setIndex] = useState(0);

    const slideData = [
        {
            imgSrc: MaskGroup,
            text:languageData.slide.slide_one[languageData.indexOfLanguage]
        },
        {
            imgSrc: MaskGroup_2,
            text: languageData.slide.slide_two[languageData.indexOfLanguage]
        }
    ];

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
                    <p>{languageData.slide.title[languageData.indexOfLanguage]}</p>
                    <h1>{slideData[indexOfSlide].text}</h1>
                    <div className={SlideStyle.addInformation}>
                        <button> {languageData.slide.toOrder[languageData.indexOfLanguage]} </button>
                        <div className={SlideStyle.runVideo}>
                            <img  src={RunVideo} alt={'run'} onClick={()=>{window.open("https://www.youtube.com/watch?v=au3-3BJmLAg")}}/>
                            <p  onClick={()=>{window.open("https://www.youtube.com/watch?v=au3-3BJmLAg")}}>{languageData.slide.WatchVideo[languageData.indexOfLanguage]}</p>
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
                    <p>{languageData.slide.title[languageData.indexOfLanguage]}</p>
                    <h1>{languageData.slide.slide_two[languageData.indexOfLanguage]}</h1>
                    <div className={SlideStyle.addInformation}>
                        <button>{languageData.slide.toOrder[languageData.indexOfLanguage]}</button>
                        <div className={SlideStyle.runVideo}>
                            <img  src={RunVideo} alt={'run'}/>
                            <p>{languageData.slide.WatchVideo[languageData.indexOfLanguage]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slide;
