let GLOBAL_CONFIG = require('../config/config.js');

function piezasReducer(state = [], action){
  // Variables usadas en el switch-case
  // Action INICIAR_PUZZLE
  let i, shufflePieces, puzzle, piezasExtra, r, c;

  // Action INTERCAMBIAR_PIEZAS
  let piezas, ind1, ind2, imgFaceId1, imgFaceId2, imgReverseId1, imgReverseId2, numPuzzle1, numPuzzle2, posCol1, posCol2, img1, img2, imgRev1, imgRev2;
  let numPiezasExtra;

  switch (action.type){
  case 'RESTORE_STATE':
    return action.new_state.piezas;
  case 'INICIAR_PUZZLE':
    puzzle = [];
    shufflePieces = shuffle(GLOBAL_CONFIG.pieces);
    piezas = shufflePieces.slice(0, GLOBAL_CONFIG.M * GLOBAL_CONFIG.N);
    piezasExtra = shufflePieces.slice(GLOBAL_CONFIG.M * GLOBAL_CONFIG.N, GLOBAL_CONFIG.M * GLOBAL_CONFIG.N + GLOBAL_CONFIG.fake_pieces);

    r = 1;
    c = 1;
    for(let l in piezas){
      let pieza = piezas[l];
      if(c === GLOBAL_CONFIG.M + 1){
        r++;
        c = 1;
      }
      puzzle.push(
        {
          "row":r,
          "column":c,
          "faceImgId":pieza.face.id,
          "reverseImgId":pieza.reverse.id,
          "faceImgPath":pieza.face.path,
          "reverseImgPath":pieza.reverse.path,
        }
      );
      c++;
    }

    r = 1; c = 1;
    for(let p in piezasExtra){
      let pieza = piezasExtra[p];
      puzzle.push(
        {
          "row":"E" + c,
          "column":"E" + c,
          "faceImgId":pieza.face.id,
          "reverseImgId":pieza.reverse.id,
          "faceImgPath":pieza.face.path,
          "reverseImgPath":pieza.reverse.path,
        }
      );
      c++;
    }

    if(typeof puzzle[0].reverseImgPath === "string"){
      // Flip pieces randomly
      for(let x = 0; x < puzzle.length; x++){
        if(Math.random() > 0.5){
          let oldPiece = Object.assign({}, puzzle[x]);
          puzzle[x].faceImgPath = oldPiece.reverseImgPath;
          puzzle[x].faceImgId = oldPiece.reverseImgId;
          puzzle[x].reverseImgPath = oldPiece.faceImgPath;
          puzzle[x].reverseImgId = oldPiece.faceImgId;
        }
      }
    }

    return puzzle;

  case 'INTERCAMBIAR_PIEZAS':
    ind1 = -1;
    ind2 = -1;

    piezas = Object.assign([], state);

    for(i = 0; i < piezas.length; i ++){
      if(piezas[i].row === action.payload.row1 && piezas[i].column === action.payload.col1){
        ind1 = i;
      }
      if(piezas[i].row === action.payload.row2 && piezas[i].column === action.payload.col2){
        ind2 = i;
      }
    }

    img1 = piezas[ind1].faceImgPath;
    img2 = piezas[ind2].faceImgPath;

    imgRev1 = piezas[ind1].reverseImgPath;
    imgRev2 = piezas[ind2].reverseImgPath;

    imgFaceId1 = piezas[ind1].faceImgId;
    imgFaceId2 = piezas[ind2].faceImgId;

    imgReverseId1 = piezas[ind1].reverseImgId;
    imgReverseId2 = piezas[ind2].reverseImgId;

    piezas[ind1].faceImgPath = img2;
    piezas[ind2].faceImgPath = img1;

    piezas[ind1].reverseImgPath = imgRev2;
    piezas[ind2].reverseImgPath = imgRev1;

    piezas[ind1].faceImgId = imgFaceId2;
    piezas[ind2].faceImgId = imgFaceId1;

    piezas[ind1].reverseImgId = imgReverseId2;
    piezas[ind2].reverseImgId = imgReverseId1;

    return piezas;

  case 'DAR_VUELTA':
    piezas = Object.assign([], state);
    for(i = 0; i < piezas.length; i ++){
      if(piezas[i].row === action.payload.row && piezas[i].column === action.payload.col){
        let oldPiece = Object.assign({}, piezas[i]);
        piezas[i].faceImgPath = oldPiece.reverseImgPath;
        piezas[i].faceImgId = oldPiece.reverseImgId;
        piezas[i].reverseImgPath = oldPiece.faceImgPath;
        piezas[i].reverseImgId = oldPiece.faceImgId;
        return piezas;
      }

    }
    return piezas;

  case 'DAR_VUELTA_TODAS':
    piezas = Object.assign([], state);
    for(i = 0; i < piezas.length; i ++){
      let oldPiece = Object.assign({}, piezas[i]);
      piezas[i].faceImgPath = oldPiece.reverseImgPath;
      piezas[i].faceImgId = oldPiece.reverseImgId;
      piezas[i].reverseImgPath = oldPiece.faceImgPath;
      piezas[i].reverseImgId = oldPiece.faceImgId;
    }
    return piezas;

  default:
    return state;
  }

}

function shuffle(a){
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default piezasReducer;