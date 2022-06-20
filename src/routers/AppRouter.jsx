import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Help from '../pages/help/Help';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NotFound from '../pages/notFound/NotFound';
import Profile from '../pages/profile/Profile';
import Pets from '../pages/pets/Pets';
import Register from '../pages/register/Register';
import Buscados from '../pages/petsWanted/Buscados';
import Encontrados from '../pages/petsFound/Encontrados';
import RedirectLogin from './RedirectLogin';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login'>
                    <Route path=''
                        element={
                        <RedirectLogin>
                            <Login />
                        </RedirectLogin>
                        }
                    />
                </Route>
                <Route path=''
                    element={
                    <PrivateRoute>
                        <Layout />
                    </PrivateRoute>
                    }>
                    <Route index path='pets' element={<Pets />} />
                    <Route path='found' element={<Encontrados />} />
                    <Route path='wanted' element={<Buscados />} />
                    <Route path='help' element={<Help />} />
                    <Route path='profile' element={<Profile/>} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
