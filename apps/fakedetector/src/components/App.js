import { useState, useEffect } from "react";
import './../assets/scss/app.scss';
import {GLOBAL_CONFIG} from '../config/config.js';
import {NEWS} from '../config/news.js';
import * as Utils from '../vendors/Utils.js';
import * as I18n from '../vendors/I18n.js';
import * as LocalStorage from '../vendors/Storage.js';

import ModalStart from "./ModalStart";
import MainScreen from './MainScreen.js';

let escapp;

export default function App() {
  let [showModal, setShowModal] = useState(true);
  let [news, setNews] = useState(NEWS);
  let [newsIndex, setNewsIndex] = useState(0);
  
  const left = () => {
    if(newsIndex > 0){
      setNewsIndex(newsIndex - 1);
    }
  }

  const right = () => {
    if(newsIndex < news.length - 1){
      setNewsIndex(newsIndex + 1);
    }
  }

  const discard = () => {
    let mynews = JSON.parse(JSON.stringify(news));
    mynews[newsIndex].answer = false;
    setNews(mynews);
  }

  const select = () => {
    let mynews = JSON.parse(JSON.stringify(news));
    mynews[newsIndex].answer = true;
    setNews(mynews);
  }

  const submit = () => {
  }

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  let selectedClassname = "";
  if(news[newsIndex].answer !== undefined && news[newsIndex].answer === true){
    selectedClassname = "selected";
  } else if(news[newsIndex].answer !== undefined && news[newsIndex].answer === false){
    selectedClassname = "discarded";
  }
  return <>
      <ModalStart showModal={showModal} closeModal={closeModal} />
      <div className="App">
        <div className='header'><h2>Noticias Europe Analytica</h2></div>
        <div className={'content ' + selectedClassname }>
            <img src={process.env.PUBLIC_URL + news[newsIndex].path} alt=""/>        
        </div>
        <div className='footer'>
          <button className="buttonleft" onClick={()=>left()}>
						LEFT
					</button>
          <button className="buttonno" onClick={()=>discard()}>
						NO
					</button>
          <button className="buttonyes" onClick={()=>select()}>
						SELECT
					</button>
          <button className="buttonright" onClick={()=>right()}>
						RIGHT
					</button>
          <button className="buttoninfo" onClick={()=>openModal()}>
						INFO
					</button>
          <button className="buttonsubmit" onClick={()=>submit()}>
						SUBMIT
					</button>
        </div> 
      </div>
    </>;
}
