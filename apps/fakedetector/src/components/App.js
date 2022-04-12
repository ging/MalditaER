/* eslint-disable no-undef */

import { useState, useEffect } from "react";
import './../assets/scss/app.scss';
import {GLOBAL_CONFIG} from '../config/config.js';
import {NEWSes, NEWSit, NEWSen} from '../config/news.js';
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
    //LocalStorage.init(GLOBAL_CONFIG.localStorageKey);
    GLOBAL_CONFIG.escapp.onNewErStateCallback = er_state => restoreState(er_state);
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    reset(); //For development
    //pedir login del usuario:
    escapp.validate((success, er_state) => {
      if(success){
        restoreState(er_state);
      }
    });

    setLoading(false);
  }, []);

  const reset = () => {
    escapp.reset();
    localStorage.clear();
  }

  //restaurar estado del puzzle. Es solo si ha terminado o no.
  const restoreState = (er_state) => {
    if(er_state.puzzlesSolved.length > 0){
      let lastPuzzleSolved = Math.max.apply(null, er_state.puzzlesSolved);
      // lastPuzzleSolved = 3; //Force a puzzle (for development)
      if(lastPuzzleSolved >= GLOBAL_CONFIG.escapp.appPuzzleIds[0]){
        setShowModalStart(false);
        setPassed(true);
        setShowModalEnd(true);
      }
    }
  }

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
    //let hits = news.filter(n => n.answer === n.true_or_false).length;
    //if(hits >= GLOBAL_CONFIG.hitsToPass){
    let solution = "";
    news.map(n => {
      if(n.answer===true){
        solution += "1";
      } else if (n.answer===false){
        solution += "0";
      }
    });
    console.log("SOLUTION: " + solution);
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], solution, {}, function(success){
      if(success){
        setPassed(true);    
        setShowModalEnd(true);
      } else {
        setPassed(false);    
        setShowModalEnd(true);
      }      
    });
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
