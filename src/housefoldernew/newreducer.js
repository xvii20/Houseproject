import {configureStore,createSlice} from "@reduxjs/toolkit"


 
export const lolSlice = createSlice({
name:"leli" ,    // just set a name of the slice...
initialState: {value:{name:false}},
reducers:{
formchange: (state, action) => {
  state.value = action.payload
},
},
 
});
export const {formchange} =lolSlice.actions

