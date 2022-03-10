export let LOCALES = {
  es:{
    "i.box_email":"Email",
    "i.box_repository":"Repositorio de Archivos",
    "i.box_vaccine":"Generador de Vacunas",
    "i.box_session":"Cerrar Sesión",
    "i.box_about":"About",
    "i.box_csic":"CSIC",

    "i.header_main":"Pantalla principal",

    "i.button_ok":"Ok",
    "i.button_nok":"Cancel",
    "i.download":"Ver a pantalla completa",
    "i.error_title":"Error",

    "login_message_success":"Contraseña correcta. Accediendo al sistema...",
    "login_message_fail":"Contraseña incorrecta. Vuelve a intentarlo.",

    "i_info_text":"<b>Vaccine Generator</b> es una aplicación web desarrollada por el científico <i>Carlos Darwin</i>, adscrito al <b>Consejo Superior de Investigaciones Científicas (CSIC)</b>, cuyo objetivo es permitir la generación automatizada de vacunas para una gran variedad de virus. <br/><br/> El Consejo Superior de Investigaciones Científicas (CSIC) es una agencia estatal española adscrita al Ministerio de Ciencia e Innovación. Su objetivo fundamental es desarrollar y promover investigaciones en beneficio del progreso científico y tecnológico, para lo cual está abierta a la colaboración con entidades españolas y extranjeras. Según la clasificación SIR World Report 2012, <b>es la mayor institución pública dedicada a la investigación en España y la novena del mundo</b>. El CSIC tiene como misión el fomento, la coordinación, el desarrollo y la difusión de la investigación científica y tecnológica, de carácter multidisciplinar, con el fin de contribuir al avance del conocimiento y al desarrollo económico, social y cultural, así como a la formación de personal y al asesoramiento a entidades públicas y privadas en estas materias. <br/><br/> La generación de vacunas es un proceso complejo y costoso que requiere de la utilización de equipamiento altamente especializado. A fin de llevar a cabo este proceso, la aplicación <i>Vaccine Generator</i> permite controlar un sintetizador de #{ADN} a través de una interfaz web. Desde esta interfaz se pueden realizar todas las operaciones necesarias para producir una gran variedad de vacunas, incluyendo operaciones tales como extracción de ADN y ARN, generación de secuencias genéticas y conversión de material genético. Aunque la aplicación dispone de un manual de usuario que explica como utilizar el sintetizador de ADN, éste dispositivo solo debe ser utilizado por personal altamente cualificado. Por este motivo, <b>el acceso a la funcionalidad de generación de vacunas se encuentra restringido</b>.<br></br> El sistema <i>Vaccine Generator</i> ha sido desarrollado utilizando un modelo de proceso software tipo cascada. Diversos diagramas producidos en las <b>fases de requisitos y análisis</b> han sido almacenados en el <b>repositorio de archivos de la plataforma</b>. Por seguridad, el acceso a algunos de estos diagramas también se encuentra protegido.<br></br> Está utilizando la versión #{VERSION} de <i>Vaccine Generator</i>. <br/>Si experimenta cualquier problema con la aplicación o simplemente desea ponerse en contacto con los desarrolladores, puede enviar un correo a la siguiente dirección: <i>c.darwin@csic.es</i>.",

    "i_info_adn_title":"Ácido desoxirribonucleico (ADN)",
    "i_info_adn_text":"El ácido desoxirribonucleico, conocido también por las siglas ADN, es un ácido nucleico que contiene las instrucciones genéticas usadas en el desarrollo y funcionamiento de todos los organismos vivos​ y algunos virus; también es responsable de la transmisión hereditaria. La función principal de la molécula de ADN es el almacenamiento a largo plazo de información para construir otros componentes de las células, como las proteínas y las moléculas de ARN. Los segmentos de ADN que llevan esta información genética son llamados genes, pero las otras secuencias de ADN tienen propósitos estructurales o toman parte en la regulación del uso de esta información genética.",

    "i.repository_password_request_title":"Introduzca contraseña",
    "i.repository_password_request_text":"El directorio <i>'#{folder}'</i> está protegido con contraseña. <br/>Introduzca la contraseña para abrir el directorio.",
    "i.repository_password_error_title":"Error",
    "i.repository_password_error_text":"La contraseña introducida es incorrecta.",

    "i.vaccine_password_request_title":"Introduzca código de acceso",
    "i.vaccine_password_request_text":"El acceso a esta funcionalidad de la aplicación está restringido. <br/>Introduzca el código de acceso para continuar.",
    "i.vaccine_password_error_title":"Error",
    "i.vaccine_password_error_text":"El código de acceso introducido es incorrecto.",

    "i.vaccine_generator_text":"Bienvenido. Recuerde que el generador de vacunas se basa en el uso del <b>sintetizador de ADN modelo 3400</b> fabricado por la empresa <i>Applied Biosystems</i>.<br/>Si durante el proceso de generación de una vacuna tiene dudas sobre su funcionamiento, consulte el <a href='assets/files/DNASynthesizer_UserGuide.pdf' target='_blank'>manual de usuario</a> de este sintetizador.",
    "i.vaccine_generator_virus":"Seleccionar cepa",
    "i.vaccine_generator_element":"Seleccionar elemento",
    "i.vaccine_generator_action":"Seleccionar acción",
    "i.vaccine_generator_execute":"Ejecutar",
    "i.vaccine_generator_settings":"Configuración sintetizador",
    "i.vaccine_generator_reset":"Reiniciar proceso",
    "i.vaccine_generator_generate":"Generar vacuna",

    "i.vaccine_generator_state_A":"En espera de selección",
    "i.vaccine_generator_state_B":"Cepa seleccionada",
    "i.vaccine_generator_state_C":"#{element} disponible",
    "i.vaccine_generator_state_D":"Secuencia genética generada",
    "i.vaccine_generator_state_E":"#{element} cultivado",
    "i.vaccine_generator_state_F":"Vacuna generada",
    "i.vaccine_generator_state_G":"#{element} destruido",
    "i.vaccine_generator_state_H":"#{element} purificado",

    "i.vaccine_virus_error_title":"Cepa inválida",
    "i.vaccine_virus_error_text":"No existen muestras de ADN para la cepa seleccionada.",
    "i.vaccine_virus_search_title":"Buscando muestras",
    "i.vaccine_virus_search_text":"Espere mientras el sistema busca muestras de ADN para la cepa seleccionada.",
    "i.vaccine_error_novirus":"Debes seleccionar una cepa válida primero.",
    "i.vaccine_error_noActionOrElement":"Debes seleccionar un elemento y una acción.",
    "i.vaccine_process_error_text":"Ocurrió un error durante el proceso de generar la vacuna. El proceso debe ser reiniciado. Revise el manual de usuario.",
    "i.vaccine_solution_error_title":"Validación fallida",
    "i.vaccine_solution_error_text":"La vacuna generada no ha pasado las pruebas de validación. Parece que el proceso de generación no se ha ejecutado correctamente. Revise el manual de usuario y siga las instrucciones.",

    "i.vaccine_settings_title":"Panel de configuración del sintetizador de ADN",
    "i.vaccine_settings_text":"El sintetizador cuenta con 20 modos de operación diferentes. Configure el sintetizador para utilizar el modo de operación adecuado antes de generar el ADNc.",
    "i.vaccine_settings_operation_mode":"Modo de operación. Valor actual: #{value}.",
    "i.vaccine_msg_opmode":"Modo de operación = #{value}",

    "i.vaccine_element_DNA":"ADN",
    "i.vaccine_element_cDNA":"ADNc",
    "i.vaccine_element_gDNA":"ADNg",
    "i.vaccine_element_RNA":"ARN",
    "i.vaccine_element_GENEPRM":"Gen prM",
    "i.vaccine_element_GENEE":"Gen E",
    "i.vaccine_element_PLASMID":"Plásmido",
    "i.vaccine_element_PRIMER":"Primer",

    "i.vaccine_action_EXTRACT":"Extraer",
    "i.vaccine_action_GROW":"Cultivar",
    "i.vaccine_action_GENERATE":"Generar",
    "i.vaccine_action_ISOLATE":"Aislar",
    "i.vaccine_action_PURIFY":"Purificar",
    "i.vaccine_action_GENETIC_SEQUENCE":"Generar secuencia genética",
    "i.vaccine_action_GENETIC_SEQUENCE_FROM":"Generar secuencia genética a partir del #{value}",
    "i.vaccine_action_convertTo":"Convertir a #{element}",
    "i.vaccine_action_convertXToY":"Convertir #{X} a #{Y}",
    "i.vaccine_action_DESTROY":"Destruir",
  },
};