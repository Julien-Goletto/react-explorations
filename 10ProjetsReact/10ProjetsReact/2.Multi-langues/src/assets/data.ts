export interface Traductions {
  [code: string] : {
    title: string;
    txt: string;
  }
}
const traductions : Traductions = {
  "FR": {
    "title": "Bonjour et bienvenue sur le site.",
    "txt": "Découvrez nos fonctionnalités et nos services !",
  },
  "EN": {
    "title": "Hello and welcome to the site.",
    "txt": "Discover our features and services!",
  },
  "SP": {
    "title": "Hola y bienvenido al sitio.",
    "txt": "¡Descubra nuestras características y servicios!",
  },
};

export default traductions;
