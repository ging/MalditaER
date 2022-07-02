import {printDate} from '../assets/javascripts/Date.js';

let reBody = '<p>Le campagne di disinformazione da noi proposte si suddividono nei seguenti tre piani:</p> <ol> <li> <p>Piano basic:</p> </li> </ol> <p style="text-align: justify; margin-left: 40px;">Include la generazione di contenuti di disinformazione sul tema da voi proposto. I contenuti saranno distribuiti attraverso almeno 10 profili di social media con più di 10.000 follower.</p> <p style="text-align: justify; margin-left: 40px;">Costo: <strong>100.000&euro;</strong> per campagna</p> <ol start="2"> <li> <p>Piano Medium:</p> </li> </ol> <p style="margin-left: 40px;">Include la generazione di contenuti di disinformazione sul tema da voi proposto e la creazione mediante fotoritocco di 15 fotografie false correlate. I materiali saranno distribuiti attraverso almeno 20 profili di social media con più di 100.000 follower.</p> <p style="margin-left: 40px;">Costo: <strong>200.000&euro;</strong> per campagna</p> <ol start="3"> <li> <p>Piano premium:</p> </li> </ol> <p style="margin-left: 40px;">Include la generazione di contenuti di disinformazione sul tema da voi proposto, la creazione mediante fotoritocco di 30 fotografie false correlate e la creazione di 2 deep fake in video. I contenuti saranno distribuiti attraverso almeno 25 profili sui social network con più di 200.000 follower, e pubblicità a pagamento sui social network per una maggiore viralizzazione.</p> <p style="margin-left: 40px;">Coste: <strong>1.000.000&euro;</strong> per campagna</p> <p>Grazie per l’interesse nei confronti dei nostri servizi</p> <p>David Guzli</p>';

let re = "<div><div class=\"_3BmoemBQrW75KEdNQC41p4\" style=\"margin:40px;\">Messaggio originale <br/><div class=\"_1Q-fvRCccBUEINLSjMA_Z0\"></div><div class=\"_5jiwfFFFxaJYoBxxPvuJ\"><div><div class=\"zFv7kKAowni_2Yi-6MTFK YFtQ2HcVd7qxiOXuKcekC allowTextSelection\"><div><div><div lang=\"es\" link=\"#0563C1\" vlink=\"#954F72\"><div><div><div style=\"padding:3pt 0 0 0;border-style:solid none none none;border-top-width:1pt;border-top-color:#E1E1E1;\"><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><b>Da:</b> David Guzli &lt;d.guzli@europeanalytica.tk&gt; <br><b>Inviato:</b> ".concat(printDate(-18, 'dddd DD MMMM YYYY h:mm'), "<br><b>A:</b> Ed Luke &lt;ed.luke@techfactory.tk&gt; <br><b>Oggetto:</b> Opportunità di assunzione Europa Analytica</p></div></div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\">&nbsp;</p>\n") + reBody + "</div></div></div></div></div><div class=\"_2z5xkAz1EmiyFQkr_2BTmv\"></div></div><div class=\"_2R_t4-TN4UznfuRfuAfcQz\"></div></div></div></div>";


