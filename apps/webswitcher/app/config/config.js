export let GLOBAL_CONFIG = {
  availableLocales:["es", "en", "it"],
  locale:undefined,
  defaultLocale:"es",
  locales:{
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
      {name:"Video", url:"https://ging.github.io/MalditaER/video", switchOnPuzzle:0},
      {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/422.full?nowatermark=1", switchOnPuzzle:1},
      {name:"Ediphy MalditaER (II)", url:"https://vishub.org/ediphy_documents/421.full?nowatermark=1", switchOnPuzzle:2},
      {name:"Ediphy MalditaER (III)", url:"https://vishub.org/ediphy_documents/420.full?nowatermark=1", switchOnPuzzle:3},
      {name:"Ediphy MalditaER (IV)", url:"https://vishub.org/ediphy_documents/419.full?nowatermark=1", switchOnPuzzle:5},
      {name:"Ediphy MalditaER (Fin)", url:"https://vishub.org/ediphy_documents/416.full?nowatermark=1", switchOnPuzzle:8}
    ],
    en:[
      {name:"Video", url:"https://ging.github.io/MalditaER/video", switchOnPuzzle:0},
      {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/424.full?nowatermark=1", switchOnPuzzle:1},
      {name:"Ediphy MalditaER (II)", url:"https://vishub.org/ediphy_documents/424.full?nowatermark=1", switchOnPuzzle:2},
      {name:"Ediphy MalditaER (III)", url:"https://vishub.org/ediphy_documents/424.full?nowatermark=1", switchOnPuzzle:3},
      {name:"Ediphy MalditaER (IV)", url:"https://vishub.org/ediphy_documents/424.full?nowatermark=1", switchOnPuzzle:5},
      {name:"Ediphy MalditaER (Fin)", url:"https://vishub.org/ediphy_documents/423.full?nowatermark=1", switchOnPuzzle:8}
    ],
    it:[
      {name:"Video", url:"https://ging.github.io/MalditaER/video", switchOnPuzzle:0},
      {name:"Ediphy MalditaER (I)", url:"https://vishub.org/ediphy_documents/422.full?nowatermark=1", switchOnPuzzle:1},
      {name:"Ediphy MalditaER (II)", url:"https://vishub.org/ediphy_documents/421.full?nowatermark=1", switchOnPuzzle:2},
      {name:"Ediphy MalditaER (III)", url:"https://vishub.org/ediphy_documents/420.full?nowatermark=1", switchOnPuzzle:3},
      {name:"Ediphy MalditaER (IV)", url:"https://vishub.org/ediphy_documents/419.full?nowatermark=1", switchOnPuzzle:5},
      {name:"Ediphy MalditaER (Fin)", url:"https://vishub.org/ediphy_documents/416.full?nowatermark=1", switchOnPuzzle:8}
    ],
  },
  escapp:{
    //endpoint:"https://escaperoom.maldita.es/escapeRooms/1",
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