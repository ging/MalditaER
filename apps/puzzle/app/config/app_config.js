let GLOBAL_CONFIG_DEVELOPMENT = {

  // Nombre de la prueba
  title:"Puzzle",
  // Imagen de fondo
  imageBackground:"./assets/images/background.jpg",
  opacityBackground:0.4, // opacidad de la imagen (por defecto sin opacidad)

  //I18n
  availableLocales:["es"],
  locale:"es",
  defaultLocale:"es",
  localStorageKey:"Digital_Puzzle_Maldita_ER",

  // Sonidos (por defecto, no hay música)
  volume:0, // Volumen de 0 a 1 (defecto 1)

  // Dimensiones del puzzle
  M:3, // numero de columnas del puzzle (requerido)
  N:3, // numero de filas del puzzle (requerido)
  fake_pieces:9,

  // Reverse mode (defecto -> false)
  reverseMode:true,
};

module.exports = GLOBAL_CONFIG_DEVELOPMENT;