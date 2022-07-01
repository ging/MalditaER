import {printDate} from '../assets/javascripts/Date.js';

let reBody = '<p>The disinformation campaigns that we offer as a service to be contracted are the following:</p> <ol> <li> <p>Basic plan:</p> </li> </ol> <p style="text-align: justify; margin-left: 40px;">Includes the production of disinformation content on the subject proposed by you. Distributed through at least 10 social media profiles with more than 10K followers.</p> <p style="text-align: justify; margin-left: 40px;">Cost: <strong>100.000&euro;</strong> per campaign.</p> <ol start="2"> <li> <p>Medium Plan</p> </li> </ol> <p style="margin-left: 40px;">Includes the production of disinformation content on the topic proposed by you and the editing of 15 related fake photographs. Distributed through at least 20 social media profiles with more than 100K followers.</p> <p style="margin-left: 40px;">Cost: <strong>200.000&euro;</strong> per campaign.</p> <ol start="3"> <li> <p>Premium plan:</p> </li> </ol> <p style="margin-left: 40px;">Includes the production of disinformation content on the topic proposed by you, the editing of 30 related fake photographs and the creation of 2 deep fakes in video. Distributed through at least 25 social media profiles with more than 200K followers, and paid advertising on social networks for greater viralisation.</p> <p style="margin-left: 40px;">Cost: <strong>1.000.000&euro;</strong> per campaign.</p> <p>Thank you very much for your interest in our services</p> <p>David Guzli</p>';
//let reBody = "<div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">Hola,</span></p></div><div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">&nbsp;</span></p></div><div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">He a\xF1adido seguridad adicional para acceder a la carpeta del diagrama de clases del repositorio de ficheros de la aplicaci\xF3n de generaci\xF3n de vacunas. He dejado el c\xF3digo, \xA1recuerda que hay que seleccionar los elementos en el orden correcto!</span></p></div>\n<div><p>&nbsp;</p><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">Un saludo,</span></p>\n<p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><span style=\"color: black; font-size: 10pt; font-family: Verdana, sans-serif, serif, EmojiFont;\">Carlos</span></p></div>";
let re = "<div><div class=\"_3BmoemBQrW75KEdNQC41p4\" style=\"margin:40px;\">Original message <br/><div class=\"_1Q-fvRCccBUEINLSjMA_Z0\"></div><div class=\"_5jiwfFFFxaJYoBxxPvuJ\"><div><div class=\"zFv7kKAowni_2Yi-6MTFK YFtQ2HcVd7qxiOXuKcekC allowTextSelection\"><div><div><div lang=\"es\" link=\"#0563C1\" vlink=\"#954F72\"><div><div><div style=\"padding:3pt 0 0 0;border-style:solid none none none;border-top-width:1pt;border-top-color:#E1E1E1;\"><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\"><b>From:</b> David Guzli &lt;d.guzli@europeanalytica.tk&gt; <br><b>Sent at:</b> ".concat(printDate(-18, 'dddd DD [de] MMMM [de] YYYY h:mm'), "<br><b>For:</b> Ed Luke &lt;ed.luke@techfactory.tk&gt; <br><b>Subject:</b> Europe Analytica disinformation campaigns</p></div></div><p style=\"font-size:11pt;font-family:Calibri,sans-serif;margin:0;\">&nbsp;</p>\n") + reBody + "</div></div></div></div></div><div class=\"_2z5xkAz1EmiyFQkr_2BTmv\"></div></div><div class=\"_2R_t4-TN4UznfuRfuAfcQz\"></div></div></div></div>";


