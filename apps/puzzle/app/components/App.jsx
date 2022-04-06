import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
let GLOBAL_CONFIG = require('../config/config.js');
import * as I18n from '../vendors/I18n.js';
import * as Utils from '../vendors/Utils.js';
import * as LocalStorage from '../vendors/Storage.js';

import NavBar from "./navBar";
import Puzzle from './Puzzle';
import {
  loaded,
  iniciarPuzzle,
  seleccionarPieza,
  intercambiarPiezas,
  darVuelta,
  darVueltaTodas,
  comprobarCompletado,
  restoreState,
} from '../reducers/actions';
import InitialMessage from './InitialMessage';

let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.seleccionarPieza = this.seleccionarPieza.bind(this);
    this.darVuelta = this.darVuelta.bind(this);
    this.iniciarPuzzle = this.iniciarPuzzle.bind(this);
    this.mostrarInstrucciones = this.mostrarInstrucciones.bind(this);
    this.ocultarInstrucciones = this.ocultarInstrucciones.bind(this);

    this.state = {
      mostrarMsgInicial:false,
    };
  }

  componentDidMount(){
    I18n.init(GLOBAL_CONFIG);
    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);

    let stateToRestore = LocalStorage.getSetting("puzzle_state");
    if(typeof stateToRestore !== "undefined"){
      console.log("RESTORE HERE");
      console.log(stateToRestore);
      this.props.dispatch(restoreState(stateToRestore));
      this.props.dispatch(loaded(true));
    } else {
      this.iniciarPuzzle();
    }
  }

  saveState(){
    let currentState = this.props.store.getState();
    LocalStorage.saveSetting("puzzle_state", currentState);
  }

  render(){
    let appContent = "";

    if(this.props.loading === true){
      // Wait for loading
      return null;
    }

    appContent = (
      <React.Fragment>
        <Puzzle
          piezasSeleccionadas={this.props.piezasSeleccionadas}
          piezas={this.props.piezas}
          conf={GLOBAL_CONFIG}
          seleccionarPieza={this.seleccionarPieza}
          darVuelta = {this.darVuelta}
          dispatch={this.props.dispatch}
          lupa={this.state.lupa}
          zoomImage={this.zoomImage}
        />
      </React.Fragment>
    );

    let opacity = ((GLOBAL_CONFIG.opacityBackground === "") ? "0" : GLOBAL_CONFIG.opacityBackground);
    let styleBackground = {
      "background":"linear-gradient(rgba(255,255,255," + opacity + "), rgba(255,255,255," + opacity + ")),url(" + GLOBAL_CONFIG.imageBackground + ")",
      "backgroundPosition":"center center",
      "backgroundRepeat":"no-repeat",
      "backgroundSize":"cover",
    };

    let instrucciones = "";
    if(this.state.mostrarMsgInicial){
      instrucciones = (<InitialMessage ocultarInstrucciones={this.ocultarInstrucciones}/>);
    }

    return (
      <React.Fragment>
        <div id="container" style={styleBackground}>
          <NavBar mostrarInstrucciones={this.mostrarInstrucciones}
            dispatch = {this.props.dispatch}
            conf = {GLOBAL_CONFIG}
            toggle = {this.toggle}
            comprobarCompletado = {this.comprobarCompletado}
          />
          {appContent}
          {instrucciones}
        </div>
      </React.Fragment>
    );
  }

  // Carga el inicio del puzzle
  iniciarPuzzle(){
    let numPiezasExtra = GLOBAL_CONFIG.fake_pieces;
    let numPiezasNoExtra = GLOBAL_CONFIG.N * GLOBAL_CONFIG.M;
    if(numPiezasExtra > numPiezasNoExtra){
      alert("Por favor, seleccione un numero de piezas falsas inferior o igual al número de piezas del puzzle. En su defecto el puzzle tomará el máximo de piezas falsas.");
      GLOBAL_CONFIG.fake_pieces = numPiezasNoExtra;
    }
    this.props.dispatch(iniciarPuzzle());
  }

  darVuelta(row, col){
    this.props.dispatch(darVuelta(row, col));
  }

  seleccionarPieza(row, column){
    this.props.dispatch(seleccionarPieza(row, column));
    if(this.props.piezasSeleccionadas[0][0] !== -1 && this.props.piezasSeleccionadas[1][0] !== -1){
      this.props.dispatch(intercambiarPiezas(this.props.piezasSeleccionadas));
      this.saveState();
    }
  }

  toggle(){
    this.props.dispatch(darVueltaTodas());
  }

  mostrarMsgFinal(){
    this.setState({mostrarMsgFinal:true});
  }

  ocultarMsgFinal(){
    this.setState({mostrarMsgFinal:false});
  }

  comprobarCompletado(flag){
    if(flag === "gameover"){
      this.setState({timeFinished:true});
    }

    // Comprueba si se ha completado el puzzle
    let solution = "";
    for(let row = 1; row <= GLOBAL_CONFIG.N; row++){
      for(let col = 1; col <= GLOBAL_CONFIG.M; col++){
        for(let p in this.props.piezas){
          let pieza = this.props.piezas[p];
          if(pieza.row === row && pieza.column === col){
            solution = solution + pieza.faceImgId;
            break;
          }
        }
      }
    }
  }

  mostrarInstrucciones(){
    this.setState({mostrarMsgInicial:true});
  }

  ocultarInstrucciones(){
    this.setState({mostrarMsgInicial:false});
  }
}

function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps)(App);