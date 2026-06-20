import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../features/auth/pages/LoginPage'
import SignupPage from '../features/auth/pages/SignupPage'
import ForgotPassword from '../features/auth/pages/ForgotPassword'
import Becas from '../features/becas/Becas'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/becas" element={<Becas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes