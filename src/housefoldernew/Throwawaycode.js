import {BrowserRouter, Navigate, Routes, Route, Link, Outlet, NavLink,useParams,useNavigate,useSearchParams,useLocation  } from "react-router-dom";
import {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,keyforarrayitemnumber1,
   keyforarrayitemnumber2,keyforarrayitemnumber3,formchange} from "./store";
   import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
   import {faHouse,faCircleInfo,faAddressBook, faArrowRight, faCheck, faArrowUp, faArrowDown,faArrowLeft, faCaretDown,faAngleRight,faAngleLeft,faArrowDown91,faArrowUp91} from "@fortawesome/free-solid-svg-icons"
   import { useTranslation, initReactI18next, I18nContext,Trans } from "react-i18next";
   import { useSelector } from "react-redux"
   import { useDispatch } from "react-redux";

   import {Singleproduct4,Singleproduct5,Singleproduct6, Modalcarousel/*,Modalcarousel4 */,Modalcarousel5,
Modalcarousel6} from "./component.js"

   // Code for the old routing 
 {/* <Route path="products/1" element={<Singleproduct1 />} />
   <Route path="products/3" element={<Singleproduct3 />} />   
   <Route path="products/4" element={<Singleproduct4 />} />
   <Route path="products/5" element={<Singleproduct5 />} />
   <Route path="products/6" element={<Singleproduct6 />} /> */}
   {/* <Route path="carouselpage" element={<Modalcarousel/>} /> 
   <Route path="carouselpage2" element={<Modalcarousel2/>} />
   <Route path="carouselpage4" element={<Modalcarousel4/>} />
   <Route path="carouselpage5" element={<Modalcarousel5/>} />
   <Route path="carouselpage6" element={<Modalcarousel6/>} /> */}



