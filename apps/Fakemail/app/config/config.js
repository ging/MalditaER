import profile from './profile';
import emails from './emails';
import chats from './chats';

// let ESCAPP_LOCALES = {
//   es:{
//     "i.auth_text":"Introduce las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
//     "i.auth_text_wrong_credentials":"Las credenciales aportadas no son correctas. Debes introducir las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
//   },
// };
let ESCAPP_LOCALES = {
};

export let GLOBAL_CONFIG = {
  profile:profile,
  emails:emails,
  chats:chats,
  hideLogo:true,
  localStorageKey:"FAKEMAIL_2022",
  restoreState:"REQUEST_USER", // AUTO, AUTO_NOTIFICATION, REQUEST_USER, NEVER
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_TEMPLATE_2022",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[3],
    notifications: "FALSE_IF_EMBED",
    rtc:true,
    forceValidation: true,
  },
};