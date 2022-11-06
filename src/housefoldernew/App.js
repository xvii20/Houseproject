
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import {BrowserRouter, Navigate, Routes, Route, Link, Outlet, NavLink,useParams,useNavigate,useSearchParams,useLocation  } from "react-router-dom";
import i18next from "./i18next"
import { Suspense } from "react";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse,faCircleInfo,faAddressBook, faArrowRight, faCheck, faArrowUp, faArrowDown,faArrowLeft, faCaretDown,faAngleRight,faAngleLeft,faArrowDown91,faArrowUp91,faBars,faX} from "@fortawesome/free-solid-svg-icons"
import { useTranslation, initReactI18next, I18nContext,Trans } from "react-i18next";
import './houseproj.css';
import "./about.css";
import React, {forwardRef} from 'react';


import { useState,useEffect, useRef } from "react"
import {Formy} from "./contacts.js"
import {Modalcarouselparam } from "./carousel.js"
import {Singlehouseparams} from "./Singlehouses"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,keyforarrayitemnumber1,
keyforarrayitemnumber2,keyforarrayitemnumber3,formchange} from "./store";
import { t } from 'i18next';

let Lazyabout = React.lazy(() => import ("./lazyloadingforaboutcomponent"));  

function App() {
   const dispatch = useDispatch()
   const loginset = useSelector((state) =>state.xo.value)

   const { t, i18n } = useTranslation();

   return  (

     <BrowserRouter>

   <Routes>

   <Route path="/" element={<Navbar />} >
   <Route path="about" element={<React.Suspense fallback="Loading..."> <Lazyabout /> </React.Suspense>} />
   <Route path="contacts" element={<Formy />} />
   <Route path="products" element={<Products />} />
   <Route path="products/:productid" element ={<Singlehouseparams/>} />
   <Route path="products/c/:productid" element ={<Modalcarouselparam />} />
   <Route path="locations" element ={<Location/>} />
   <Route path="location" element={<Location />} />
   <Route path="profile" element={<Profile />} />
 {/* <Route path="profile" element={<Profile/>} */}

  
{/* </Route> */}

    <Route path="*" element={ <Error/>} /> 
   <Route index element={ 
   <>
   <Hero />
   </>

   } />
   
   </Route>

   </Routes>
   </BrowserRouter>)
}


function Location (){
   
   let {productId} = useParams()
// productId is our namedUrlparam thats why i put productId



  /*  let routedproducts = Arrayobjects.find(function(element) { return element.id === productId});
   let {Locations, Price, id} = routedproducts;  */
 
return <div style={{textAlign:"center", marginTop:"200px"}}>

  <div className="practicediv">
    <LazyLoadImage
key={1}
effect="blur"

      src={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      />

    <LazyLoadImage
key={2}
effect="blur"
      height={500}
      width={333}
      src={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      />
   
   <LazyLoadImage
key={3}

      height={500}
      width={333}
      src={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      />
   
   
  </div>





   
  {/*  <p> this is element number {id}, {Locations} </p>  */}
    <h2 className="headingforlocation">  Hello! the location page is currently under construction...please come back some other time </h2>

</div>
}


function Error(){
   const [user, setUser] = useState()
   let navigate = useNavigate()
   const dispatch = useDispatch()
   const loginset = useSelector((state) =>state.xo.value)
   const { t, i18n } = useTranslation();

   function zx(){

      var mail = document.createElement("a");
      mail.href = "mailto:mail@example.org";
    

   }

return <div className="mainerrorpagediv">
   <div>
   <h1 className="nopage"> {t("page")} </h1>
   </div>
  {/*  <a href="mailto:name@gmail.com">Click here to mail</a>  */}


</div> 

}




function Profile(){
   const dispatch = useDispatch()
   const loginset = useSelector((state) =>state.xo.value)


   if ( /*loginset.login === false */ localStorage.getItem("user")){
      return <p> hello u are in the profile page</p> 

     }

else { return <Navigate to="/" /> }

}




   // Code for the Navbar  

function Navbar (){
   let [bodyscroll,setbodyscroll] = useState(true)
   let [toggle,settoggle] = useState(false)
   let navigate = useNavigate()
   const { t, i18n } = useTranslation();

let handlechangelng = function(lng){

i18n.changeLanguage(lng)

localStorage.setItem("lng",lng)
}

function Setterxx(){
   settoggle(false)
}


function Setterx(){

   settoggle(true)
}


function Setter (){

   settoggle(function(prevstate){
      return !prevstate
      
      })

setbodyscroll(function(prevstate2){

return !prevstate2
})

function displayremove(){


}


}

/*  this useeffect function is to stop scrolling down the page when the black menu is opened (newmenu) */
useEffect(function(){
 
   if (bodyscroll === false)
   
 {console.log("hey im use effect and im false")
 document.body.style.overflow = "hidden";
}

else if (bodyscroll === true) {console.log("hey im true")
document.body.style.overflow = "scroll"

}
   
   },[Setter])




   // this zzz variable is used to activate the black menu button that appears at around 530px screen width  
   let zzz = {  
menubtn:{
display: toggle ? "block" : "none"
}
   }



   return (<> 
   <div className="navdiv">
   
   
   <img src= {require("./sakurax2.png")}  alt="loading..." className="air2" />
  {<div className="air" onClick = {function(){navigate("/")}} > Rhodorap GmbH</div> } 
   


{/*  Code for the unorderedlist containing Home About and Contacts */}
   
   <ul class="ulbar">

 
   
{/* <span className="languagesettinges" onClick={()=> handlechangelng("es")}>  ES  </span>  */} <Tippy  arrow={false}content={t("switchlanges")}>
<button className="languagesettinges" onClick={()=> handlechangelng("es")}>  ES  </button> 
 </Tippy>
 <span className="divider2">|</span>  <Tippy arrow={false} content={<div className="setcolordiv">{t("switchlangde")}</div>}>
  <button className="languagesettingde" onClick={()=> handlechangelng("de")} > DE </button> 
 </Tippy> <span className="divider">|</span><Tippy  arrow={false} content={t("switchlangen")}>
<button className="languagesettingen" onClick={()=> handlechangelng("en")}>  EN  </button> 
 </Tippy>
   
   
    <NavLink to="products" onMouseOver={Setterx} onMouseLeave={Setterxx} className="navlinkproduct" style={function({isActive}) {return {backgroundColor:isActive? "#f3f3f3" : ""}}}><li className="productstab" onMouseOver={Setterx}>     <a href="./index.html" onMouseOver={Setterx} className="aproducts "><FontAwesomeIcon icon={faCaretDown} className="caret2" onMouseOver={Setterx}/> {t("properties")} </a>
    <ul className="subul" onMouseLeave={Setterxx} style={{display: toggle ? "block" : "none"}}>
      <Link to="products?filter=Columbia" ><li className="dropdownitem"  ><a className="subdropdownitem"  > (2) {t("incolumbia")}  </a></li></Link>
      <Link to="/products?filter=Russia" ><li className="dropdownitem"><a className="subdropdownitem">(3) {t("inrussia")}</a></li></Link>
      <Link to="/products?filter=Spain"><li className="dropdownitem"><a className="subdropdownitem">(1) {t("inspain")}</a></li></Link>
      <Link to="/products?filter=%2BEdinburgh%252C%2BScottland%2B"><li className="dropdownitem"><a className="subdropdownitem">(1) {t("inscottland")}</a></li></Link>
      <Link to="/products?filter=%2BMelbourne%252C%2BAustralia%2B"><li className="dropdownitem"><a className="subdropdownitem">(1) {t("inaustralia")}</a></li></Link>
      <Link to="/products?filter=estonia"><li className="dropdownitem"><a className="subdropdownitem">(1) in Estonia</a></li></Link>
      <Link to="/products?filter=USA"><li className="dropdownitem"><a className="subdropdownitem">(2) in USA</a></li></Link>
      
      </ul>  </li></NavLink>
    <FontAwesomeIcon icon={faHouse} className="fa-house"/> 
   <NavLink to="/" className="navlink" style={function({isActive}) {return {backgroundColor:isActive? "#f3f3f3" : ""}}}><li className="home" ><a href="./index.html" className="ahome">{t("Home")}</a>  </li></NavLink>
    <FontAwesomeIcon icon={faCircleInfo} className="fa-circleinfo"/> 
   <NavLink to="about" className="navlink"  style={({isActive})=> {return {backgroundColor:isActive? "#f3f3f3" : ""}}}><li className="aboutus"><a href="./about.html" className="aabout">{t("About")}</a>  </li></NavLink>
   <FontAwesomeIcon icon={faAddressBook} className="fa-addressbook" /> 
   <NavLink to="contacts" className="navlink"  style={({isActive})=> {return {backgroundColor: isActive? "#f3f3f3" : ""}}}><li className="contacts"><a className="acontacts">{t("Contacts")}</a>  </li></NavLink>
  

   </ul>
   

   <button className="menubtn" onClick={Setter}><FontAwesomeIcon icon={toggle? faX:faBars} className="caretsize"/></button>
 <div className="newmenu" style={zzz.menubtn}> 

 <h1 className="air4" onClick = {function(){navigate("/")}} > Rhodorap GmbH</h1> 
 <div className="centerthemenulinks">
 <Link to="/" className="menulink"> <p className="homepara" onClick={Setter}> {t("Home")}</p> </Link>
 <Link to="about" className="menulink"> <p className="homeabout" onClick={Setter}> 
 {t("About")}</p> </Link>
 <Link to="contacts" className="menulink"> <p className="homecontacts" onClick={Setter}>   {t("Contacts")}</p> </Link>

 <Link to="products" className="menulink"> <p className="homecontacts" onClick={Setter}> {t("properties")}</p> </Link>
 </div>
</div>

   </div>
   <Outlet />
   
   </>)
   
   
   }

// Code for the Hero Image on the Homepage

function Hero(){
   const { t, i18n } = useTranslation();

   let handlechangelng = function(lng){
   
   i18n.changeLanguage(lng)
   
   localStorage.setItem("lng",lng)
   } 



let [transition,settransition] = useState(false)
let [subscribe, setsubscribe] = useState("")
let [modal,setmodal] = useState(false)

let navigate = useNavigate()
let activemodal = {visibility: "visible",
 position:"fixed",
 width:"100%",
 height: "100vh",
 backgroundColor: "rgba(0,0,0,0.5)",
top:0,
left:0,
display:"flex",
justifyContent: "center",
alignItems: "center"}
 
let stylez = {position:"absolute",
 top: "10px",
 right:"10px",
 cursor:"pointer"
 }

 let modalx =  {backgroundColor: "blue",
   height:"40%",
   width:"50%",
outline: "2px solid pink",
   position:"relative",
   display: "flex",
   flexWrap:"wrap",
   flexDirection: "row",
   alignItems: "flex-start",
   justifyContent: "center",
    bottom:"20px",
    transitionDuration: "1000ms",
    transitionProperty: "bottom",
    transitionTimingFunction: "easeIn"
   }


function handleChange(event){
event.preventDefault()
console.log(console.log("submitted!")
   )

}


 function Setter (){
modal = true
   setmodal(<form onSubmit={Setter3}>
   <div className="modalbg" style={activemodal} >


   <div className="modal"  >
   <div className="darkoverlaymodal">
      <div className="modalheadingdiv">
      
<h2 className="modalheading"> {t("modalheading")}</h2></div>
   <label htmlFor="name" className="modalname" > {t("name2")}: </label>
   <input type="text" name="name" onClick={handleChange} className="testz" required/>
   <label  className="emails" htmlFor="email"> Email: </label>
   <input type="email" name="email" className="emailinput"  required/>
   <button type="submit" className="subscribe" > {t("subscribe")}</button>
   <span className="modalclose" style={stylez} onClick = {Setter2}>X</span>

  </div>
  </div>
   </div> 
   </form>)
 

 }

function Setter3 (event){

   event.preventDefault()
settransition(true)
   setmodal("")
setsubscribe(
   
<div className="modalbg" style={activemodal}>
   <div className="modal2">
      <div className="modaldesign2"> 
      <FontAwesomeIcon icon={faCheck} className="facheck" />
       </div>
   <h2 className="modalheadingsubscribe"> Thank you for Subscribing! </h2>
   <button className="okaybtn" onClick={Setter2}> Okay </button>
   <span className="modalclose2"  onClick = {Setter2}>X</span>
  </div>
   </div>

)


}



 function Setter2(){

setmodal("")
setsubscribe("")

 }

  return (

      <div className="herodiv">
      <div className="darkoverlay"> 
      <div className="transparent">
 
      <h2 className="find"> {t(`hero`)}</h2>
      <h2 className="find2"> {t(`hero2`)}</h2>
      <div className="buttondiv">
       <button onClick={function(){navigate("products")}} className="herobutton"> {t("herobutton")}</button>
   {/*    <button onClick={Setter} className="herobutton2"> {t("herobutton2")} </button> */}
       </div>
       {modal}
       {subscribe}
      </div>
     
      </div>
      </div>
      
      )
      
      }


/*   Filtering houses below produx*/

function Products (e){

   let location = useLocation()
let getchoosefilter = useRef()
let [resulttoggle, setresulttoggle] = useState (false)
   let inputRef = useRef()
   let [query,setquery] = useState("")
   let [searchparams,setsearchparams] = useSearchParams()
   let [showoriginalarrayobject,setoriginalarrayobject] = useState(false)
let [locationmenu,setlocationmenu] = useState(false)
   let showarrayobjectdesc = searchparams.get("filter") === "desc"
   let showarrayobjectasc = searchparams.get("filter") === "asc"
   let showspain = searchparams.get("filter") === /*"+Ibiza+%28Balearic+Islands%29%2C+Spain+"*/ "Spain"
   let showrussia = searchparams.get("filter") === "Russia"
let showaustralia = searchparams.get("filter") === "+Melbourne%2C+Australia+"
let showscottland = searchparams.get("filter") === "+Edinburgh%2C+Scottland+"
let showcolumbia = searchparams.get("filter") === "Columbia"
let showcolumbiasortdesc = searchparams.get("filter") === "columbiasortdesc"
let showcolumbiasortasc = searchparams.get("filter") === "columbiasortasc"

let showrussiacostdesc = searchparams.get("filter") === "russiapricesortdesc"
let showrussiacostasc = searchparams.get("filter") === "russiapricesortasc"

let showusa = searchparams.get("filter") === "USA"
let showusasortdesc = searchparams.get("filter") === "usasortdesc"
let showusasortasc = searchparams.get("filter") === "usasortasc"

let showestonia = searchparams.get("filter") === "estonia"

   let showarrayobjectlocations = searchparams.get("filter") === "locations"

   // setsort is the code to reset the drop down menu setsort(  getchoosefilter.current.value /*"Choose Filters" */  ) will reset the drop down menu to choose filters
   let [sortremove,setsortremove] = useState(true)
   let [removefordropdown,setremovefordropdown] = useState(false)
let [sort,setsort] = useState( "Choose Filters" )


/* official arrayobject for adding new houses */
let Arrayobjects = [

   {
   id:"1",
   img:"https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   Locations:"Medellín, Columbia",
   Description: i18next.t("good"),
   Price:"20,000",
   Country:"Columbia"
   },


       {id:"2",
           img:"https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
           Locations: i18next.t("house3locationfrontprofile"),
           Description:i18next.t("nature"), 
           Price:"70,000",
           Country:i18next.t("country")
           },


           {id:"3",
               img:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
               Locations:i18next.t("house4locationfrontprofile"),
               Description: i18next.t("coast"),
               Price:"100,000",
               Country:i18next.t("countryspain")

               },

                  // end for line 1   start second line with a these objects

                  
               {id:"4",
                   img:"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                   Locations:i18next.t("house5locationfrontprofile"),
                   Description:i18next.t("peaceful"),  
                   Price:"50,000",
                   Demand:false,
                   Country: i18next.t("countryscottland")
                   },

                   {id:"5",
                       img:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                       Locations:i18next.t("house6locationfrontprofile"),
                       Description: i18next.t("nocomment"),
                       Price:"90,000",
                       Country: i18next.t("countryaustralia"),
                  
                       }, 
                        {id:"6",
                        img:"https://images.unsplash.com/photo-1625517236224-4eba7b2e47b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        Locations: i18next.t("house7locationfrontprofile"),
                        Description: i18next.t("nocomment"),
                        Price:"60,000",
                        Country: i18next.t("country"),

                       },

                       {id:"7",
                       img:"https://images.unsplash.com/photo-1642554861866-c79e4a97f95a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80",
                       Locations: i18next.t("house7locationfrontprofile"),
                       Description: i18next.t("nocomment"),
                       Price:"80,000",
                       Country: i18next.t("country")


                       },
                       {id:"8",
                       img:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80",
                       Locations: i18next.t("house8locationfrontprofile"),
                       Description: i18next.t("nocomment"),
                       Price:"50,000",
                       Country: i18next.t("countryestonia"),


                       },
                       {id:"9",
                       img:"https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                       Locations: "Miles City, MT, USA",
                       Description: i18next.t("nocomment"),
                       Price:"120,000",
                       Country:"USA"


                       },
                       {id:"10",
                       img:"https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                       Locations: "Salt Lake City, Utah, USA",
                       Description: i18next.t("nocomment"),
                       Price:"40,000",
                       Country:"USA",

                       },
                       
                       {id:"11",
                       img:"https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                       Locations: "Medellín, Columbia",
                       Description: i18next.t("nocomment"),
                       Price:"200,000",
                       Country: "Columbia"

                       }


                       


]



let locationfind= Arrayobjects.map(function(element,index){
return element.Country

})   

// Function to remove duplicates in an array of the countries search
locationfind = locationfind.filter(function(element,index){

return locationfind.indexOf(element) === index

})



   const { t, i18n } = useTranslation();

let handlechangelng = function(lng){

i18n.changeLanguage(lng)

localStorage.setItem("lng",lng)
}



let Newarraysorteddesc = Arrayobjects.sort(function(a, b) {
   return ( parseFloat(b.Price) - parseFloat(a.Price))
 })
 .map(function(element){
   return (
     <> 

   <Housediv 

   
   Id = {element.id}
       Img = {element.img}   
       Description = {element.Description} 
       Price = {element.Price} 
       Demand = {element.Demand}
    
       Locations = {element.Locations}   
Country = {element.Country}
       
       />

       </> 
      )
   
   })

 







let Newarraysortedasc = Arrayobjects.sort(function(a, b) {
   return ( parseFloat(a.Price) - parseFloat(b.Price))
 })
 .map(function(element){
   return (
     <> 
   <Housediv 
   Id = {element.id}
       Img = {element.img}   
       Description = {element.Description} 
       Price = {element.Price} 
       Demand = {element.Demand}
    
       Locations = {element.Locations}   
       Country = {element.Country}
       />
       </> 
       
      )
      
   })

  /* code for sort by locations console.log(Arrayobjects.sort((a, b) => a.Locations.localeCompare(b.Locations))) */



let Newarray = Arrayobjects
 .map(function(element){
   return (
     <> 
   <Housediv 
   
   
   
   Id = {element.id}
       Img = {element.img}   
       Description = {element.Description} 
       Price = {element.Price} 
       Demand = {element.Demand}
    
       Locations = {element.Locations}   
       Country = {element.Country}

     
       />





       </> 
      )
   
   })



function Sortmenuoptions (e){

   setsort(e.target.value)
   
   if (e.target.value ===      "Choose Filters"   ){

   
     
   }
   
   else if (e.target.value === "Sort By Country" || e.target.value === "Ordenar por Pais" || e.target.value === "nach Länder sortieren"  ){

   setlocationmenu(true)
   }
   else if (e.target.value === "Sort By Cost" || e.target.value === "nach Kosten sortieren" || e.target.value === "Ordenar por costo"  ){

     setremovefordropdown(true)
     setsortremove(false)

     setoriginalarrayobject(true)
   }

   }

   function Sortremovesetter (){setsortremove(function(prevstate)
      {setsort(  getchoosefilter.current.value /*"Choose Filters" */  )
      setsearchparams({})
  /* setoriginalarrayobject(true) */
         setremovefordropdown(false)
       
         return !prevstate})}

         function Locationmenuremove (){
            setlocationmenu(false)

            setsort(  getchoosefilter.current.value /*"Choose Filters" */  )
      setsearchparams({})
      setremovefordropdown(false)
         }


 


/*
function Searchfunction (e){     // this is actually an add function -___-  
   e.preventDefault()

   let value = inputRef.current.value
console.log(inputRef.current.value)

if (value === "") return 
else {setfilteredlocations(function(prev){

return [...prev, value] 
})}
inputRef.current.value = ""
}  */

function Searchforlocation (e){
   setquery(e.target.value)
if (inputRef.current.value === ""){
setresulttoggle(false) 
}
else{setresulttoggle(true)} 


}

let filtereditems = locationfind.filter(function(element){

   return element.toLowerCase().includes(query.toLowerCase())
   
   })



/* Important!!! */
function Locationfilterfunctions(e){

console.log(e.target.textContent)
// spain query
if (e.target.textContent.includes("Spain"))
{
   setsearchparams({filter:"Spain"})
   setlocationmenu(false)
}

   else if (e.target.textContent.includes("España")){
      setsearchparams({filter:"Spain"})
      setlocationmenu(false)
      
   }
   
   else if ( e.target.textContent.includes("Spanien")){
      setsearchparams({filter:"Spain"})
      setlocationmenu(false)
   
   }
//
// russia query
else if (e.target.textContent.includes(/*"Samara"*/ "Russia") || e.target.textContent.includes("Russland") || e.target.textContent.includes("Rusia")){
   setsearchparams({filter:"Russia"})
   setlocationmenu(false)
}

else if (e.target.textContent.includes("Australia") || e.target.textContent.includes("Australien")){
   setsearchparams({filter:"+Melbourne%2C+Australia+"})
   // Code for resetting the drop down menu to "Choose Filters"
   setsort(  getchoosefilter.current.value /*"Choose Filters" */  )
setlocationmenu(false)

}

else if (e.target.textContent.includes(/*"Samara"*/ "Estonia") || e.target.textContent.includes("Estland")){
   setsearchparams({filter:"estonia"})
   setsort(  getchoosefilter.current.value /*"Choose Filters" */  )
   setlocationmenu(false)
}


else if (e.target.textContent.includes("Scottland") || e.target.textContent.includes("Escocia") || e.target.textContent.includes("Schottland")){
   setsearchparams({filter:"+Edinburgh%2C+Scottland+"})

setlocationmenu(false)
}

else if (e.target.textContent.includes("USA")){
   setsearchparams({filter:"USA"})

setlocationmenu(false)

}

else if (e.target.textContent.includes("Columbia")){
   setsearchparams({filter:"Columbia"})

setlocationmenu(false)

}


}

let scottlandfilter = Arrayobjects.filter(function(element){

   return element.Locations.includes("Scottland") || element.Locations.includes("Schottland") || element.Locations.includes("Escocia") }).map(function(element){
      return (
        <> 
      <Housediv 

      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </> 
         )})


let spainfilter = Arrayobjects.filter(function(element){

   return element.Locations.includes("Spain") || element.Locations.includes("Spanien") || element.Locations.includes("Espa") }).map(function(element){
      return (
        <> 
      <Housediv 

      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </> 
         )})

         let russiafilter = Arrayobjects.filter(function(element){

            return element.Locations.includes("Russia") || element.Locations.includes("Russland") || element.Locations.includes("Rusia") }).map(function(element){
               return (
                 <> 
               <Housediv 
         
               Id = {element.id}
                   Img = {element.img}   
                   Description = {element.Description} 
                   Price = {element.Price} 
                   Demand = {element.Demand}
                
                   Locations = {element.Locations}   
                   Country = {element.Country}   
                 
                   />
            
                   </> 
                  )})


                  let columbiafilter = Arrayobjects.filter(function(element){

                     return element.Locations.includes("Columbia")}).map(function(element){
                        return (
                          <> 
                        <Housediv 
                  
                        Id = {element.id}
                            Img = {element.img}   
                            Description = {element.Description} 
                            Price = {element.Price} 
                            Demand = {element.Demand}
                         
                            Locations = {element.Locations}   
                            Country = {element.Country}
                          
                            />
                     
                            </> 
                           )})

                           let australiafilter = Arrayobjects.filter(function(element){

                              return element.Locations.includes("Melbourne")}).map(function(element){
                                 return (
                                   <> 
                                 <Housediv 
                           
                                 Id = {element.id}
                                     Img = {element.img}   
                                     Description = {element.Description} 
                                     Price = {element.Price} 
                                     Demand = {element.Demand}
                                  
                                     Locations = {element.Locations}   
                                     Country = {element.Country}
                                   
                                     />
                              
                                     </> 
                                    )})         

                                    let usafilter = Arrayobjects.filter(function(element){

                                       return element.Locations.includes("USA")}).map(function(element){
                                          return (
                                            <> 
                                          <Housediv 
                                    
                                          Id = {element.id}
                                              Img = {element.img}   
                                              Description = {element.Description} 
                                              Price = {element.Price} 
                                              Demand = {element.Demand}
                                           
                                              Locations = {element.Locations}   
                                              Country = {element.Country}
                                            
                                              />
                                       
                                              </> 
                                             )})    

                                             let estoniafilter = Arrayobjects.filter(function(element){

                                                return element.Locations.includes("Estonia") || element.Locations.includes("Estland")}).map(function(element){
                                                   return (
                                                     <> 
                                                   <Housediv 
                                             
                                                   Id = {element.id}
                                                       Img = {element.img}   
                                                       Description = {element.Description} 
                                                       Price = {element.Price} 
                                                       Demand = {element.Demand}
                                                    
                                                       Locations = {element.Locations}   
                                                       Country = {element.Country}
                                                     
                                                       />
                                                
                                                       </> 
                                                      )})    
                                    
                                    /* function used to set showspain / showrussia and all the others countries to false to display:none the buttons for cost sorting for countries */

                                 
                              function Setcountryfalse (){
                                 
                                    setsearchparams({})
                                    setsort(  getchoosefilter.current.value /*"Choose Filters" */  )
                               
                                    setremovefordropdown(false)
                                 }

                             
                                          // sort button for country by per price descending order
                                          function SortCountryPriceDesc (){

                                             if (showrussia || showrussiacostasc){
                                                
                                                setoriginalarrayobject(false)
                                                setsearchparams({filter:"russiapricesortdesc"})}

                                                else if (showusa || showusasortasc){
                                                
                                                   setoriginalarrayobject(false)
                                                   setsearchparams({filter:"usasortdesc"})

                                                }
                                                else if (showcolumbia || showcolumbiasortasc){

                                                   setsearchparams({filter:"columbiasortdesc"})
                                                }
                                             
            
                                             }             
                                             
                                             // sort button for country by per price ascending order
                                             function SortCountryPriceAsc(){

                                                if (showrussia || showrussiacostdesc){
                                                
                                                   setoriginalarrayobject(false)
                                                   setsearchparams({filter:"russiapricesortasc"})
                                                   
                                                }
               
                                                else if (showusa || showusasortdesc){
                                                
                                                   setoriginalarrayobject(false)
                                                   setsearchparams({filter:"usasortasc"})

                                                }

                                                else if (showcolumbia || showcolumbiasortdesc){

setsearchparams({filter:"columbiasortasc"})

                                                }


                                                }  
                         
                                             /* fully functional descending order of cost by russia country and filter by country and cost i*/ 
                                             let russiacostsortdesc = Arrayobjects.filter(function(element){

                                                return element.Locations.includes("Russia") || element.Locations.includes("Russland") || element.Locations.includes("Rusia")
                                                
                                                }).sort(function(a, b) {
                                                   return ( parseFloat(b.Price) - parseFloat(a.Price))
                                                }).map(function(element){
                                                   return (
                                                     <> 
                                                   <Housediv 
                                                
                                                   Id = {element.id}
                                                       Img = {element.img}   
                                                       Description = {element.Description} 
                                                       Price = {element.Price} 
                                                       Demand = {element.Demand}
                                                    
                                                       Locations = {element.Locations}   
                                                       Country = {element.Country}
                                                     
                                                       />
                                                
                                                       </>)})

let usacostsortdesc =Arrayobjects.filter(function(element){

   return element.Locations.includes("USA")
   
   }).sort(function(a, b) {
      return ( parseFloat(b.Price) - parseFloat(a.Price))
   }).map(function(element){
      return (
        <> 
      <Housediv 
   
      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </>)}) 

let columbiacostsortdesc =Arrayobjects.filter(function(element){

   return element.Locations.includes("Columbia")
   
   }).sort(function(a, b) {
      return ( parseFloat(b.Price) - parseFloat(a.Price))
   }).map(function(element){
      return (
        <> 
      <Housediv 
   
      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </>)}) 




// function russiacostsorted in ascending order and other ascending order countries
let russiacostsortasc =Arrayobjects.filter(function(element){

   return element.Locations.includes("Russia") || element.Locations.includes("Russland") || element.Locations.includes("Rusia")
   
   }).sort(function(a, b) {
      return ( parseFloat(a.Price) - parseFloat(b.Price))
   }).map(function(element){
      return (
        <> 
      <Housediv 
   
      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </>)}) 

let usacostsortasc =Arrayobjects.filter(function(element){

   return element.Locations.includes("USA")
   
   }).sort(function(a, b) {
      return ( parseFloat(a.Price) - parseFloat(b.Price))
   }).map(function(element){
      return (
        <> 
      <Housediv 
   
      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </>)}) 

let columbiacostsortasc =Arrayobjects.filter(function(element){

   return element.Locations.includes("Columbia")
   
   }).sort(function(a, b) {
      return ( parseFloat(a.Price) - parseFloat(b.Price))
   }).map(function(element){
      return (
        <> 
      <Housediv 
   key={element.id}
      Id = {element.id}
          Img = {element.img}   
          Description = {element.Description} 
          Price = {element.Price} 
          Demand = {element.Demand}
       
          Locations = {element.Locations}   
          Country = {element.Country}
        
          />
   
          </>)}) 





return (<>


<div className="navbardivforproducts"> 

<div className="sortbardiv">
   {/* the 3 buttons below are used for when the user has decided to sort by country. the user now has the option to sort by asc order or desc order with country*/}
   <Tippy content={t("tippydesccost")}>{ <button className={showspain || showrussia || showcolumbia || showrussiacostdesc || showrussiacostasc || showusa || showusasortasc || showusasortdesc || showestonia || showcolumbiasortasc || showcolumbiasortdesc? "btnsortdescforlocation" : "sortremoveclass"} onClick={SortCountryPriceDesc}> <FontAwesomeIcon icon={faArrowDown91} /> </button>}</Tippy>
   <Tippy content={t("tippyasccost")}>{<button className={showspain || showrussia || showcolumbia || showrussiacostdesc || showrussiacostasc || showusa || showusasortasc || showusasortdesc || showestonia || showcolumbiasortasc || showcolumbiasortdesc? "btnsortascforlocation" : "sortremoveclass"} onClick={SortCountryPriceAsc}> <FontAwesomeIcon icon={faArrowUp91} /> </button> }</Tippy>
   <button className={showspain || showrussia || showcolumbia || showrussiacostdesc || showrussiacostasc || showusa || showusasortasc || showusasortdesc || showestonia || showcolumbiasortasc || showcolumbiasortdesc? "redcolorforx" : "sortremoveclass" } onClick={Setcountryfalse}> X </button>

<Tippy content={t("tippydesc")}>{
<button className={sortremove ? "sortremoveclass" :"btnsortdesc"} onClick={function(){setoriginalarrayobject(false) 
   setsearchparams({filter:"desc"})}}> <FontAwesomeIcon icon={faArrowDown91} /> </button>  }</Tippy>

<Tippy content={t("tippyasc")}>{
<button className={sortremove? "sortremoveclass" :"btnsortasc"} onClick={function(){
   setoriginalarrayobject(false)
   setsearchparams({filter:"asc"})}}> <FontAwesomeIcon icon={faArrowUp91} /> </button>}</Tippy>

<button className={sortremove ? "sortremoveclass" :"redcolorforx"} onClick={Sortremovesetter}> X </button>

{/* code to show or remove the dropdown menu and other buttons for cost sorting when showspain or russia or any other country is true is true*/}

<select  value={sort} className={removefordropdown || showspain || showrussia || showcolumbia || showrussiacostdesc || showrussiacostasc || showusa || showusasortasc || showusasortdesc || showestonia || showcolumbiasortasc || showcolumbiasortdesc? "sortremoveclass" : "selectmenuforsort"} onChange={Sortmenuoptions}>
 <option  ref={getchoosefilter}> {t("choosefilter")}</option> 
<option > {t("sortbycountry")}</option>
<option> {t("sortbycost")}</option>
</select>
</div>
</div> 


<div className={locationmenu? "activemodalx" : "activemodaltest"}> 
<div className="locationselectordiv"> <button onClick={Locationmenuremove} className="locationselector"> X {t("close")} </button> </div>
<div className="locationmenudiv">
   <div className="locationmenuheadingdiv">
 <h2 className="locationmenuheading"> {t("sortbycountry")}</h2>
 </div>
<br></br>


<div className="contentdivforlocation">
<form /* onSubmit={Searchfunction} */>
<input type="text" value={query} ref={inputRef} placeholder={t("placeholdercountry")} className="textbarstyle" onChange={Searchforlocation}>



</input>
<button type = "submit" className="clicktosearch"> Search</button>  
</form>
<div className={resulttoggle? "searchresultdiv" : "sortremoveclass" }>
<h2 className="movedown"> {t("results")} </h2>


{/*filtereditems instead of locationfind*/}
{filtereditems.map(function(element){

return <div key={element.id} className="contentsofresults" > <span className="spanforresults" onClick={Locationfilterfunctions}> {element} </span> </div>
})}



</div>
</div>

</div>

</div>

<div className={showarrayobjectdesc || showarrayobjectasc || showspain || showrussia || showaustralia || showscottland || showcolumbia || showrussiacostdesc || showrussiacostasc || showusa || showusasortasc || showusasortdesc || showestonia || showcolumbiasortasc || showcolumbiasortdesc? "sortremoveclass":"containerofarrays"} > {Newarray} </div> 

{/*  FILTERED RESULTS SHOW HERE BELOW  */}
{showarrayobjectdesc? <div className="containerofarrays"> {Newarraysorteddesc} </div> : ""}
{showarrayobjectasc? <div className="containerofarrays"> {Newarraysortedasc} </div> : ""}

{showspain? <div className="containerofarrays">  {spainfilter}  </div> : ""   }
{showrussia? <div className="containerofarrays">  {russiafilter}  </div> : ""   }
{showaustralia? <div className="containerofarrays">  {australiafilter}  </div> : ""   }
{showscottland? <div className="containerofarrays">  {scottlandfilter}  </div> : ""   }
{showcolumbia? <div className="containerofarrays">  {columbiafilter}  </div> : ""   }
{showusa? <div className="containerofarrays">  {usafilter}  </div> : ""   }
{showestonia? <div className="containerofarrays">  {estoniafilter}  </div> : ""   }

{showrussiacostdesc? <div className="containerofarrays">  {russiacostsortdesc} </div> :"" }
{ showrussiacostasc? <div className="containerofarrays">  {russiacostsortasc} </div> :""   }
{showusasortdesc? <div className="containerofarrays">  {usacostsortdesc} </div> :""   }
{showusasortasc? <div className="containerofarrays">  {usacostsortasc} </div> :""   }

{showcolumbiasortdesc? <div className="containerofarrays">  {columbiacostsortdesc} </div> :""   }
{showcolumbiasortasc? <div className="containerofarrays">  {columbiacostsortasc} </div> :""   }


   </>
   )
 

}



function Housediv (props){ 

   let navigate = useNavigate()
 
   let {t, i18n} = useTranslation();  






return (<>
   <div className="carddivforarrays" >

<div className ="cardinfodiv">

{/*  Code for routing each of the house product to a unique url id when clicked */}

 <LazyLoadImage src={props.Img} effect={"blur"} className="carddiv2"  placeholderSrc={props.Img} onClick={function(){navigate(`/products/${props.Id}`)}}/> 
  
<p className="mel">{t("location")}  {props.Locations}</p>
<br></br>
<p className="outlinepara"> {props.Description} </p>
<br></br>
 <p className = "price"> {props.Price}€ </p> 
</div>

</div> 

</>
)
}



export default App;
