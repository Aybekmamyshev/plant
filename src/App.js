import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import "./style.scss"
import {Suspense} from "react";
 import "i18next"
import Wrapper from "./Components/Shop/Wrapper/Wrapper";
import Shop from "./Components/Shop/Shop";
import Basket from "./Components/Basket/Basket";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Like from "./Components/Like/Like";

function App() {

    // const router = createBrowserRouter(
    //     createRouter(
    //
    //     )
    //
    // )
  return (
    <Suspense fallback={'...loading'} className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/shop'} element={<Shop/>}/>
                <Route path={'/basket'} element={<Basket/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/like'} element={<Like/>}/>
            </Route>
        </Routes>
        {/*<RouterProvider router={router}/>*/}
    </Suspense>
  );
}

export default App;
