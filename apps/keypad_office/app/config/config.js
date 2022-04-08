let ESCAPP_LOCALES = {
};

// AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE"

export let GLOBAL_CONFIG = {
  availableLocales:["es","en","it"],
  locale:undefined,
  defaultLocale:"es",
  locales: {
    es:{
      "i.message":"¡Has abierto la puerta! \n Pulsa 'Continuar' para entrar a la nueva sala.",
      "i.continue":"Continuar",
    },
    en:{
      "i.message":"You have opened the door! \n Click 'Continue' to enter the new room.",
      "i.continue":"Continue",
    },
    it:{
      "i.message":"¡Has abierto la puerta! \n Pulsa 'Continuar' para entrar a la nueva sala.",
      "i.continue":"Continui",
    },
  },
  localStorageKey:"KEYPAD_2022",
  passwordLength:4,
  afterOpen:"SHOW_MESSAGE_AND_CONTINUE",
  url:"https://vishub.org/pictures/20203.png",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_KEYPAD_2022",
    restoreState:"AUTO",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[3],
    notifications:false,
    rtc:true,
    forceValidation:true,
  },
};

if(GLOBAL_CONFIG.afterOpen === "SHOW_MESSAGE_AND_CONTINUE"){
  GLOBAL_CONFIG.escapp.restoreState = "NEVER";
}