import { useTranslation, initReactI18next, I18nContext,Trans } from "react-i18next";
import i18next from "./i18next"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { useSwipeable } from "react-swipeable";

/*  <h3 className="h3text1" >{t("aboutheading")}</h3>
 
 <h3 className="h3text2">{t("aboutheading2")} </h3>
 <h3 className="h3text3"> {t("aboutheading3")}</h3> */

function Aboutcompo (){
    let {t, i18n} = useTranslation();



 
       return (<>
      

       <div className="topparentdiv" >


       <LazyLoadImage className={"firstdivimage"}

effect="blur"
      src={"https://images.unsplash.com/photo-1521815049196-8a76f26a2135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1521815049196-8a76f26a2135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}
      />


<LazyLoadImage className={"firstdivimage2"}

effect="blur"
      src={"https://images.unsplash.com/photo-1485809686085-0fb7a34fee52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1485809686085-0fb7a34fee52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"}
      />

<LazyLoadImage className={"firstdivimage2"}

effect="blur"
      src={"https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      />



<LazyLoadImage className={"firstdivimage2"}

effect="blur"
      src={"https://images.unsplash.com/photo-1600573472556-e636c2acda88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
   } // use normal <img> attributes as props
   placeholderSrc={"https://images.unsplash.com/photo-1600573472556-e636c2acda88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
      />


 </div>

 <div className="seconddiv"> 
 <div className="darkoverlayforsecondinnerdiv"> 


 <h1 className="xaboutus"> {t("aboutus")}</h1>
 <div className="hrdiv">
 <hr className="hrline"/> 
 </div>


 


 <div className="xaboutusparentdiv">

 <div className="xaboutusdescinnerdiv">
 <h2 className="xaboutusdesc"> {t("aboutusdesc")}</h2>
 </div>
 
 </div>

 </div>
 </div>
</>)
}


      

  export default Aboutcompo