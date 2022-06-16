import React from 'react';
import * as LocalStorage from '../vendors/Storage.js';

import './../assets/scss/safeopen.scss';

export default class SafeOpenScreen extends React.Component {
  render(){
  console.log(this.props.I18n.getTrans("i.continue"))
    return (
      <div id="screen_safe_open_screen" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")} >
        <div className="containers">
          {this.props.show ? <DoorSound play={this.props.show}/> : null}
          <div className="boxStyle"><div>
            <p>{this.props.solvedAllPuzzles ? this.props.I18n.getTrans("success_msg") : this.props.I18n.getTrans("bad_msg")}&nbsp;
              {this.props.solvedAllPuzzles ? <button className="btn" onClick={this.props.solvePuzzle}>
                {this.props.I18n.getTrans("i.continue")}
              </button> : null}</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

class DoorSound extends React.Component {
  render(){
    return <audio id="audio_door" src="assets/sounds/door.mp3" autostart="false" preload="auto" />;
  }

  shouldComponentUpdate(nextProps){
    return nextProps.play !== this.props.play;
  }

  componentDidMount(){
    if(!LocalStorage.getSetting("played_door")){
      const audio = document.getElementById("audio_door");
      if(audio){
        try {
          audio.play();
        } catch (e){
          console.error(e);
        }
        LocalStorage.saveSetting("played_door", true);
      }
    }
  }
}