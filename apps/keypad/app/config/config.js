let LOCALES = {
  es:{
    "i.auth_text":"Introduce las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
    "i.auth_text_wrong_credentials":"Las credenciales aportadas no son correctas. Debes introducir las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
  },
};

//AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE" 

export let GLOBAL_CONFIG = {
  availableLocales:["es"],
  locale:"es",
  defaultLocale:"es",
  localStorageKey:"STRONGBOX_2022",
  passwordLength: 4,
  afterOpen: "SHOW_MESSAGE_AND_CONTINUE",
  message: "¡Has abierto la puerta! \n Pulsa 'Continuar' para entrar a la nueva sala.",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_STRONGBOX_2022",
    restoreState:"AUTO",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      locale:"es",
      defaultLocale:"es",
      locales:LOCALES,
    },
    appPuzzleIds:[1],
    notifications:true,
    rtc:true,
    forceValidation: true,
  },
};

if (GLOBAL_CONFIG.afterOpen === "SHOW_MESSAGE_AND_CONTINUE"){
  //GLOBAL_CONFIG.escapp.restoreState = "NEVER";
}