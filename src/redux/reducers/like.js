import {createSlice} from "@reduxjs/toolkit";

const heartSlice = createSlice({
    name:'heart',
     initialState: {
         data: []
     },
     reducers: {
         addHeart: (state,action) => {
             state.data = state.data.findIndex((item) => item.id === action.payload.id) > -1 ? [...state.data] : [...state.data, {...action.payload}]
         },
         deleteHeart : ((state, action) => {
             state.data = state.data.filter((item) => item.id !== action.payload.id)
         })
     }
})
export const {addHeart,deleteHeart} = heartSlice.actions
export default heartSlice.reducer