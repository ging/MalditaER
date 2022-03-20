let ESCAPP_LOCALES = {
};

// AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE"

export let GLOBAL_CONFIG = {
  availableLocales:["es"],
  locale:"es",
  defaultLocale:"es",
  localStorageKey:"KEYPAD_OFFICE_2022",
  passwordLength:4,
  afterOpen:"SHOW_MESSAGE_AND_CONTINUE",
  message:"¡Has abierto la puerta! \n Pulsa 'Continuar' para entrar a la nueva sala.",
  url:"https://vishub.org/pictures/20203.png",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_KEYPAD_OFFICE_2022",
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