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
  webs:{
    es:[
      {name:"Ediphy MalditaER (I)", url:"https://ging.github.io/MalditaER/video", switchOnPuzzle:0},
      {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/401.full?nowatermark=1", switchOnPuzzle:1},
      {name:"Ediphy MalditaER (Full)", url:"https://vishub.org/ediphy_documents/402.full?nowatermark=1", switchOnPuzzle:2},
    ],
    en:[
      {name:"Ediphy MalditaER (I)", url:"https://ging.github.io/MalditaER/video", switchOnPuzzle:0},
      {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/401.full?nowatermark=1", switchOnPuzzle:1},
      {name:"Ediphy MalditaER (Full)", url:"https://vishub.org/ediphy_documents/402.full?nowatermark=1", switchOnPuzzle:2},
    ],
    it:[
      {name:"Ediphy MalditaER (I)", url:"https://ging.github.io/MalditaER/video", switchOnPuzzle:0},
      {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/401.full?nowatermark=1", switchOnPuzzle:1},
      {name:"Ediphy MalditaER (Full)", url:"https://vishub.org/ediphy_documents/402.full?nowatermark=1", switchOnPuzzle:2},
    ],
  },
  escapp:{
    //endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    restoreState:"AUTO",
    localStorageKey:"WEB_SWITCHER_2022",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      defaultLocale:"es",
      locales:{},
    },
    appPuzzleIds:[],
    notifications:false,
    rtc:true,
    forceValidation:true,
  },
};

// Autofill appPuzzleIds
let webs = GLOBAL_CONFIG.webs[Object.keys(GLOBAL_CONFIG.webs)[0]];
for(let i = 0; i < webs.length; i++){
  if((typeof webs[i].switchOnPuzzle === "number") && (webs[i].switchOnPuzzle > 0) && (typeof webs[i].url === "string")){
    GLOBAL_CONFIG.escapp.appPuzzleIds.push(webs[i].switchOnPuzzle);
  }
}