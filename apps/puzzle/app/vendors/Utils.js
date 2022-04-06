export function deepMerge(h1,h2){
  if((typeof h1 === "object")&&(typeof h2 === "object")&&(!(h1 instanceof Array))){
    let keys = Object.keys(Object.assign({},h1,h2));
    let keysL = keys.length;
    for(let i=0; i<keysL; i++){
      h1[keys[i]] = deepMerge(h1[keys[i]],h2[keys[i]]);
    }
    return h1;
  } else {
    if(typeof h2 !== "undefined"){
      return h2;
    } else {
      return h1;
    }
  }
};

export function shuffleArray(array){
  return array.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
}