/*  Code for Samara Russia carousel */ 
function Modalcarousel2 (){
    const dispatch = useDispatch()
    let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
    let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)
    const { t, i18n } = useTranslation();
 
 
 
 
 
 
 
  function Reduxstatesetinc(){
 dispatch(increment())
 dispatch(keyforarrayitemnumberinc())
    }
 
    function Reduxstatesetdec(){
       dispatch(decrement())
       dispatch(keyforarrayitemnumberdec())
    }
 
    function Keydownforarray(event){
       if(event.key === "ArrowRight" && arrayselector < 3){
 
          document.body.style.overflowX ="hidden"
      
          dispatch(increment())
          dispatch(keyforarrayitemnumberinc());
       }
 
             else if (event.key === "ArrowLeft" && arrayselector > 1){
                document.body.style.overflowX ="hidden"
    dispatch(decrement())
    dispatch(keyforarrayitemnumberdec())}}
 
    return (<div className="carouselpageparentcontainer" tabIndex={1} onKeyDown={Keydownforarray}>
 
     
       <div className="backbuttondiv">
 <Link to="/products/3" className="backbuttonforcarousel"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbutton"/> {t("toproducts")} </Link>
       </div>
       <div className="carouselbuttondiv">
          <button onClick={Reduxstatesetdec}/* onClick={Go_through_array_reverse} */ style={{display: arrayselector /*currentindex*/ === 1 ? "none":"block"}} className="carouselbutton2" > <FontAwesomeIcon icon={faAngleLeft} className="carouselarrow2"/></button>
 <button onClick={Reduxstatesetinc}/* onClick={Go_through_array} */  style={{display: arrayselector
    /*currentindex*/ === 3? "none":"block"} } className="carouselbutton"> <FontAwesomeIcon icon={faAngleRight} className="carouselarrow"/></button>
 </div>
 
 <div className ="arraytrackdiv">
 <h4 className="arraytrack"> { arrayselector/*arrayitemnumber*/} / 3 </h4>
 </div>
 
 <img className={arrayselector/*currentindex*/ === 1? "carouselelement1" : "carouselremove" } src={`https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"`} />
 <img className= {arrayselector/*currentindex*/ === 2? "carouselelement2" : "carouselremove"}  src={"https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
 <img className={arrayselector/*currentindex*/ === 3? "carouselelement3" : "carouselremove"}  src={"https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}  />
    </div>)
 
 }

 export function Modalcarousel4 (){
   const dispatch = useDispatch()
   let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
   let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)


     

 function Reduxstatesetinc(){
dispatch(increment())
dispatch(keyforarrayitemnumberinc())
   }

   function Reduxstatesetdec(){
      dispatch(decrement())
      dispatch(keyforarrayitemnumberdec())
   }

   const handlers = useSwipeable({
     
       trackTouch: true,
      onSwipedRight: function() { if (arrayselector === 1) {dispatch(keyforarrayitemnumber1())} else{dispatch(decrement())}},
      onSwipedRight: function() { if (arrayselector === 1) {dispatch(keyforarrayitemnumber1())} else{dispatch(keyforarrayitemnumberdec())}},
      onSwipedLeft: function() { if (arrayselector === 3) {dispatch(keyforarrayitemnumber3())} else{dispatch(decrement())}},
      onSwipedLeft: function() { if (arrayselector === 3) { dispatch(keyforarrayitemnumber3())} else{dispatch(keyforarrayitemnumberinc())}},
   
   });


   function Keydownforarray(event){
      if(event.key === "ArrowRight" && arrayselector < 3){

         document.body.style.overflowX ="hidden"
     
         dispatch(increment())
         dispatch(keyforarrayitemnumberinc());
      }

            else if (event.key === "ArrowLeft" && arrayselector > 1){
               document.body.style.overflowX ="hidden"
   dispatch(decrement())
   dispatch(keyforarrayitemnumberdec())}}


   return (<div  {...handlers} className="carouselpageparentcontainer" tabIndex={0} onKeyDown={Keydownforarray}>

    
      <div className="backbuttondiv">
<Link to="/products/4" className="backbuttonforcarousel"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbutton"/> {t("toproducts")} </Link>
      </div>
      <div className="carouselbuttondiv">
         <button onClick={Reduxstatesetdec}/* onClick={Go_through_array_reverse} */ style={{display: arrayselector /*currentindex*/ === 1 ? "none":"block"}} className="carouselbutton2" > <FontAwesomeIcon icon={faAngleLeft} className="carouselarrow2"/></button>
<button onClick={Reduxstatesetinc}/* onClick={Go_through_array} */  style={{display: arrayselector
   /*currentindex*/ === 3? "none":"block"} } className="carouselbutton"> <FontAwesomeIcon icon={faAngleRight} className="carouselarrow"/></button>
</div>

<div className ="arraytrackdiv">
<h4 className="arraytrack"> { arrayselector/*arrayitemnumber*/} / 3 </h4>
</div>

<img className={arrayselector/*currentindex*/ === 1? "carouselelement1" : "carouselremove" } src={"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"} />
<img className= {arrayselector/*currentindex*/ === 2? "carouselelement2" : "carouselremove"}  src={"https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80"}  />
<img className={arrayselector/*currentindex*/ === 3? "carouselelement3" : "carouselremove"}  src={"https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}  />
   </div>)

}
 
   // Singleproduct3 contains Code for House 3 (Samara, Russia) 

function Singleproduct3(){
   const dispatch = useDispatch()
   let  modalnavigate = useNavigate()
   const { t, i18n } = useTranslation();
   let handlechangelng = function(lng){

       i18n.changeLanguage(lng)
       
       localStorage.setItem("lng",lng)
       }


function navigatetocarouselpageandsetarraytonumber2(){
   dispatch(keyforarrayitemnumber2())
   modalnavigate("/carouselpage2")}
   
   function navigatetocarouselpageandsetarraytonumber1(){
      dispatch(keyforarrayitemnumber1())
      modalnavigate("/carouselpage2")}

      function navigatetocarouselpageandsetarraytonumber3(){
         dispatch(keyforarrayitemnumber3())
         modalnavigate("/carouselpage2")}
 


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
   <img src={`https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"`} alt="image could not load" className="productimg" onClick={navigatetocarouselpageandsetarraytonumber1} />
   
   <div className="lowerproductpagetext"> 
   <p className="oneline" > {t("house3location")}  </p>
  <p className="oneline2">{t("house3desc")}</p> 

   <p className="firstproductdivpara"> {t("housephone")}</p>
   </div>
   </div>

   <div className="randomdiv">
<h4> {t("randomdivfirstimgheading")} </h4>
<fieldset className="fieldset"> {t("diningroom")} </fieldset>
         <img src={"https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}   className="smallimg" onClick={navigatetocarouselpageandsetarraytonumber2}     />
<hr/>
<fieldset> {t("livingroom")} </fieldset>
<img className="smallimg2" src={"https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} onClick={navigatetocarouselpageandsetarraytonumber3} />
       </div>
   </div>



   </>
   )
   }

   /* Carousel Page 1 for Medellin Columbia  */ 

export function Modalcarousel (){
   const dispatch = useDispatch()
   let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
   let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)

 function Reduxstatesetinc(){
dispatch(increment())
dispatch(keyforarrayitemnumberinc())
   }

   function Reduxstatesetdec(){
      dispatch(decrement())
      dispatch(keyforarrayitemnumberdec())
   }


   function Keydownforarray(event){
      if(event.key === "ArrowRight" && arrayselector < 3){

         document.body.style.overflowX ="hidden"
     
         dispatch(increment())
         dispatch(keyforarrayitemnumberinc());
      }

            else if (event.key === "ArrowLeft" && arrayselector > 1){
               document.body.style.overflowX ="hidden"
   dispatch(decrement())
   dispatch(keyforarrayitemnumberdec())}}


   return (<div className="carouselpageparentcontainer" tabIndex={0} onKeyDown={Keydownforarray}>

    
      <div className="backbuttondiv">
<Link to="/products/1" className="backbuttonforcarousel"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbutton"/> {t("toproducts")} </Link>
      </div>
      <div className="carouselbuttondiv">
         <button onClick={Reduxstatesetdec}/* onClick={Go_through_array_reverse} */ style={{display: arrayselector /*currentindex*/ === 1 ? "none":"block"}} className="carouselbutton2" > <FontAwesomeIcon icon={faAngleLeft} className="carouselarrow2"/></button>
<button onClick={Reduxstatesetinc}/* onClick={Go_through_array} */  style={{display: arrayselector
   /*currentindex*/ === 3? "none":"block"} } className="carouselbutton"> <FontAwesomeIcon icon={faAngleRight} className="carouselarrow"/></button>
</div>

<div className ="arraytrackdiv">
<h4 className="arraytrack"> { arrayselector/*arrayitemnumber*/} / 3 </h4>
</div>

<img className={arrayselector/*currentindex*/ === 1? "carouselelement1" : "carouselremove" } src={"https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="image could not load" />
<img className= {arrayselector/*currentindex*/ === 2? "carouselelement2" : "carouselremove"}  src={"https://images.unsplash.com/photo-1581783458534-001a466b5487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"}  />
<img className={arrayselector/*currentindex*/ === 3? "carouselelement3" : "carouselremove"}  src={"https://images.unsplash.com/photo-1600488999585-e4364713b90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} />
   </div>)

}

/* Carousel Page 1 for Medellin Columbia ------end  */ 







/* code for house 1 (Medellin Columbia) */ 

export function Singleproduct1(){
   const dispatch = useDispatch()
   let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
   let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)
let  modalnavigate = useNavigate()

    const { t, i18n } = useTranslation();
    let handlechangelng = function(lng){
 
        i18n.changeLanguage(lng)
        
        localStorage.setItem("lng",lng)
        }
    let [modal,setmodal] = useState("")


  

 


function navigatetocarouselpageandsetarraytonumber2(){
   dispatch(keyforarrayitemnumber2())
   modalnavigate("/carouselpage")}

   function navigatetocarouselpageandsetarraytonumber1(){
      dispatch(keyforarrayitemnumber1())
      modalnavigate("/carouselpage")}

      function navigatetocarouselpageandsetarraytonumber3(){
         dispatch(keyforarrayitemnumber3())
         modalnavigate("/carouselpage")}
   
 
    return (
    <>
    <div className="mainparentcontainer">
    <div className="medialanguagediv"> <span className="languagesettingesx2" onClick={()=> handlechangelng("es")}>ES</span><span className="dividerx2">|</span><span className="languagesettingdex" onClick={()=> handlechangelng("de")}> DE </span> <span className="dividerx">|</span><span className="languagesettingenx" onClick={()=> handlechangelng("en")}>EN </span></div>
       <button onClick={function(){window.scrollTo(0,0)}} className="scrolltotop"> <FontAwesomeIcon icon={faArrowUp} /> </button>
       <button onClick={function(){window.scrollTo(0,90000)}} className="scrolltobottom"> <FontAwesomeIcon icon={faArrowDown} /></button>
     
       <span className="backbtnspan">
    <Link to="/products" className="backbtn"> <span className="backbtn">  <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbuttonforpage"/>  <span className="backbtnword">{t("backbtn")}</span> </span> </Link></span>
       <div className="firstproductdiv"> 
       
       </div>
    <div className="productwrapper">
    <img src={"https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="image could not load" className="productimg" onClick={navigatetocarouselpageandsetarraytonumber1}/* onClick={Setterforbigimage} */ /*onClick= {function(){modalnavigate("/carouselpage")}}*//>
    
    <div className="lowerproductpagetext"> 
    <p className="oneline"> {t("house1location")} </p>
    <p className="oneline2">{t("house1description")}  </p>
 
    <p className="firstproductdivpara"> {t("housephone")}</p>
    </div>
    </div>
 
    <div className="randomdiv">
 <h4> {t("randomdivfirstimgheading")} </h4>
 <fieldset className="fieldset"> {t("randomdivfirstimgdesc")} </fieldset>
          <img src={"https://images.unsplash.com/photo-1581783458534-001a466b5487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"}   className="smallimg" onClick={navigatetocarouselpageandsetarraytonumber2} /* onClick={function(){modalnavigate("/carouselpage")}} */  />
 <hr/>
 <fieldset> {t("randomdivsecondimgdesc")} </fieldset>
 <img className="smallimg2" src={"https://images.unsplash.com/photo-1600488999585-e4364713b90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} onClick={navigatetocarouselpageandsetarraytonumber3} />
        </div>
    </div>
 
    <div className="productpagediv"> 
 
  </div>
  
 <div className="lowerproductpagediv"> 
  {modal}
 
    </div>  
 
 
    </>
    )
    }

   /* Carousel Page for Balearic Islands */

   export function Modalcarousel4 (){
      const dispatch = useDispatch()
      let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
      let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)

    function Reduxstatesetinc(){
   dispatch(increment())
   dispatch(keyforarrayitemnumberinc())
      }
   
      function Reduxstatesetdec(){
         dispatch(decrement())
         dispatch(keyforarrayitemnumberdec())
      }
   
      const handlers = useSwipeable({
        
          trackTouch: true,
         onSwipedRight: function() { if (arrayselector === 1) {dispatch(keyforarrayitemnumber1())} else{dispatch(decrement())}},
         onSwipedRight: function() { if (arrayselector === 1) {dispatch(keyforarrayitemnumber1())} else{dispatch(keyforarrayitemnumberdec())}},
         onSwipedLeft: function() { if (arrayselector === 3) {dispatch(keyforarrayitemnumber3())} else{dispatch(decrement())}},
         onSwipedLeft: function() { if (arrayselector === 3) { dispatch(keyforarrayitemnumber3())} else{dispatch(keyforarrayitemnumberinc())}},
      
      });

   
      function Keydownforarray(event){
         if(event.key === "ArrowRight" && arrayselector < 3){
   
            document.body.style.overflowX ="hidden"
        
            dispatch(increment())
            dispatch(keyforarrayitemnumberinc());
         }
   
               else if (event.key === "ArrowLeft" && arrayselector > 1){
                  document.body.style.overflowX ="hidden"
      dispatch(decrement())
      dispatch(keyforarrayitemnumberdec())}}

   
      return (<div  {...handlers} className="carouselpageparentcontainer" tabIndex={0} onKeyDown={Keydownforarray}>
   
       
         <div className="backbuttondiv">
   <Link to="/products/4" className="backbuttonforcarousel"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbutton"/> {t("toproducts")} </Link>
         </div>
         <div className="carouselbuttondiv">
            <button onClick={Reduxstatesetdec}/* onClick={Go_through_array_reverse} */ style={{display: arrayselector /*currentindex*/ === 1 ? "none":"block"}} className="carouselbutton2" > <FontAwesomeIcon icon={faAngleLeft} className="carouselarrow2"/></button>
   <button onClick={Reduxstatesetinc}/* onClick={Go_through_array} */  style={{display: arrayselector
      /*currentindex*/ === 3? "none":"block"} } className="carouselbutton"> <FontAwesomeIcon icon={faAngleRight} className="carouselarrow"/></button>
   </div>
   
   <div className ="arraytrackdiv">
   <h4 className="arraytrack"> { arrayselector/*arrayitemnumber*/} / 3 </h4>
   </div>
   
   <img className={arrayselector/*currentindex*/ === 1? "carouselelement1" : "carouselremove" } src={"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"} />
   <img className= {arrayselector/*currentindex*/ === 2? "carouselelement2" : "carouselremove"}  src={"https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80"}  />
   <img className={arrayselector/*currentindex*/ === 3? "carouselelement3" : "carouselremove"}  src={"https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}  />
      </div>)
   
   }
   

// code for the fourth house (Balearic Islands) //

    export function Singleproduct4(){
      const dispatch = useDispatch()
      let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
      let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)
   let  modalnavigate = useNavigate()


        const { t, i18n } = useTranslation();
        let handlechangelng = function(lng){
     
            i18n.changeLanguage(lng)
            
            localStorage.setItem("lng",lng)
            }
  

function navigatetocarouselpageandsetarraytonumber2(){
   dispatch(keyforarrayitemnumber2())
   modalnavigate("/carouselpage4")}

   function navigatetocarouselpageandsetarraytonumber1(){
      dispatch(keyforarrayitemnumber1())
      modalnavigate("/carouselpage4")}

      function navigatetocarouselpageandsetarraytonumber3(){
         dispatch(keyforarrayitemnumber3())
         modalnavigate("/carouselpage4")}

     
        return (
        <>
        <div className="mainparentcontainer">
        <div className="medialanguagediv"> <span className="languagesettingesx2" onClick={()=> handlechangelng("es")}>ES</span><span className="dividerx2">|</span><span className="languagesettingdex" onClick={()=> handlechangelng("de")}> DE </span> <span className="dividerx">|</span><span className="languagesettingenx" onClick={()=> handlechangelng("en")}>EN </span></div>
           <button onClick={function(){window.scrollTo(0,0)}} className="scrolltotop"> <FontAwesomeIcon icon={faArrowUp} /> </button>
           <button onClick={function(){window.scrollTo(0,1000)}} className="scrolltobottom"> <FontAwesomeIcon icon={faArrowDown} /></button>
         
           <span className="backbtnspan">
        <Link to="/products" className="backbtn">  <span className="backbtn"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbuttonforpage"/>  <span className="backbtnword">{t("backbtn")} </span> </span> </Link></span>
           <div className="firstproductdiv"> 
           
           </div>
        <div className="productwrapper">
        <img src={"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"} alt="image could not load" className="productimg" onClick= {navigatetocarouselpageandsetarraytonumber1}/*{Setterforbigimage2}*//>
        
        <div className="lowerproductpagetext"> 
        <p className="oneline"> {t("house4location")}</p>
        <p className="oneline2"> {t("house4desc")}</p>
     
        <p className="firstproductdivpara"> {t("housephone")}</p>
        </div>
        </div>
     
        <div className="randomdiv">
     <h4> {t("randomdivfirstimgheading")} </h4>
     <fieldset className="fieldset"> {t("bedroom")} </fieldset>
              <img src={"https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80"}   className="smallimg"    onClick= {navigatetocarouselpageandsetarraytonumber2}/>
     <hr/>
     <fieldset> {t("livingroom")} </fieldset>
     <img className="smallimg2" src={"https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} onClick= {navigatetocarouselpageandsetarraytonumber3} />
            </div>
        </div>
     
        <div className="productpagediv"> 
     
      </div>
      
     <div className="lowerproductpagediv"> 
    
     
        </div>  
     
     
        </>
        )
        }


/* Code for Edinburgh Scottland */

        export function Modalcarousel5 (){
         const dispatch = useDispatch()
      
         let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
         let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)
            
      function Keydownforarray(event){
         if(event.key === "ArrowRight" && arrayselector < 3){
 
            document.body.style.overflowX ="hidden"
        
            dispatch(increment())
            dispatch(keyforarrayitemnumberinc());
         }
   
               else if (event.key === "ArrowLeft" && arrayselector > 1){
                  document.body.style.overflowX ="hidden"
      dispatch(decrement())
      dispatch(keyforarrayitemnumberdec())}}

      
       function Reduxstatesetinc(){
      dispatch(increment())
      dispatch(keyforarrayitemnumberinc())
         }
      
         function Reduxstatesetdec(){
            dispatch(decrement())
            dispatch(keyforarrayitemnumberdec())
         }
      
      
         return (<div className="carouselpageparentcontainer" tabIndex={0} onKeyDown={Keydownforarray}>
    
       
            <div className="backbuttondiv">
      <Link to="/products/5" className="backbuttonforcarousel"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbutton"/> {t("toproducts")} </Link>
            </div>
            <div className="carouselbuttondiv">
               <button onClick={Reduxstatesetdec} /* onClick={Go_through_array_reverse} */ style={{display: arrayselector /*currentindex*/ === 1 ? "none":"block"}} className="carouselbutton2" > <FontAwesomeIcon icon={faAngleLeft} className="carouselarrow2"/></button>
      <button onClick={Reduxstatesetinc}/* onClick={Go_through_array} */  style={{display: arrayselector
         /*currentindex*/ === 3? "none":"block"} } className="carouselbutton"> <FontAwesomeIcon icon={faAngleRight} className="carouselarrow"/></button>
      </div>
      
      <div className ="arraytrackdiv">
      <h4 className="arraytrack"> { arrayselector/*arrayitemnumber*/} / 3 </h4>
      </div>
      
      <img className={arrayselector/*currentindex*/ === 1? "carouselelement1" : "carouselremove" } src={"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
      <img className= {arrayselector/*currentindex*/ === 2? "carouselelement2" : "carouselremove"}  src={"https://images.unsplash.com/photo-1567002260451-50e05a6b031a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG9sZCUyMGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"}  />
      <img className={arrayselector/*currentindex*/ === 3? "carouselelement3" : "carouselremove"}  src={"https://images.unsplash.com/photo-1506730447-7683abca8434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}  />
         </div>)
      
      }
      


// code for the fifth house (Edinburgh, Scottland)

        export function Singleproduct5(){
         const dispatch = useDispatch()
         let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
         let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)
      let  modalnavigate = useNavigate()
   
            const { t, i18n } = useTranslation();
            let handlechangelng = function(lng){
         
                i18n.changeLanguage(lng)
                
                localStorage.setItem("lng",lng)
                }
            let [modal,setmodal] = useState("")
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
          
         
          function navigatetocarouselpageandsetarraytonumber2(){
            dispatch(keyforarrayitemnumber2())
            modalnavigate("/carouselpage5")}
         
            function navigatetocarouselpageandsetarraytonumber1(){
               dispatch(keyforarrayitemnumber1())
               modalnavigate("/carouselpage5")}
         
               function navigatetocarouselpageandsetarraytonumber3(){
                  dispatch(keyforarrayitemnumber3())
                  modalnavigate("/carouselpage5")}
         
            function Setter (event){
         
               setmodal(
               <div className="modalbg" style={activemodal} onClick={Setter4}>
               <div className="smallimgmodal7">
            
               <span className="modalclose3" onClick = {Setter4}>X</span>
              
            
              </div>
              
               </div> )}
                
         function Setter4 (event){
         
            setmodal("")}
         
            return (
            <>
            <div className="mainparentcontainer">
            <div className="medialanguagediv"> <span className="languagesettingesx2" onClick={()=> handlechangelng("es")}>ES</span><span className="dividerx2">|</span><span className="languagesettingdex" onClick={()=> handlechangelng("de")}> DE </span> <span className="dividerx">|</span><span className="languagesettingenx" onClick={()=> handlechangelng("en")}>EN </span></div>
               <button onClick={function(){window.scrollTo(0,0)}} className="scrolltotop"> <FontAwesomeIcon icon={faArrowUp} /> </button>
               <button onClick={function(){window.scrollTo(0,1000)}} className="scrolltobottom"> <FontAwesomeIcon icon={faArrowDown} /></button>
             
               <span className="backbtnspan">
            <Link to="/products" className="backbtn"> <span className="backbtn"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbuttonforpage"/>  <span className="backbtnword">{t("backbtn")}</span>  </span> </Link></span>
               <div className="firstproductdiv"> 
               
               </div>
            <div className="productwrapper" >
            <img src={"https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="image could not load" className="productimg" onClick={navigatetocarouselpageandsetarraytonumber1}/>
            
            <div className="lowerproductpagetext" > 
            <p className="oneline"> {t("house5location")}</p>
            <p className="oneline2"> {t("house5desc")}</p>
         
            <p className="firstproductdivpara"> {t("housephone")}</p>
            </div>
            </div>
         
            <div className="randomdiv">
         <h4> {t("randomdivfirstimgheading")} </h4>
         <fieldset className="fieldset" > {t("upperfloorbathroom")} </fieldset>
                  <img src={"https://images.unsplash.com/photo-1567002260451-50e05a6b031a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG9sZCUyMGJlZHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"}   className="smallimg"  onClick={navigatetocarouselpageandsetarraytonumber2}   />
         <hr/>
         <fieldset> {t("livingroom")} </fieldset>
         <img className="smallimg2" src={"https://images.unsplash.com/photo-1506730447-7683abca8434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"} onClick={navigatetocarouselpageandsetarraytonumber3} />
                </div>
            </div>
         
            <div className="productpagediv"> 
         
          </div>
          
         <div className="lowerproductpagediv"> 
          {modal}
         
            </div>  
         
         
            </>
            )
            }


      /*  Carousel page for Melbourne, Australia */

      export function Modalcarousel6 (){
         const dispatch = useDispatch()
         let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
         let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)
      
       function Reduxstatesetinc(){
      dispatch(increment())
      dispatch(keyforarrayitemnumberinc())
         }
      
         function Reduxstatesetdec(){
            dispatch(decrement())
            dispatch(keyforarrayitemnumberdec())
         }

         function Keydownforarray(event){
            if(event.key === "ArrowRight" && arrayselector < 3){
      
               document.body.style.overflowX ="hidden"
            
               dispatch(increment())
               dispatch(keyforarrayitemnumberinc());

               function hehe(){console.log("arrow right has been touched")}
               hehe()
             
            }
      
                  else if (event.key === "ArrowLeft" && arrayselector > 1){
                     document.body.style.overflowX ="hidden"
         dispatch(decrement())
         dispatch(keyforarrayitemnumberdec())}
      
      }
      
      
         return (<div className="carouselpageparentcontainer" tabIndex={0} onKeyDown={Keydownforarray}>
      
          
            <div className="backbuttondiv">
      <Link to="/products/6" className="backbuttonforcarousel"> <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbutton"/> {t("toproducts")} </Link>
            </div>
            <div className="carouselbuttondiv">
               <button onClick={Reduxstatesetdec}/* onClick={Go_through_array_reverse} */ style={{display: arrayselector /*currentindex*/ === 1 ? "none":"block"}} className="carouselbutton2" > <FontAwesomeIcon icon={faAngleLeft} className="carouselarrow2"/></button>
      <button onClick={Reduxstatesetinc}/* onClick={Go_through_array} */  style={{display: arrayselector
         /*currentindex*/ === 3? "none":"block"} } className="carouselbutton"> <FontAwesomeIcon icon={faAngleRight} className="carouselarrow"/></button>
      </div>
      
      <div className ="arraytrackdiv">
      <h4 className="arraytrack"> { arrayselector/*arrayitemnumber*/} / 3 </h4>
      </div>
      
      <img className={arrayselector/*currentindex*/ === 1? "carouselelement1" : "carouselremove" } src={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
      <img className= {arrayselector/*currentindex*/ === 2? "carouselelement2" : "carouselremove"}  src={"https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"}  />
      <img className={arrayselector/*currentindex*/ === 3? "carouselelement3" : "carouselremove"}  src={"https://images.unsplash.com/photo-1587316205943-b15dc52a12e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}  />
         </div>)
      
      }

    


// code for the 6th house (Melbourne, Australia)

            export function Singleproduct6(){
               const dispatch = useDispatch()
               let selectcurrentindex = useSelector((state) => state.keyforcurrentindexslice.count)
               let arrayselector = useSelector((state) => state.keyforcurrentindexslice.arrayitemnumber)

               let  modalnavigate = useNavigate()

                const { t, i18n } = useTranslation();
                let handlechangelng = function(lng){
             
                    i18n.changeLanguage(lng)
                    
                    localStorage.setItem("lng",lng)
                    }
                let [modal,setmodal] = useState("")
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
              

              function navigatetocarouselpageandsetarraytonumber2(){
               dispatch(keyforarrayitemnumber2())
               modalnavigate("/carouselpage6")}
            
               function navigatetocarouselpageandsetarraytonumber1(){
                  dispatch(keyforarrayitemnumber1())
                  modalnavigate("/carouselpage6")}
            
                  function navigatetocarouselpageandsetarraytonumber3(){
                     dispatch(keyforarrayitemnumber3())
                     modalnavigate("/carouselpage6")}
             
             
                return (
                <>
                <div className="mainparentcontainer">
                <div className="medialanguagediv"> <span className="languagesettingesx2" onClick={()=> handlechangelng("es")}>ES</span><span className="dividerx2">|</span><span className="languagesettingdex" onClick={()=> handlechangelng("de")}> DE </span> <span className="dividerx">|</span><span className="languagesettingenx" onClick={()=> handlechangelng("en")}>EN </span></div>
                   <button onClick={function(){window.scrollTo(0,0)}} className="scrolltotop"> <FontAwesomeIcon icon={faArrowUp} /> </button>
                   <button onClick={function(){window.scrollTo(0,1000)}} className="scrolltobottom"> <FontAwesomeIcon icon={faArrowDown} /></button>
                 
                   <span className="backbtnspan">
                <Link to="/products" className="backbtn"> <span className="backbtn">  <FontAwesomeIcon icon={faAngleLeft} className="arrowforbackbuttonforpage"/>  <span className="backbtnword">{t("backbtn")}</span> </span> </Link></span>
                   <div className="firstproductdiv"> 
                   
                   </div>
                <div className="productwrapper">
                <img src={"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="image could not load" className="productimg" onClick={navigatetocarouselpageandsetarraytonumber1}/>
                
                <div className="lowerproductpagetext"> 
                <p className="oneline"> {t("house6location")}</p>
                <p className="oneline2">  {t("house6desc")} </p>
             
                <p className="firstproductdivpara"> {t("housephone")}</p>
                </div>
                </div>
             
                <div className="randomdiv">
             <h4> {t("randomdivfirstimgheading")} </h4>
             <fieldset className="fieldset"> {t("bedroom")} </fieldset>
                      <img src={"https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"}   className="smallimg" onClick={navigatetocarouselpageandsetarraytonumber2}    />
             <hr/>
             <fieldset> {t("livingroom")} </fieldset>
             <img className="smallimg2" src={"https://images.unsplash.com/photo-1587316205943-b15dc52a12e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} onClick={navigatetocarouselpageandsetarraytonumber3}/>
                    </div>
                </div>
             
                <div className="productpagediv"> 
             
              </div>
              
             <div className="lowerproductpagediv"> 
              {modal}
             
                </div>  
             
             
                </>
                )
                }
        