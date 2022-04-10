import { useState, useEffect } from "react";
import './../assets/scss/app.scss';
import {GLOBAL_CONFIG} from '../config/config.js';
import {NEWSes, NEWSit, NEWSen} from '../config/news.js';
import * as Utils from '../vendors/Utils.js';
import * as I18n from '../vendors/I18n.js';
import * as LocalStorage from '../vendors/Storage.js';

import ModalStart from "./ModalStart";
import ModalEnd from "./ModalEnd";
import MainScreen from './MainScreen.js';

let escapp;

export default function App() {
  let [loading, setLoading] = useState(true);
  let [showModalStart, setShowModalStart] = useState(true);
  let [showModalEnd, setShowModalEnd] = useState(false);
  let [news, setNews] = useState([]);
  let [newsIndex, setNewsIndex] = useState(0);
  let [passed, setPassed] = useState(false);
  
  useEffect(() => {
    I18n.init(GLOBAL_CONFIG);
    if(I18n.getLocale() === "en"){
      setNews(NEWSen);
    } else if(I18n.getLocale() === "it"){
      setNews(NEWSit);
    } else {
      setNews(NEWSes);
    }
    setLoading(false);
  }, []);

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

  const isfalse = () => {
    let mynews = JSON.parse(JSON.stringify(news));
    mynews[newsIndex].answer = false;
    setNews(mynews);
  }

  const istrue = () => {
    let mynews = JSON.parse(JSON.stringify(news));
    mynews[newsIndex].answer = true;
    setNews(mynews);
  }

  const submit = () => {
    let hits = news.filter(n => n.answer === n.true_or_false).length;
    if(hits >= GLOBAL_CONFIG.hitsToPass){
      setPassed(true);
    } else {
      setPassed(false);
    }
    setShowModalEnd(true);

  }

  const openModalStart = () => {
    setShowModalStart(true);
  }

  const closeModalStart = () => {
    setShowModalStart(false);
  }

  const closeModalEnd = () => {
    setShowModalEnd(false);
  }


  if(loading){
    return <div>LOADING</div> ;
  } else {
    return <>
      <ModalStart showModal={showModalStart} closeModal={closeModalStart} I18n={I18n}/>
      <ModalEnd showModal={showModalEnd} closeModal={closeModalEnd} I18n={I18n} passed={passed}/>
      <MainScreen news={news} newsIndex={newsIndex} openModalStart={openModalStart} left={left} right={right} isfalse={isfalse} istrue={istrue} submit={submit} I18n={I18n}/>
    </>;
  }
}
