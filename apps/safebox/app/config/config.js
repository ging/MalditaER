let ESCAPP_LOCALES = {
};

// AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE"

export let GLOBAL_CONFIG = {
  availableLocales:["es","en","it"],
  locale:undefined,
  defaultLocale:"en",
  localStorageKey:"SAFE_2022",
  passwordLength:4,
  message:"¡Has abierto la puerta! \n Pulsa 'Continuar' para entrar a la nueva sala.",
  url:"https://vishub.org/pictures/20203.png",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_SAFE_2022",
    restoreState:"AUTO",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[7],
    notifications:false,
    rtc:true,
    forceValidation:false,
  },
};

