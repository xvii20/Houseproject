import {configureStore,createSlice} from "@reduxjs/toolkit"
/* import { lolSlice } from "./newreducer"; */

export const CurrentIndexSlice = createSlice({

name:"currentindexslice",
initialState:  {count:0, arrayitemnumber:1,submittedform:false,submittedformtrue:true,sent:0},
reducers:{

    increment:(state) => {state.count = state.count + 1},
    decrement:(state) => {state.count = state.count - 1},
    keyforarrayitemnumberinc:(state) => {state.arrayitemnumber = state.arrayitemnumber + 1  },
    keyforarrayitemnumberdec:(state) => {state.arrayitemnumber = state.arrayitemnumber - 1  },
    keyforarrayitemnumber1:(state) => {state.arrayitemnumber = 1},
    keyforarrayitemnumber2:(state) => {state.arrayitemnumber = 2},
    keyforarrayitemnumber3:(state) => {state.arrayitemnumber = 3},
 keyforsent:(state) => {state.sent = state.sent + 1}


},

});

export const lolSlice = createSlice({
    name:"leli" ,    // just set a name of the slice...
    initialState: {value:{name:false,sent:2,login:false}},
    reducers:{
    formchange: (state, action) => {
      state.value = action.payload
    },
    },
     
    });


export let {increment,decrement,keyforarrayitemnumberinc,keyforarrayitemnumberdec,
    keyforarrayitemnumber1,keyforarrayitemnumber2,keyforarrayitemnumber3,keyforsent} = CurrentIndexSlice.actions

    export const {formchange} =lolSlice.actions

export let store = configureStore({

 reducer:{keyforcurrentindexslice:CurrentIndexSlice.reducer,xo:lolSlice.reducer

}   
})     