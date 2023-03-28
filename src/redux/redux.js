import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cart from './reducers/cart'
import basket from './reducers/basket'
import storage from 'redux-persist/lib/storage'
import heart from './reducers/like'
import sale from "./reducers/sale";
import top from  "./reducers/top"
import sold from "./reducers/sold";
import {persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key:'root',
    storage,
 
}
const rootReducer = combineReducers({
    cart,
    basket,
    heart,
    sale,
    sold,
    top,

})
const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                // Ignore these action types
            },
        }),
})
export const persist = persistStore(store)
export default store
