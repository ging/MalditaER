let ESCAPP_LOCALES = {
};

export let GLOBAL_CONFIG = {
  availableLocales:["es"],
  locale:"es",
  defaultLocale:"es",
  localStorageKey:"WEB_SWITCHER_2022",
  webs:[
    {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/401.full", switchOnPuzzle:0},
    {name:"Ediphy MalditaER (II)", url:"https://vishub.org/ediphy_documents/402.full", switchOnPuzzle:1},
    {name:"Ediphy MalditaER (III)", url:"https://vishub.org/ediphy_documents/403.full", switchOnPuzzle:3}
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