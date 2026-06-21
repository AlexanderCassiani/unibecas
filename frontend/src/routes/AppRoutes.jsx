import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../features/auth/pages/LoginPage'
import SignupPage from '../features/auth/pages/SignupPage'
import ForgotPassword from '../features/auth/pages/ForgotPassword'
import Perfil from '../features/perfil/Perfil'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes