let LOCALES = {
  es:{
    "i.auth_text":"Introduce las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
    "i.auth_text_wrong_credentials":"Las credenciales aportadas no son correctas. Debes introducir las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
  },
};

export let GLOBAL_CONFIG = {
  availableLocales:["es"],
  locale:"es",
  defaultLocale:"es",
  localStorageKey:"WEB_SWITCHER_2022",
  webs:[
    {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/401.full", switchOnPuzzle:0},
    {name:"Ediphy MalditaER (II)", url:"https://vishub.org/ediphy_documents/402.full", switchOnPuzzle:1},
  ],
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    restoreState:"AUTO",
    localStorageKey:"WEB_SWITCHER_2022",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      locale:"es",
      defaultLocale:"es",
      locales:LOCALES,
    },
    appPuzzleIds:[],
    notifications:false,
    rtc:true,
    forceValidation:true,
  },
};

// Autofill appPuzzleIds
for(let i = 0; i < GLOBAL_CONFIG.webs.length; i++){
  if((typeof GLOBAL_CONFIG.webs[i].switchOnPuzzle === "number") && (GLOBAL_CONFIG.webs[i].switchOnPuzzle > 0) && (typeof GLOBAL_CONFIG.webs[i].url === "string")){
    GLOBAL_CONFIG.escapp.appPuzzleIds.push(GLOBAL_CONFIG.webs[i].switchOnPuzzle);
  }
}