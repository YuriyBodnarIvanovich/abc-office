import React, { useState } from 'react';
import ModalStyle from './ModalProduct.module.css';
import {useSelector} from "react-redux";

const ModalProduct = (props) =>{
    const [submit,setStatusSubmit] = useState(true);
    const [err,setError] = useState(true);
    const [name,changeName] = useState('');
    const [number,changeNumber] = useState('');

    const languageData = useSelector(state=>state.languageData);


    function exit(){
        props.setStatusOfModalProduct(false);
        setStatusSubmit(false);
    }

    function submitAction(){
        if(name === '' || number === ''){
            setError(false);
        }else {
            setStatusSubmit(false)
        }

    }

    function showSubmitField(){
        return(
            <div className={ModalStyle.container}>
                <div className={ModalStyle.container_OfContent}>
                    <div className={ModalStyle.exit}>
                        <img onClick={()=>{props.setStatusOfModalProduct(false)}}
                             src={"https://cdn.icon-icons.com/icons2/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png"}/>
                    </div>

                    <h2>{languageData.modalProduct.title[languageData.indexOfLanguage]}</h2>
                    {err ?
                       <div>
                           <div className={ModalStyle.container_OfInput}>
                               <input placeholder={languageData.modalProduct.name[languageData.indexOfLanguage]} value={name}
                                      onChange={(event)=>{changeName(event.target.value)}}/>

                           </div>
                           <div className={ModalStyle.container_OfInput}>
                               <input placeholder={languageData.modalProduct.number[languageData.indexOfLanguage]} value={number}
                                      onChange={(event)=>{changeNumber(event.target.value)}}/>
                           </div>
                       </div>
                        :
                        <div>
                            <div className={ModalStyle.container_OfInput}>
                                <input placeholder={languageData.modalProduct.name[languageData.indexOfLanguage]} value={name}
                                       onChange={(event)=>{changeName(event.target.value)}}/>
                                <text className={ModalStyle.error}>
                                    {languageData.modalProduct.err_name[languageData.indexOfLanguage]}
                                </text>

                            </div>
                            <div className={ModalStyle.container_OfInput}>
                                <input placeholder={languageData.modalProduct.number[languageData.indexOfLanguage]} value={number}
                                       onChange={(event)=>{changeNumber(event.target.value)}}/>
                                <text className={ModalStyle.error}>
                                    {languageData.modalProduct.err_number[languageData.indexOfLanguage]}
                                </text>
                            </div>
                        </div>
                    }
                    <button onClick={submitAction}>{languageData.modalProduct.submit[languageData.indexOfLanguage]}</button>
                </div>
            </div>
        )
    }

    function showSubmit(){
        return(
            <div className={ModalStyle.container}>
                <div className={ModalStyle.container_OfSubmit}>
                    <div className={ModalStyle.exitSubmit}>
                        <img onClick={exit}
                             src={"https://cdn.icon-icons.com/icons2/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png"}/>
                    </div>

                    <text className={ModalStyle.title}>
                        {languageData.showSubmit.title[languageData.indexOfLanguage]}
                    </text>
                    <text className={ModalStyle.mainText}>
                        {languageData.showSubmit.secondTitle[languageData.indexOfLanguage]}
                    </text>
                </div>
            </div>
        )
    }

    if(submit){
        return showSubmitField();
    }else {
        return showSubmit();
    }

}

export default ModalProduct;
