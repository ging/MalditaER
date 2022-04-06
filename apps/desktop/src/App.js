import React, {useState, useEffect, Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import './i18nextConf';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import './index.css';
import './short.css';

import {
  Background,
  BootScreen,
  LockScreen
} from './containers/background';
import Taskbar from './components/taskbar';
import ActMenu from './components/menu';
import {
  StartMenu,
  DesktopApp,
  SidePane,
  WidPane,
  CalnWid
} from './components/start';
import {loadSettings} from './actions';
import * as Applications from './containers/applications';
import * as Drafts from './containers/applications/draft.js';
import {GLOBAL_CONFIG} from './config.js';

function ErrorFallback({error, resetErrorBoundary}) {
  return (
      <div>
        <meta charSet="UTF-8" />
        <title>404 - Page</title>
	<script  src="https://win11.blueedge.me/script.js"></script>
        <link rel="stylesheet" href="https://win11.blueedge.me/style.css" />
        {/* partial:index.partial.html */}
        <div id="page">
          <div id="container">
            <h1>:(</h1>
            <h2>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for
              you.</h2>
            <h2>
              <span id="percentage">0</span>% complete</h2>
            <div id="details">
              <div id="qr">
                <div id="image">
                  <img src="https://win11.blueedge.me/img/qr.png" alt="QR Code" />
                </div>
              </div>
              <div id="stopcode">
                <h4>For more information about this issue and possible fixes, visit
                  <br /> <a href="https://github.com/blueedgetechno/win11React/issues">https://github.com/blueedgetechno/win11React/issues</a> </h4>
                <h5>If you call a support person, give them this info:
                  <br />Stop Code: {error.message}</h5>
				  <button onClick={resetErrorBoundary}>Try again</button>
              </div>
            </div>
          </div>
        </div>
        {/* partial */}
      </div>
    );
  }

let escapp;
function App() {
  const apps = useSelector(state => state.apps);
  const wall = useSelector(state => state.wallpaper);
  const dispatch = useDispatch();

  const afterMath = (event) => {
    var ess = [
      ["START", "STARTHID"],
      ["PANE", "PANEHIDE"],
      ["WIDG", "WIDGHIDE"],
      ["CALN", "CALNHIDE"],
      ["MENU", "MENUHIDE"]
    ];

    var actionType = "";
    try {
      actionType = event.target.dataset.action || "";
    } catch (err) {}

    var actionType0 = getComputedStyle(event.target).getPropertyValue('--prefix');

    ess.forEach((item, i) => {
      if (!actionType.startsWith(item[0]) && !actionType0.startsWith(item[0])) {
        dispatch({
          type: item[1]
        });
      }
    });
  }

  window.oncontextmenu = (e) => {
    if (e.target.className.match("enableContextMenu")){return;}
    afterMath(e);
    e.preventDefault();
    // dispatch({ type: 'GARBAGE'});
    var data = {
      top: e.clientY,
      left: e.clientX
    }

    if (e.target.dataset.menu != null) {
      data.menu = e.target.dataset.menu
      data.attr = e.target.attributes
      data.dataset = e.target.dataset
      dispatch({
        type: 'MENUSHOW',
        payload: data
      });
    }

  };

  window.onclick = afterMath

  window.onload = (e) => {
    dispatch({type: "WALLBOOTED"})
    GLOBAL_CONFIG.escapp.onNewErStateCallback = function(er_state){
      if (er_state && er_state.puzzlesSolved && er_state.puzzlesSolved.indexOf(GLOBAL_CONFIG.escapp.appPuzzleIds[0])!=-1){
        dispatch({type: "WALLUNLOCK"})
      } else {
        dispatch({type: "WALLALOCK"})
      }

      if (er_state && er_state.puzzlesSolved && er_state.puzzlesSolved.indexOf(GLOBAL_CONFIG.escapp.appPuzzleIds[1])!=-1){
        dispatch({type: "SHOW_NOTIFICATION"})
      } else {
        dispatch({type: "HIDE_NOTIFICATION"})
      }
    };
    GLOBAL_CONFIG.escapp.onErRestartCallback = function(er_state){
      localStorage.clear();
    };
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    escapp.validate(function(success, er_state){
      if(success){
        if (er_state && er_state.puzzlesSolved && er_state.puzzlesSolved.indexOf(GLOBAL_CONFIG.escapp.appPuzzleIds[0])!=-1){
          dispatch({type: "WALLUNLOCK"})
        } else {
          dispatch({type: "WALLALOCK"})
        }

        if (er_state && er_state.puzzlesSolved && er_state.puzzlesSolved.indexOf(GLOBAL_CONFIG.escapp.appPuzzleIds[1])!=-1){
          dispatch({type: "SHOW_NOTIFICATION"})
        } else {
          dispatch({type: "HIDE_NOTIFICATION"})
        }
      }
    });
  };

  const checkLogin = (password, callback) => {
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], password, {}, callback);
  }

  useEffect(()=>{
    if(!window.onstart){
      loadSettings()
      window.onstart = setTimeout(()=>{
        // console.log("prematurely loading ( ﾉ ﾟｰﾟ)ﾉ");
        dispatch({type: "WALLBOOTED"})
      },5000)
    }
  })

  return (
    <div className="App">  

      <ErrorBoundary FallbackComponent={ErrorFallback}>

      {!wall.booted?<BootScreen dir={wall.dir}/>:null}
      {wall.locked?<LockScreen dir={wall.dir} checkLogin={checkLogin}/>:null}
      <div className="appwrap">
        <Background/>
        <div className="desktop" data-menu="desk">
          <DesktopApp/>
          {Object.keys(Applications).map((key,idx)=>{
            var WinApp = Applications[key]
            return <WinApp key={idx}/>
          })}
          {Object.keys(apps).filter(x=> x!="hz")
            .map(key=> apps[key]).map((app,i)=>{
              if(app.pwa){
                var WinApp = Drafts[app.data.type]
                return <WinApp key={i} icon={app.icon} {...app.data}/>
              }
          })}
          <StartMenu/>
          <SidePane/>
          <WidPane/>
          <CalnWid/>
        </div>
        <Taskbar/>
        <ActMenu/>  
      </div>
     </ErrorBoundary>
    </div>
  );
}

export default App;
