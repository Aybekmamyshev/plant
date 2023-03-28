import {createSlice} from "@reduxjs/toolkit";

const  topSlice = createSlice({
    name:'top',
    initialState: {
        dataP: []
    },
    reducers: {

        getNewProducts: (state,action) => {
            state.datP = action.payload
            state.datP = state.datP.filter((item) => item.new === true).map((item) => item)
        }
    }
})
export const {getNewProducts} = topSlice.actions
export default   topSlice.reducer