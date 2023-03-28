import {createSlice} from "@reduxjs/toolkit";

const soldSlice = createSlice({
    name:'sold',
    initialState: {
        data:[]
    },
    reducers: {
        getSold: ((state,action) => {
            state.data = action.payload
            state.data = state.data.filter((item) => item.sale === true).map((item) => item)
        })
    }
})
export const {getSold}  = soldSlice.actions
export default soldSlice.reducer