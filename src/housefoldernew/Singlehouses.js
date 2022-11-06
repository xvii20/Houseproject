import {BrowserRouter, Navigate, Routes, Route, Link, Outlet, NavLink,useParams,useNavigate,useSearchParams,useLocation  } from "react-router-dom";
import {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,keyforarrayitemnumber1,
   keyforarrayitemnumber2,keyforarrayitemnumber3,formchange} from "./store";
   import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
   import {faHouse,faCircleInfo,faAddressBook, faArrowRight, faCheck, faArrowUp, faArrowDown,faArrowLeft, faCaretDown,faAngleRight,faAngleLeft,faArrowDown91,faArrowUp91} from "@fortawesome/free-solid-svg-icons"
   import { useTranslation, initReactI18next, I18nContext,Trans } from "react-i18next";
   import { useSelector } from "react-redux"
   import { useDispatch } from "react-redux";
   import i18next from "./i18next"
   import { t } from 'i18next';



/* for samara russia */ 
export function Singlehouseparams(){
    const dispatch = useDispatch()
    let  modalnavigate = useNavigate()

    let Newarrayobjects = [

      {
      id:"1",
      img:"https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      Locations:"Medellín, Columbia",
      Description: i18next.t("good"),
      Price:"20,000",
      /* Params */
      img2:"https://images.unsplash.com/photo-1581783458534-001a466b5487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80", 
      img3:"https://images.unsplash.com/photo-1600488999585-e4364713b90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  housedescriptions: i18next.t("house1description"),
  housephone: i18next.t("housephone"),
  houselocations: i18next.t("house1location"),
  randomdivimgheading: i18next.t("randomdivfirstimgheading"),
  randomdivimgdescs: i18next.t("randomdivfirstimgdesc"),
  randomdivsecondimgdescs: i18next.t("randomdivsecondimgdesc")
      },
   
   
          {id:"2",
              img:"https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
              Locations: i18next.t("house3locationfrontprofile"),
              Description:i18next.t("nature"), 
              Price:"70,000",
              img2:"https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              img3:"https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  
              housedescriptions: i18next.t("house3desc"),
              housephone: i18next.t("housephone"),
              houselocations: i18next.t("house3location"),
              randomdivimgheading: i18next.t("randomdivfirstimgheading"),
              randomdivimgdescs: i18next.t("diningroom"),
              randomdivsecondimgdescs: i18next.t("livingroom")
              },
   
   
              {id:"3",
                  img:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                  Locations:i18next.t("house4locationfrontprofile"),
                  Description: i18next.t("coast"),
                  Price:"100,000",
  
                  /* params */ 
                  img2:"https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80",
                  img3:"https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  
                  housedescriptions: i18next.t("house4desc"),
                  housephone: i18next.t("housephone"),
                  houselocations: i18next.t("house4location"),
                  randomdivimgheading: i18next.t("randomdivfirstimgheading"),
                  randomdivimgdescs: i18next.t("bedroom"),
                  randomdivsecondimgdescs: i18next.t("livingroom")
                
                 },
   
                     // end for line 1   start second line with a these objects
   
                     /* Edinburg */ 
                  {id:"4",
                      img:"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                      Locations:i18next.t("house5locationfrontprofile"),
                      Description:i18next.t("peaceful"),  
                      Price:"50,000",
                      img2:"https://images.unsplash.com/photo-1567002260451-50e05a6b031a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG9sZCUyMGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
                      img3:"https://images.unsplash.com/photo-1506730447-7683abca8434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                      houselocations: i18next.t("houselocation"),
  
                      housedescriptions: i18next.t("house5desc"),
                      housephone: i18next.t("housephone"),
                      houselocations: i18next.t("house5location"),
                      randomdivimgheading: i18next.t("randomdivfirstimgheading"),
                      randomdivimgdescs: i18next.t("upperfloorbathroom"),
                      randomdivsecondimgdescs: i18next.t("livingroom")
  
  
                      },
   // Australia
                      {id:"5",
                          img:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                          Locations:i18next.t("house6locationfrontprofile"),
                          Description: i18next.t("nocomment"),
                          Price:"70,000",
                          img2:"https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
                          img3:"https://images.unsplash.com/photo-1587316205943-b15dc52a12e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  
                          housedescriptions: i18next.t("house6desc"),
                          housephone: i18next.t("housephone"),
                          houselocations: i18next.t("house6location"),
                          randomdivimgheading: i18next.t("randomdivfirstimgheading"),
                          randomdivimgdescs: i18next.t("diningroom"),
                          randomdivsecondimgdescs: i18next.t("livingroom")
      
  
                          },  
                          {id:"6",
                          img:"https://images.unsplash.com/photo-1625517236224-4eba7b2e47b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                          Locations: i18next.t("house7locationfrontprofile"),
                          houselocations: i18next.t("house7location"),  // Tula russia is house 7
                          img2:"https://images.unsplash.com/photo-1556594472-e9b933db923c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                          img3:"https://images.unsplash.com/photo-1523920020520-bc3e5db128b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                          Description: i18next.t("nocomment"),
                          Price:"60,000",
                          Country: i18next.t("country"),
                    // fill these 2 out these are the description of house
                          randomdivimgdescs: i18next.t("randomdivfirstimgdesc"),
                          randomdivsecondimgdescs: i18next.t("bedroom"),
  
                         },
  
                         {id:"7",
                         img:"https://images.unsplash.com/photo-1642554861866-c79e4a97f95a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80",
                         Locations: i18next.t("house7locationfrontprofile"),
                         houselocations: i18next.t("house7location"),  // Tula russia is house 7 
                         img2:"https://images.unsplash.com/photo-1600210491741-a69593e43133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                         img3:"https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                         Description: i18next.t("nocomment"),
                         Price:"80,000",
                         Country: i18next.t("country"),

                            // fill these 2 out these are the description of house
                            randomdivimgdescs: i18next.t("bedroom"),
                            randomdivsecondimgdescs: i18next.t("livingroom"),
  
                        
                         },
                         {id:"8",
                         img:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80",
                         Locations: i18next.t("house8locationfrontprofile"),
                         img2:"https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                         img3:"https://images.unsplash.com/photo-1595514535415-dae8580c416c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                         houselocations: i18next.t("house8location"),
                         Description: i18next.t("nocomment"),
                         Price:"50,000",
                         Country: i18next.t("countryestonia"),

                            // fill these 2 out these are the description of house
                            randomdivimgdescs: i18next.t("foyer"),
                            randomdivsecondimgdescs: i18next.t("randomdivsecondimgdesc"),
  
  
                         },
                         {id:"9",
                         img:"https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                         Locations: "Miles City, MT, USA",
                         houselocations: i18next.t("house9location"),
                         img2:"https://images.unsplash.com/photo-1609347744403-2306e8a9ae27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                         img3:"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                         Description: i18next.t("nocomment"),
                         Price:"120,000",
                         Country:"USA",
  
                            // fill these 2 out these are the description of house
                            randomdivimgdescs: i18next.t("randomdivfirstimgdesc"),
                            randomdivsecondimgdescs: "randomdivsecondimgdesc",
  
                         },
                         {id:"10",
                         img:"https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                         Locations: "Salt Lake City, Utah, USA",
                   
                         houselocations: i18next.t("house10location"),
                         Description: i18next.t("nocomment"),
                         img2:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                         img3:"https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                         Price:"40,000",
                         Country:"USA",
                            // fill these 2 out these are the description of house
                            randomdivimgdescs: "livingroom",
                            randomdivsecondimgdescs: "stairway",
  
                         },
                         
                         {id:"11",
                         img:"https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                         Locations: "Medellín, Columbia",
                         houselocations: i18next.t("house1location"),
                         img2:"https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                         img3:"https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                         Description: i18next.t("nocomment"),
                         Price:"200,000",
                         Country: "Columbia",

                            // fill these 2 out these are the description of house
                            randomdivimgdescs: i18next.t("livingroom"),
                            randomdivsecondimgdescs: i18next.t("bedroom"),
  
                         }


   
   
   ]
   
    let {productid} = useParams()
 
    let getproperties = Newarrayobjects.find(function(element) { return element.id === productid});
    

    const { t, i18n } = useTranslation();
   
    let handlechangelng = function(lng){
 
        i18n.changeLanguage(lng)
        
        localStorage.setItem("lng",lng)
        }
 
        
 
 function navigatetocarouselpageandsetarraytonumber2(){
    dispatch(keyforarrayitemnumber2())
    modalnavigate(`/products/c/${getproperties.id}`)}
    
    function navigatetocarouselpageandsetarraytonumber1(){
       dispatch(keyforarrayitemnumber1())
       modalnavigate(`/products/c/${getproperties.id}`)}
 
       function navigatetocarouselpageandsetarraytonumber3(){
          dispatch(keyforarrayitemnumber3())
          modalnavigate(`/products/c/${getproperties.id}`)}
  
 
 
    return (
    <>
    <div className="mainparentcontainer">
    <div className="medialanguagediv"> <span className="languagesettingesx2" onClick={()=> handlechangelng("es")}>ES</span><span className="dividerx2">|</span><span className="languagesettingdex" onClick={()=> handlechangelng("de")}> DE </span> <span className="dividerx">|</span><span className="languagesettingenx" onClick={()=> handlechangelng("en")}>EN </span></div>
       <button onClick={function(){window.scrollTo(0,0)}} className="scrolltotop"> <FontAwesomeIcon icon={faArrowUp} /> </button>
       <button onClick={function(){window.scrollTo(0,5000)}} className="scrolltobottom"> <FontAwesomeIcon icon={faArrowDown} /></button>
     
       <span className="backbtnspan">
    <Link to="/products" className="backbtn"> <span className="backbtn">   <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbuttonforpage"/>  <span className="backbtnword">{t("backbtn")}</span> </span> </Link></span>
       <div className="firstproductdiv"> 
       
       </div>
    <div className="productwrapper">
    <img src={`${getproperties.img}`} alt="image could not load" className="productimg" onClick={navigatetocarouselpageandsetarraytonumber1} />
    
    <div className="lowerproductpagetext"> 
    <p className="oneline" > {getproperties.houselocations} {/*{t("house3location")} */}  </p>
   <p className="oneline2"> {/* {t("house3desc")} */} {getproperties.housedescriptions} </p> 
 
    <p className="firstproductdivpara"> {t("housephone")}</p>
    </div>
    </div>
 
    <div className="randomdiv">
 <h4> {t("randomdivfirstimgheading")} </h4>
 <hr></hr>
 <fieldset className="fieldset"> <Trans>{t(getproperties.randomdivimgdescs)} </Trans>  </fieldset>
          <img src={`${getproperties.img2}`}   className="smallimg" onClick={navigatetocarouselpageandsetarraytonumber2}     />
 <hr/>
 <fieldset> <Trans>{t(getproperties.randomdivsecondimgdescs)} </Trans> </fieldset>
 <img className="smallimg2" src={`${getproperties.img3}`}  onClick={navigatetocarouselpageandsetarraytonumber3} />
        </div>
    </div>
 
 
 
    </>
    )
    }
 
 