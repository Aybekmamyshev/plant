import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: []
    },
    reducers: {
       getProduct:(state,action) => {
           state.data = action.payload
       }

    }

})


export const {getProduct} = cartSlice.actions
export default cartSlice.reducer