let emails = [
  {
    from:"p.jhonson@europeanalytica.tk",
    picture:"assets/images/email1.png",
    name:"Pilar Jhonson",
    issue:"Principali narrazioni del discorso d'odio",
    description:"En la última reunión que tuvimos para el proyecto de promover el discurso del odio...",
    content:"Buongiorno:\n    <br/>nell'ultima  riunione che abbiamo avuto per il progetto di promozione del discorso di odio contro gli immigrati che ci è stato affidato, mi è stato dato il compito di individuare le narrazioni che possiamo utilizzare e vedere quali sono le più potenti. Di seguito trovate le narrazioni che ho individuato; benché ce ne siano altre, ritengo che queste siano le più efficaci: \n    <br/>\n    <br/> <ol><li> Gli immigrati ci invadono in massa in assenza di controllo da parte dello Stato e con il sostegno dei governi dei Paesi di origine. </li><li>Lo Stato aiuta gli immigrati concedendo loro un trattamento favorevole sia dal punto di vista economico che da quello assistenziale. </li><li>La maggior parte degli immigrati non vuole integrarsi nella cultura e nella società  e spesso disprezza i nostri valori.</li><li>Gli immigrati hanno spesso un comportamento incivile e irrispettoso.</li><li>Gli immigrati sono spesso coinvolti in rapine, reati a sfondo sessuale e atti di violenza.</li><li>L'immagine di indigenza che molti immigrati trasmettono non è reale, vivono in condizioni molto migliori di quelle che cercano di mostrarci..</li></ol> \n    <br/>\n    <br/>Cordiali saluti\n    <br/>Pilar. <img src='assets/images/SimboloEstereotipo_IT.jpg' style='width: 100px;float:right;'>",
    date:printDate(),
    unread:true,
  },
  {
    from:"segu@europeanalytica.tk",
    picture:"assets/images/email2.jpg",
    name:"Dipartimento di sicurezza di Europe Analytica ",
    issue:"IMPORTANTE: nuovo codice per l’accesso alla cassaforte",
    description:"Ciao David: come sai, era da tempo che volevamo migliorare la sicurezza",
    content:"Ciao David:\n    <br/> come sai, era da tempo che volevamo migliorare la sicurezza della cassaforte del tuo ufficio e finalmente abbiamo apportato i miglioramenti necessari. <br/>Il codice d’accesso è formato dalla sostituzione dei seguenti cinque simboli: <br/><br/> <img src='assets/images/Simbolos.jpg' style='float: left; width: 100px;'> \n   <br/><br/>\n  Penso che solo tu sappia come sostituirli perché conosci bene l’azienda.\n    <br/> Non appena leggerai quest’ e-mail e riuscirai ad aprire la cassaforte, modifica il codice di accesso e cancella questo messaggio.\n    <br/>\n    <br/> Saluti\n    <br/>  Responsabile del Dipartimento di sicurezza\n    <br/> Europe Analytica",
    date:printDate(),
    unread:true,
  }, {
    from:"tom@fakerfactory.tk",
    picture:"assets/images/email3.jpg",
    name:"Tom Boat",
    issue:"Pericolo per la nostra attività",
    description:"Spero che tu stia bene. Quest’e-mail è molto importante. Come sai,...",
    content:"Salve:\n    <br/> spero che tu stia bene. Quest’e-mail è molto importante. Come sai, le Nazioni Unite hanno pubblicato il rapporto “LA STRATEGIA E IL PIANO D’AZIONE DELLE NAZIONI UNITE PER COMBATTERE I DISCORSI DI ODIO”. \n    <br/> <a href='https://www.un.org/en/genocideprevention/documents/advising-and-mobilizing/Action_plan_on_hate_speech_EN.pdf' target='_blank'>https://www.un.org/en/genocideprevention/documents/advising-and-mobilizing/Action_plan_on_hate_speech_EN.pdf</a> \n    <br/>\n    <br/> Secondo i nostri esperti, l’impatto di questo rapporto, insieme alle campagne di alfabetizzazione mediatica e digitale, può rendere la nostra attività di diffusione dei discorsi d’odio e delle campagne di disinformazione meno influente che mai. \n    <br/>\n    <br/> Resto in attesa di tuoi commenti in merito. \n    <br/>\n    <br/>  Cordiali saluti, \n    <br/> Tom Boat - CEO di Fake Factory ",
    date:printDate(-4),
    unread:false,
  }, {
    from:"s.cruz@europeanalytica.tk",
    picture:"assets/images/email4.png",
    name:"Sandra Cruz",
    issue:"Nuovo profilo Twitter hackerato",
    description:"In qualità di coordinatrice del team social media, vorrei avvertirti ...",
    content:"Ciao David:\n    <br/> in qualità di coordinatrice del team social media, vorrei avvertirti che siamo riusciti a impersonare un noto media con 370.000 follower su Twitter. Abbiamo utilizzato la stessa immagine del profilo e un nome molto simile, sostituendo la “elle” minuscola con la “i” maiuscola.  \n    <br/>\n    <br/>Con questo profilo possiamo supportare il nostro servizio Basic o Medium, come preferisci.\n    <br/>\n    <br/>Saluti\n    <br/> Sandra",
    date:printDate(-8),
    unread:false,
  }, {
    from:"p.fowler@europeanalytica.tk",
    picture:"assets/images/email6.png",
    name:"Peter Fowler ",
    issue:"Logistica pronta per il nuovo sito web di disinformazione",
    description:"A breve lanceremo un nuovo sito web per rendere virale la disinformazione...",
    content:"Gentile David,\n    <br/> a breve lanceremo un nuovo sito web per rendere virale la disinformazione. Avrà l’aspetto di un giornale digitale, per renderlo credibile. Abbiamo già acquistato il dominio: linformatore.com.\n    <br/>\n    <br/> Le macchine sono già implementate nel cloud; non appena ci darete l’ok le accenderemo e inizieremo a trasmettere.     \n    <br/>Cordiali saluti\n    <br/>Peter",
    date:printDate(-11),
    unread:false,
  }, {
    from:"ed.luke@techfactory.tk",
    picture:"assets/images/email7.jpg",
    name:"Ed Luke Ancor",
    issue:"Accettazione del preventivo",
    description:"Perfetto. Scegliamo l’opzione 1, che è molto interessante...",
    content:"Perfetto. Scegliamo l’opzione 1, che è molto interessante e sufficiente per una piccola campagna come quella che vogliamo portare avanti per questo esperimento. In futuro, in prossimità delle elezioni, probabilmente vi richiederemo l’opzione 3 per rendere virale una campagna di disinformazione contro gli immigrati.\n    <br/>Molte grazie".concat(re, "\n    \n    "),
    date:printDate(-12),
    unread:false,
  },
];

export default emails;
