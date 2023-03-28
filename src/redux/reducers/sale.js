import {createSlice} from "@reduxjs/toolkit";


const saleSlice = createSlice({

    name: 'sale',
    initialState: {
        data: [],
        count: 0,
    },
    reducers: {
         addToShop: (state, action) => {
               state.data = [ {...action.payload, count : 1}]
         },
        plusCount : (state,action) => {
              state.data = state.data.map((item) => {
                  if (item.id === action.payload.id){
                      return {...item,count:item.count + 1}
                  }else {
                      return item
                  }
              })
            state.count = state.data.reduce((acc,rec) => {
                return acc + rec.count
            },0)
        },
           minusCount: (state, action) => {
               state.data = state.data.map((item) => {
                   if (item.id === action.payload.id){
                       return {...item, count:item.count - 1}
                   }else {
                       return item
                   }
               })
               state.count =  state.data.reduce((acc,rec)=> {
                   return acc + rec.count
               },0)
           }
    }
})
export const {addToShop,plusCount,minusCount} = saleSlice.actions
export default saleSlice.reducer