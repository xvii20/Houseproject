
import './contacts.css';
import React from 'react';
import {Form, Navbar,Secondhalf} from './component.js';
import { useState } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,keyforarrayitemnumber1,keyforarrayitemnumber2,keyforarrayitemnumber3,formchange,keyforsent} from "./store"
import i18next from "./i18next"
import { useTranslation, initReactI18next, I18nContext,Trans } from "react-i18next";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 


export function Formy() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const changeformstate = useSelector((state) =>state.xo.value)
    const sentkey = useSelector((state) =>state.keyforcurrentindexslice)




return (<>
<div className={changeformstate.name? "afterformsubmitteddiv" : "sortremoveclass" } > <p>{sentkey.sent> 1?  <p> {i18next.t('formsubmittedmessageagain', { valuemustchange: sentkey.sent })}</p>   : <Trans>{t("formsubmittedmessage")} </Trans>}</p> </div>

<div className= "newdivy"> 
<Form />
 {/* <Secondhalf /> */}

</div>


</>)

}
  
