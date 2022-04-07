let GLOBAL_CONFIG_DEVELOPMENT = {
  title:"Puzzle",
  imageBackground:"./assets/images/background.jpg",
  opacityBackground:0.4, // opacidad de la imagen (por defecto sin opacidad)
  reverseMode:true,

  // Dimensiones del puzzle
  M:3, // numero de columnas del puzzle (requerido)
  N:3, // numero de filas del puzzle (requerido)
  fake_pieces:9,

  localStorageKey:"Digital_Puzzle_Maldita_ER",

  //I18n
  availableLocales:["es","en","it"],
  locale:undefined,
  defaultLocale:"es",
  locales:{
    es:{
      "i.instructions_title":"Instrucciones",
      "i.instructions_c1_title":"",
      "i.instructions_c1":"Coloca correctamente todos los trozos del pósit para reconstruirlo.",
      "i.instructions_c2_title":"",
      "i.instructions_c2":"Para intercambiar dos trozos de posición haz clic en uno y después en el otro.",
      "i.instructions_c3_title":"",
      "i.instructions_c3":"Cada trozo tiene dos caras: anverso y reverso. Para darle la vuelta a un trozo haz doble clic sobre él.",
    },
    en:{
      "i.instructions_title":"Instructions",
      "i.instructions_c1_title":"",
      "i.instructions_c1":"Correctly place all the pieces of the sticky note to rebuild it.",
      "i.instructions_c2_title":"",
      "i.instructions_c2":"To swap two position pieces click on one and then click on the other.",
      "i.instructions_c3_title":"",
      "i.instructions_c3":"Each piece has two sides: front and back. To flip a piece over, double-click on it.",
    },
    it:{
      "i.instructions_title":"Instrucciones",
      "i.instructions_c1_title":"",
      "i.instructions_c1":"Coloca correctamente todos los trozos del pósit para reconstruirlo.",
      "i.instructions_c2_title":"",
      "i.instructions_c2":"Para intercambiar dos trozos de posición haz clic en uno y después en el otro.",
      "i.instructions_c3_title":"",
      "i.instructions_c3":"Cada trozo tiene dos caras: anverso y reverso. Para darle la vuelta a un trozo haz doble clic sobre él.",
    },
  }
};

module.exports = GLOBAL_CONFIG_DEVELOPMENT;