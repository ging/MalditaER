export function loaded(is_loaded = true){
  return {
    type:'LOADED',
    loaded:is_loaded,
  };
}

export function iniciarPuzzle(){
  return {
    type:'INICIAR_PUZZLE',
  };
}

export function seleccionarPieza(row, col){
  return {
    type:'SELECCIONAR_PIEZA',
    payload:{
      row:row,
      col:col,
    },
  };
}

export function intercambiarPiezas(piezasSeleccionadas){
  return {
    type:'INTERCAMBIAR_PIEZAS',
    payload:{
      row1:piezasSeleccionadas[0][0],
      col1:piezasSeleccionadas[0][1],
      row2:piezasSeleccionadas[1][0],
      col2:piezasSeleccionadas[1][1],
    },
  };
}

export function darVuelta(row, col){
  return {
    type:'DAR_VUELTA',
    payload:{
      row:row,
      col:col,
    },
  };
}

export function darVueltaTodas(){
  return {
    type:'DAR_VUELTA_TODAS',

  };
}

export function comprobarCompletado(completado){
  return {
    type:'COMPROBAR_COMPLETADO',
    completado:completado,
  };
}

export function restoreState(new_state = {}){
  return {
    type:'RESTORE_STATE',
    new_state:new_state,
  };
}