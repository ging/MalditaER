let ESCAPP_LOCALES = {
};

export let GLOBAL_CONFIG = {
  availableLocales:["es","en","it"],
  locale:undefined,
  defaultLocale:"es",
  locales: {
    es:{
      "i.help":"Pedir pista",
    },
    en:{
      "i.help":"Request hint",
    },
    it:{
      "i.help":"Pedir pista",
    },
  },
  localStorageKey:"WEB_SWITCHER_2022",
  webs:[
    {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/401.full?nowatermark=1", switchOnPuzzle:0},
    {name:"Ediphy MalditaER (Full)", url:"https://vishub.org/ediphy_documents/402.full?nowatermark=1", switchOnPuzzle:1},
  ],
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    restoreState:"AUTO",
    localStorageKey:"WEB_SWITCHER_2022",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:ESCAPP_LOCALES,
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