let emails = [
  {
    from:"p.jhonson@europeanalytica.tk",
    picture:"assets/images/email1.png",
    name:"Pilar Jhonson",
    issue:"Main narratives of hate speech",
    description:"In the last meeting we had for the project to promote hate speech...",
    content:"Hello:\n    <br/> In the last meeting we had for the project to promote hate speech against migrants that we have been hired to do, I was tasked with identifying the narratives that we can use and see which ones are the most powerful. These are the narratives I have identified. Although there are some others, I consider these to be the most effective:    \n    <br/>\n    <br/> <ol><li> Immigrants are invading us in massive numbers in the absence of state control and with the support of the governments of their countries of origin. </li><li> The state assists immigrants by giving them favourable treatment both financially and in terms of care. </li><li> Most immigrants do not wish to integrate into the culture and society, and often despise our values. </li><li>Immigrants often engage in uncivil and disrespectful behaviour. </li><li> Immigrants are often involved in muggings, sexual crimes and violent acts.</li><li>   The depiction of many immigrants as needy is not true, they live in much better conditions than they try to show us.</li></ol> \n    <br/>\n    <br/>Best regards, \n    <br/>Pilar. <img src='assets/images/SimboloEstereotipo_EN.jpg' style='width: 100px;float:right;'>",
    date:printDate(),
    unread:true,
  },
  {
    from:"segu@europeanalytica.tk",
    picture:"assets/images/email2.jpg",
    name:"Europe Analytica Security Department",
    issue:"IMPORTANT: New code for accessing the safe box",
    description:"Hello David: ",
    content:"Hello David:\n    <br/>As you know, we wanted to strengthen the security of the safe in your office some time ago and we have finally made the necessary improvement. \n    <br/> The code to access the safe is formed by replacing the following five symbols: <br/><br/> <img src='assets/images/Simbolos.jpg' style='float: left; width: 100px;'> \n   <br/><br/>\n I believe that only you will know how to replace them because you know the company well. As soon as you read this email and can open the safe box, change the access code and delete this email. \n    <br/>\n    <br/> Kind regards, \n    <br/> Head of the security department.\n    <br/>    Europe Analytica",
    date:printDate(),
    unread:true,
  }, {
    from:"tom@fakerfactory.tk",
    picture:"assets/images/email3.jpg",
    name:"Tom Boat",
    issue:"Danger for our business",
    description:"I hope you are well. This is a very important email.",
    content:"Hello:\n    <br/> I hope you are well. This is a very important email. As you know, The United Nations published the report 'THE UNITED NATIONS STRATEGY AND PLAN OF ACTION TO COMBAT HATE SPEECH'. \n    <br/> <a href='https://www.un.org/en/genocideprevention/documents/advising-and-mobilizing/Action_plan_on_hate_speech_ES.pdf' target='_blank'>https://www.un.org/en/genocideprevention/documents/advising-and-mobilizing/Action_plan_on_hate_speech_EN.pdf</a> \n    <br/>\n    <br/>According to our experts, the impact of this report together with media and digital literacy campaigns can make our business of spreading hate speech and our disinformation campaigns less influential than ever before.\n    <br/>\n    <br/> Tell me your impressions. \n    <br/>\n    <br/>Best regards, \n    <br/> Tom Boat - Fake Factory CEO.",
    date:printDate(-4),
    unread:false,
  }, {
    from:"s.cruz@europeanalytica.tk",
    picture:"assets/images/email4.png",
    name:"Sandra Cruz",
    issue:"New Twitter profile hacked",
    description:"As coordinator of the social media exploitation team, I would like to warn...",
    content:"Hello David:    \n    <br/> As coordinator of the social media exploitation team, I would like to warn you that we have managed to impersonate the Twitter identity of a well-known media outlet with 370,000 followers. We have used the same profile picture and a very similar name, changing a lowercase “l“ for a capital “i“.     \n    <br/>\n    <br/>With this profile we can support our basic or medium service as you prefer.    \n    <br/>\n    <br/>Best regards,\n    <br/> Sandra",
    date:printDate(-8),
    unread:false,
  }, {
    from:"p.fowler@europeanalytica.tk",
    picture:"assets/images/email6.png",
    name:"Peter Fowler ",
    issue:"Logistics is ready for new disinformation website",
    description:" We are going to launch a new website to viralise disinformation...",
    content:"Hi David:\n    <br/>  We are going to launch a new website to viralise disinformation. The website will look like a digital newspaper, to make it credible. We have already bought the domain: elinformador.com.    .\n    <br/>\n    <br/>The machines are already deployed in the cloud and as soon as you give us the all clear will turn them on and start the dissemination.\n    <br/>Best regards,\n    <br/>Peter",
    date:printDate(-11),
    unread:false,
  }, {
    from:"ed.luke@techfactory.tk",
    picture:"assets/images/email7.jpg",
    name:"Ed Luke Ancor",
    issue:"Budget acceptance",
    description:"It’s perfect. We will keep option 1, which is very interesting...",
    content:"It’s perfect. We will keep option 1, which is very interesting and enough for a small campaign as we want for this experiment. In the future, closer to the elections, we will probably hire option 3 for a disinformation campaign that we need to viralise against immigrants.\n    <br/>Thank you very much.".concat(re, "\n    \n    "),
    date:printDate(-12),
    unread:false,
  },
];

export default emails;
