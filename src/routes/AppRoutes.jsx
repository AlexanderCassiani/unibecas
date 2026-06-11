import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from '../features/auth/components/login_form/LoginForm'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes