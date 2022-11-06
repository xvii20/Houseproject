 import { useEffect, useState,useRef } from "react"
 import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
 import { useTranslation, initReactI18next } from "react-i18next";
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import { faArrowUp, faArrowDown,faAngleRight,faAngleLeft} from "@fortawesome/free-solid-svg-icons"
 import './houseproj.css';
 import "./about.css";
 import React from 'react';
import i18next, { t } from "i18next";
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink,useParams,useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,keyforarrayitemnumber1,keyforarrayitemnumber2,keyforarrayitemnumber3,formchange,keyforsent} from "./store"
import {Formy} from "./contacts.js"
import { formSlice } from "./newreducer";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { useSwipeable } from "react-swipeable";
    
/*    Contact us Page */ 

export function Form (){
   const dispatch = useDispatch()
let nameRef = useRef()
let emailRef = useRef()
let commentRef = useRef()

   const changeformstate = useSelector((state) =>state.xo.value)


    let {t, i18n} = useTranslation()
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [text, settext] = useState("")
let [submitted,setsubmitted] = useState(false)
     
     
    function Settername (event){
      
       setname(event.target.value)
       console.log(event.target.value)
        event.target.setCustomValidity("");
      }

      function Setteremail (event){
      
         setemail(event.target.value)
         console.log(event.target.value)
          event.target.setCustomValidity("");
        }
  
        function Settertext (event){
      
         settext(event.target.value)
         console.log(event.target.value)
          event.target.setCustomValidity("");
        }

  
  


     function Handlesubmits(event){
       event.preventDefault();



       setsubmitted(true)

       {dispatch(formchange({name:true}))
       dispatch(keyforsent())
       
       setTimeout(Removesoon, 5000);
       function Removesoon() {
       
         return  dispatch(formchange({name:false}))

       }}
      
   nameRef.current.value=""
   emailRef.current.value=""
   commentRef.current.value=""
      }

     
    return (<>

       <div className="formdiv">
       <div className="addbackground">
    <h1 class="contactus">{t("contactus")}</h1>
    </div>
    <form onSubmit={Handlesubmits}>
 
    <p className="stylecolorwhite"> {t("fullname")}:<span className="ast"> *</span></p>
    <input className="firstname"    
    type="text"

    placeholder= {t("placeholdername")}
    onChange={Settername}
    name="firstname"
    required
    ref={nameRef}
    />



     
<br></br>
<p className="stylecolorwhite"> Email:<span className="ast"> *</span></p>
<input  className="email"  
 
    type="email"
    placeholder={t("placeholderemail")}
    onChange={Setteremail}
    name={email}
required
onInvalid={function(e){e.target.setCustomValidity('Please enter a valid email | Bitte geben Sie eine gültige Email-Adresse ein | Introduzca una Email válida' )}}
ref={emailRef}
    />
     



     
     <br></br>
     <textarea className="comments"
       onChange={Settertext}
       placeholder={t("placeholder")}
       name="comments"
       onInvalid={function(e){ e.target.setCustomValidity("Please enter your comment | Bitte geben Sie einen Kommentar ein | Ingrese un comentario")}}
     required
     ref={commentRef}
    />
     
   
<br></br>
     
    <button className="submit" type="submit">{t("submitbutton")}</button>

    </form>

    </div>

</>
    )
    
    }

    export function Secondhalf({statesent,setstatesent}){
      const dispatch = useDispatch()
      const changeformstate = useSelector((state) =>state.xo.value)

   
   /*
      function Buttonforstatechange () {
         
if (changeformstate.name === false)

{dispatch(formchange({name:true}))
dispatch(keyforsent())


setTimeout(Removesoon, 5000);
function Removesoon() {

  return  dispatch(formchange({name:false}))

}  

}


}*/


   return( <div className="second">
    <div className="secondinnerdiv">
        <div className="thirdinnerdiv"> 
<h1 className="secondh2"> {t("ourlocation")} </h1>
<p className="secondpara"> {t("statement")}</p>




</div>
</div>
</div>
    )

}
    
