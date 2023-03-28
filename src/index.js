import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux";
import Context from "./Context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
         <Context>
             <BrowserRouter>
                     <App />
             </BrowserRouter>
         </Context>
    </Provider>


 );

