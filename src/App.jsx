import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/authContext';

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default App;
