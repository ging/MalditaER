// let ESCAPP_LOCALES = {
//   es:{
//     "i.auth_text":"Introduce las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
//     "i.auth_text_wrong_credentials":"Las credenciales aportadas no son correctas. Debes introducir las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
//   },
// };
let ESCAPP_LOCALES = {
};

// For a new template: change localStorageKey, escapp[localStorageKey] and escapp[appPuzzleIds]

export let GLOBAL_CONFIG = {
  availableLocales:["es", "en", "it"],
  locale:undefined,
  defaultLocale:"es",
  locales:{
  },
  localStorageKey:"VIDEO_2022",
  escapp:{
    // endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_TEMPLATE_2022",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[1],
    notifications:false,
    rtc:true,
    forceValidation:false,
  },
};