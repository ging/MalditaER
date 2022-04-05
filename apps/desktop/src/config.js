let ESCAPP_LOCALES = {
};

// AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE"

export let GLOBAL_CONFIG = {
  availableLocales:["es"],
  locale:"es",
  defaultLocale:"es",
  localStorageKey:"DESKTOP_2022",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_DESKTOP_2022",
    restoreState:"AUTO",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[6],
    notifications:false,
    rtc:true,
    forceValidation:true,
  },
};
