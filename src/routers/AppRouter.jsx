import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Help from '../pages/help/Help';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NotFound from '../pages/notFound/NotFound';
import Profile from '../pages/profile/Profile';
import Pets from '../pages/pets/Pets';
import Register from '../pages/register/Register';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login'>
                    <Route path='' element={<Login />} />
                </Route>
                <Route path='/register'>
                    <Route path='' element={ <Register/> } />
                </Route>
                <Route path='' element={<Layout />}>
                    <Route path='pets' element={<Pets />} />
                    <Route path='home' element={<Home />} />
                    <Route path='help' element={<Help />} />
                    <Route path='profile' element={<Profile/>} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
