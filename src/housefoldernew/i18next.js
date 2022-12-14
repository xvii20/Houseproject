import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,keyforarrayitemnumber1,keyforarrayitemnumber2,keyforarrayitemnumber3,formchange,keyforsent} from "./store"






i18next.use(initReactI18next).init({
  
  fallbackLng: "en",
resources:{
en:{
 translation:{
  hero: "We Help People Search for Amazing Affordable",
  hero2:"Houses to Buy",
  herobutton: "Search Now",
  Home:"Home",
  herobutton2: "Newsletter",
  About: "About",
  Contacts: "Contacts",
  subscribe:"Subscribe",
  switchlangen: "Switch Language to English",
  switchlangde: "Switch Language to German",
  switchlanges: "Switch Language to Spanish",

  // Error Page translation 
  page: "Page Does Not Exists",

// About Page Translations //
about2:"About",
aboutus: "About Us",
us: "Us",
aboutheading:"We are the Rhodorap Organization",
aboutheading2:"We help others find unique",
aboutheading3:"housing all over the world",

aboutusdesc:"We are the Rhodorap Organization a newly formed company where We help others find unique housing all over the world",

// Contact us Page //
welcome_message: "Welcome, {{name}}!",
contactus: "Contact Us",
fullname: "Full Name",
placeholder: "What do you want to contact us about?",
submitbutton: "Submit",
ourlocation: "Our Locations",
statement: "Our Headquarters are located in Iceland. We also have 3 branches located in New York USA. Feel free to contact us if you have any questions.",
tolocationsbutton:"Find Locations",
placeholdername:"Enter Full Name",
placeholderemail:"Enter Email Address",
namevalidation:"Please enter a name",
emailvalidation: "Please enter a valid email...",
comments:"",
formsubmittedmessage:"Your Contact request has been sent successfully",
formsubmittedmessageagain:"Your Contact request has again...been sent successfully. You have already sent {{valuemustchange}} contact requests",

// Products page translations //
location: "Location:",
bali:"Newly Renovated",
night: "Night",
good:"Rural Landscape",
nature:"Really nice area with lots of nature",
coast: "Coastal Area",
peaceful: "Peaceful area with lots of things to do",
modalheading: "Subscribe to us to receive up-to-date news on new houses from us!",
name2:"Name",
properties:"Properties",

// filters // 
choosefilter: "Choose Filters",
sortbycost:"Sort By Cost",
sortbycountry: "Sort By Country",
results:"Results",
placeholdercountry:"Location",
close:"Close",
tippydesc:"Descending Order",
tippyasc:"Ascending Order",
tippyasccost:"Price: Ascending Order",
tippydesccost:"Price: Descending Order",
choosefilter:"Choose Filters",

// Dropdown menu //

incolumbia:"In Columbia",
inrussia:"In Russia",
inspain:"In Spain",
inscottland:"In Scottland",
inaustralia:"In Australia",

// Carousel Page Translations //
toproducts: "To products",

 // various house pages array translations this is house 1//
 house1description: "This house is located in the countryside of the area of Medell??n. It is peaceful but it will take an hour long journey to get to the city center. However there are also many little shops and alleyways in the area to shop and explore!",
 housephone: "For more info and address please call 000-000-000",
 house1location: "Location: Medell??n, Columbia",
 randomdivfirstimgheading: "Interior",
 randomdivfirstimgdesc: "Kitchen",
 randomdivsecondimgdesc: "Interior Bathroom",
 backbtn:"Back",

 //  Location menu translation //


 // house 2 translation //
 ad:"This ad will be removed shortly due too much demand",
 bali:"Bali, Indonesia",

 // house 3 translation //
 house3locationfrontprofile: "Samara, Russia",
 house3location:"Location: Samara, Russia",
 house3desc: "this house is located in the suburbs of Samara in Russia. Near Yasnaya Polyana (?????????? ????????????) and with the added bonus of nature around you and peace and quiet",
diningroom:"Dining Room",
livingroom: "Living Room",

// house 4 translation //
house4locationfrontprofile: "Ibiza (Balearic Islands), Spain",
house4location:"Location: Ibiza (Balearic Islands), Spain",
house4desc:"This house is located in a very coastal area in the Balearic Islands of Spain specifically in Ibiza. Right behind the house is the Balearic Sea. And there you can see the sea, when looking through window of the living room.",
bedroom:"Bedroom",

// house 5 translation //
house5locationfrontprofile: "Edinburgh, Scottland",
house5location:"Location: Edinburgh, Scottland",
house5desc:"This house was made in the 18th century and is located in the outskirts of Edinburgh, Scottland. It has a nice garden in sight, and many trees and forests in the area. Perfect for people who like nature",
upperfloorbathroom:"Upper Floor Bathroom",

// house 6 translation //
house6locationfrontprofile: "Melbourne, Australia",
house6location:"Location: Melbourne, Australia",
house6desc:"This house is located in Melbourne, Australia. It is quite near the city center and also quite near to the Royal Botanic Gardens Victoria. In addition, the area is very peaceful and in a great location.",
nocomment:"No Comments",

/* house 7 translation Tula russa */
house7locationfrontprofile:"Tula, Russia",
house7location: "Location: Tula, Russia",

// house 8 location talinn estonia
house8locationfrontprofile: "Talinn, Estonia",
foyer:"Foyer",
house8location: "Location: Talinn, Estonia",

//house 9 location 
house9location: "Location: Miles City, MT, USA",

// house 10 (Salt lake city usa translations)
stairway: "Stairway",
house10location: "Location: Salt Lake City, USA",

// country translations
country:"Russia",
countryspain:"Spanien",
countryaustralia: "Australia",
countryscottland: "Scottland",
countryestonia: "Estonia",


}

 
},

de:{
  translation:{
    hero: "Hier Finden Sie erschwingliche luxuri??se",
    hero2: "H??user zu kaufen",
    herobutton2: "Newsletter",
    herobutton: "H??user",
    subscribe:"Abonnieren",
    switchlangen: "Auf Englisch umstellen",
    switchlangde: "Auf Deutsch umstellen",
    switchlanges: "Auf Spanisch umstellen",
// Navbar translations // 
Home:"Home",
About: "??ber uns",
Contacts: "Kontakte",
//  Homepage translations  //

    hello: "Hallo",
    about:" unsere shop hat verschiedene waren",


  // Error Page translation 
  page: "Diese Seite existiert nicht",


  // Filters //
  choosefilter: "W??hlen Sie einen Filter",
  sortbycost:"nach Kosten sortieren",
  sortbycountry: "nach L??nder sortieren",
  results:"Ergebnisse",
  placeholdercountry:"Standort",
  close:"Schlie??en",
  tippydesc:"Absteigende Reihenfolge",
tippyasc:"Aufsteigende Reihenfolge",
tippyasccost:"Preis: Aufsteigende Reihenfolge",
tippydesccost:"Preis: Absteigende Reihenfolge",
choosefilter:"W??hlen Sie einen Filter",


  // Dropdown menu Translations // 
incolumbia:"In Columbia",
inrussia:"In Russland",
inspain:"In Spanien",
inscottland:"In Schottland",
inaustralia:"In Australien",


    // About page Translations //
    about2:"??ber",
    aboutus:"??ber uns",
    us: "uns",
    aboutheading:"Wir sind die Rhodorap Organisation",
    aboutheading2:"Wir helfen anderen, einzigartige",
    aboutheading3:"H??user auf der ganzen Welt  zu finden",
    aboutusdesc: "Wir sind die Rhodorap Organization, ein neu gegr??ndetes Unternehmen, in dem wir anderen helfen, einzigartige Unterk??nfte auf der ganzen Welt zu finden",

    // Contact us page translations //
    contactus: "Haben Sie Fragen?",
fullname: "Name",
placeholder: "Was ist Ihre Anliegen?",
submitbutton: "Einreichen",
ourlocation: "Unsere Filliale",
statement: "Unser Hauptsitz befindet sich in Island. Wir haben auch 3 Niederlassungen in New York, USA. Bei Fragen stehen wir Ihnen gerne zur Verf??gung.",
tolocationsbutton:"Standorte",
placeholdername:"Gibt Ihre Name ein",
placeholderemail:"Email Addresse",
namevalidation:"Gibt ein Name ein",
emailvalidation: "emailyoo",
comments:"",
formsubmittedmessage:"Ihre Kontaktanfrage wurde erfolgreich versendet",
formsubmittedmessageagain:"Ihre Kontaktanfrage wurde erneut gesendet... Sie haben bereits {{valuemustchange}} Kontaktanfragen gesendet",

// Products page translations //
location: "Standort:",
bali:"Frisch renoviert",
noche: "Nacht",
good: "L??ndliche Landschaft",
nature: "Wirklich sch??ne Gegend mit viel Natur",
coast: "K??stengebiet",
peaceful:"Ruhige Gegend mit viel zu tun",
properties:"Immobillien",
// Modal translation //
modalheading: "Abonnieren Sie uns, um aktuelle Nachrichten ??ber neue H??user von uns zu erhalten!",
name2:"Name",


// carousel page translation //
toproducts: "Zur??ck",

 // various house pages array translations //
 house1description:"Dieses Haus befindet sich auf dem Land in der Gegend von Medell??n. Es ist friedlich, aber die Fahrt ins Stadtzentrum dauert eine Stunde. Es gibt aber auch viele kleine Gesch??fte und Gassen in der Umgebung zum Shoppen und Erkunden!",
housephone:"F??r weitere Informationen und Addresse rufen Sie bitte 000-000-000 an",
ad:"Diese Anzeige wird wegen zu gro??er Nachfrage in K??rze entfernt",
bali:"Bali, Indonesien",
house1location: "Ort: Medell??n, Kolumbien",
randomdivfirstimgheading: "Innenarchitektur",
randomdivfirstimgdesc: "K??che",
randomdivsecondimgdesc: "Inneres Badezimmer",
backbtn:"Zur??ck",

// house 3 translation // 
house3locationfrontprofile: "Samara, Russland",
house3location:"Standort: Samara, Russland",
house3desc: "Dieses Haus befindet sich in einem Vorort von Samara in Russland. In der N??he von Yasnaya Polyana (?????????? ????????????) und mit dem zus??tzlichen Bonus von Natur um Sie herum und Ruhe und Frieden",
diningroom:"Esszimmer",
livingroom: "Wohnzimmer",


// house 4 translation //
house4locationfrontprofile: "Ibiza, Spanien",
house4location:"Ort: Ibiza, Spanien",
house4desc:"Dieses Haus befindet sich in einer sehr k??stennahen Gegend auf den Balearen in Spanien, speziell auf Ibiza. Gleich hinter dem Haus ist das Balearenmeer. Und dort sieht man das Meer, wenn man durch das Fenster des Wohnzimmers schaut.",
bedroom:"Schlafzimmer",


// house 5 translation //
house5locationfrontprofile: "Edinburgh, Schottland",
house5location:"Ort: Edinburgh, Schottland",
house5desc:"Dieses Haus wurde im 18. Jahrhundert erbaut und befindet sich am Stadtrand von Edinburgh, Schottland. Es hat einen sch??nen Garten in Sichtweite und viele B??ume und W??lder in der Umgebung. Perfekt f??r Menschen, die die Natur m??gen.",
upperfloorbathroom:"Badezimmer im Obergeschoss",

// house 6 translation //
house6locationfrontprofile: "Melbourne, Australien",
house6location:"Ort: Melbourne, Australien",
house6desc:"Dieses Haus befindet sich in Melbourne, Australien. Es liegt ganz in der N??he des Stadtzentrums und auch ganz in der N??he der Royal Botanic Gardens Victoria. Dar??ber hinaus ist die Gegend sehr ruhig und in einer gro??artigen Lage.",
nocomment:"Keine Kommentare",

//House 7 translation Tula russia

house7locationfrontprofile:"Standort: Tula, Russland",
house7location: "Standort: Tula, Russia",

// house 8 location
house8locationfrontprofile: "Talinn, Estonia",
foyer:"Foyer",
house8location: "Standort: Talinn, Estonia",

//house 9 location 
house9location: "Standort: Miles City, MT, USA",

// house 10 (Salt lake city usa translations)
stairway: "Treppe",
house10location: "Standort: Salt Lake City, USA",

// Country translations
country:"Russland",
countryspain:"Spanien",
countryaustralia: "Australien",
countryscottland: "Schottland",
countryestonia: "Estland",



  }


},

es:{
  translation:{
    Home: "P??gina inicial ",
    subscribe: "Suscr??bete",

// Navbar translations // 
About: "Acerca de",
Contacts: "Contactos",
switchlangen: "Cambiar Idioma a Ingles",
switchlangde: "Cambiar Idioma a Alem??n",
switchlanges: "Cambiar Idioma a Espa??ol",

//  Homepage translations  //
    hero: "Encuentre Incre??bles Casas Asequibles",
    hero2: "Para Comprar Aqu??",
    herobutton2: "Boletin informativo",
    herobutton: "Buscar",
//  about page translations //
about2:"Sobre",
aboutus:"Sobre Nosotros",
us:"Nosotros",
aboutheading:"Somos la organizaci??n Rhodorap",
aboutheading2:"Ayudamos a otros",
aboutheading3:"A encontrar casas ??nicas en todo el mundo",
aboutusdesc: "Somos la Organizaci??n Rhodorap, una empresa reci??n formada, donde ayudamos a otros a encontrar viviendas ??nicas en todo el mundo",


// Contact us page Translations//
contactus: "Tienes Preguntas?",
fullname: "Nombre Completo",
placeholder: "??De qu?? quieres contactar con nosotros?",
submitbutton: "Enviar",
ourlocation: "Nuestras Ubicaciones",
statement: "Nuestra sede se encuentra en Islandia. Tambi??n contamos con 3 sucursales ubicadas en New York USA. No dude en ponerse en contacto con nosotros si tiene alguna pregunta.",
tolocationsbutton:"Ubicaciones",
placeholdername:"Ingresa un nombre",
placeholderemail:"Email",
formsubmittedmessage:"Tu solicitud de contacto ha sido enviada con ??xito",
formsubmittedmessageagain:"Tu solicitud de contacto ha sido nuevamente... enviada con ??xito. Ya has enviado {{valuemustchange}} solicitudes de contacto",


// Carousel Page Translation //

toproducts: "Volver",

// Filters  //

choosefilter: "Elige un filtro",
sortbycost:"Ordenar por costo",
sortbycountry: "Ordenar por Pais",
results:"Resultados",
placeholdercountry:"Ubicaci??n",
close:"Cerrar",
tippydesc:"Orden descendiente",
tippyasc:"Orden ascendente",
tippyasccost:"Precio: Orden ascendente",
tippydesccost:"Precio: Orden descendiente",
choosefilter:"Elige Filtro",

  // Dropdown menu Translations // 
  incolumbia:"En Columbia",
  inrussia:"En Rusia",
  inspain:"En Espa??a",
  inscottland:"En Escocia",
  inaustralia:"En Australia",

   // Error Page translation 
  page: "Esta pagina web no existe",


// Products page translations //
location: "Ubicacion:",
bali: "Recientemente renovado",
night: "noche",
good:"Paisaje rural",
nature:"Zona muy bonita con mucha naturaleza",
coast: "??rea costera",
peaceful:"Zona tranquila con muchas cosas",
properties:"Propiedades",


// Modal translation //
modalheading:"??Suscr??bete para recibir noticias actualizadas sobre nuestras casas nuevas!",
name2:"Nombre",


 // various house pages array translations //
 house1description: "Esta casa est?? ubicada en el campo de la zona de Medell??n. Es tranquilo pero tomar?? una hora de viaje para llegar al centro de la ciudad. Sin embargo, tambi??n hay muchas peque??as tiendas y callejones en la zona para comprar y explorar.",
 housephone:"Para obtener m??s informaci??n y direcci??n, llame al 000-000-000",
 ad:"Este anuncio ser?? eliminado en breve debido a demasiada demanda",
 bali:"Bali, Indonesia",
house1location: "Ubicaci??n: Medell??n, Colombia",
randomdivfirstimgheading: "Dise??o Interior",
randomdivfirstimgdesc: "Cocina",
randomdivsecondimgdesc: "Cuarto de Ba??o Interior",
backbtn:"Volver",

// house 3 translation // 
house3locationfrontprofile: "Samara, Rusia",
house3location:"Ubicaci??n: Samara Rusia",
house3desc: "Esta casa est?? ubicada en los suburbios de Samara en Rusia. Cerca de Yasnaya Polyana (?????????? ????????????) y con la ventaja a??adida de la naturaleza a tu alrededor y la paz y la tranquilidad.",
diningroom:"Comedor",
livingroom:"Sala de Estar",



// house 4 translation //
house4locationfrontprofile: "Ibiza (Islas Baleares), Espa??a",
house4location:"Ubicaci??n: Ibiza (Islas Baleares), Espa??a",
house4desc:"Esta casa se encuentra en una zona muy costera en las Islas Baleares de Espa??a concretamente en Ibiza. Justo detr??s de la casa est?? el Mar Balear. Y ah?? se puede ver el mar, al mirar por la ventana del sal??n.",
bedroom:"La Alcoba",

// house 5 translation //
house5locationfrontprofile: "Edimburgo, Escocia",
house5location:"Ubicaci??n: Edimburgo, Escocia",
house5desc:"Esta casa fue construida en el siglo XVIII y est?? ubicada en las afueras de Edimburgo, Escocia. Tiene un bonito jard??n a la vista, y muchos ??rboles y bosques en la zona. Perfecto para las personas que les gusta la naturaleza.",
upperfloorbathroom:"Ba??o de la Planta superior",


// house 6 translation //
house6locationfrontprofile: "Melbourne, Australia",
house6location:"Ubicaci??n: Melbourne, Australia",
house6desc:"Esta casa est?? ubicada en Melbourne, Australia. Est?? bastante cerca del centro de la ciudad y tambi??n bastante cerca del Royal Botanic Gardens Victoria. Adem??s, la zona es muy tranquila y en una excelente ubicaci??n.",
nocomment:"Sin comentarios",

// house 7 translations tula russia
house7locationfrontprofile: "Tula, Rusia",
house7location: "Ubicaci??n: Tula, Rusia",

//house 9 location 
house9location: "Ubicaci??n: Miles City, MT, USA",

// house 8 location talinn estonia
house8locationfrontprofile: "Talinn, Estonia",
foyer:"Vest??bulo",
house8location: "Ubicaci??n: Talinn, Estonia",

// house 10 (Salt lake city usa translations)
stairway: "Escalera",
house10location: "Ubicaci??n: Salt Lake City, USA",

// Country translations
country:"Rusia",
countryspain:"Espa??a",
countryaustralia: "Australia",
countryscottland: "Escocia",
countryestonia: "Estonia",


  }


},



},
lng: localStorage.getItem("lng") 

});




export default i18next;