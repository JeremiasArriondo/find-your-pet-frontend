import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pets from "../pages/pets/Pets";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login'>
                <Route
                    path=''
                    element={ <Login/> }
                />
            </Route>
            <Route
                path=''
                element={
                    <Layout/>
                }
            >
                <Route path='pets' element={ <Pets/> } />
                <Route path='home' element={ <Home/> } />
            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter;