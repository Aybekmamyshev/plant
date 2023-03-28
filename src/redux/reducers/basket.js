import {createSlice} from "@reduxjs/toolkit";
import total from "../../Components/Basket/Total/Total";

const cartSlice = createSlice({
    name: 'basket',
    initialState: {
        data: [],
        total: 0,
        count: 0,
        totalPrice: 0
    },
     reducers: {
        addCart : (state,action) =>{
            state.data =  state.data.findIndex((item) => item.id === action.payload.id) > -1 ? alert('Уже есть ') : [...state.data, {...action.payload, count: 1} ];
            state.count = state.data.reduce((acc,rec) => {
                return acc + rec.count
            },0 )
            state.totalPrice = state.data.reduce((acc,rec) => {
                return (rec.price * rec.count) + acc
            },0)
        },
        removeCart: ((state,action) => {
          state.data = state.data.filter((item) => item.id !== action.payload)
            state.count = state.count - 1
            state.totalPrice = state.data.reduce((acc,item) => {
                return (item.price - acc)
            },0)
            state.total = 0

        }),
         addCount: ((state,action) => {
             state.data = state.data.map((item) => {
                 if (item.id === action.payload.id){
                     return {...item, count:item.count + 1}
                 }
                 return item
             })
             state.total = state.data.reduce((acc,rec) => {
                 return  rec.count *  rec.price + acc
             },0)
             state.totalPrice = state.data.reduce((acc,rec) => {
                 return  rec.price * rec.count + acc
             },0)


         }),
         removeCount: ((state,action) => {
             state.data = state.data.map((item) => {
                 if (item.id === action.payload.id){
                     return {...item, count:item.count - 1}
                 }
                 return item
             })
             state.total =  state.total - state.data.map((item) => item.price )
             state.totalPrice =  state.totalPrice - state.data.map((item) => item.price )
         }),
         clearCart: (state) => {
                 state.data = []
                 state.total = 0
                 state.count = 0
                 state.totalPrice = 0

         }
    }

})


export const {addCart,removeCart,addCount,removeCount,clearCart} = cartSlice.actions
export default cartSlice.reducer