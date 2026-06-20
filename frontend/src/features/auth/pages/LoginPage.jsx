import '../styles/loginPage.css'
import LoginForm from "../components/loginForm/LoginForm"

const LoginPage = () => {
    return (
        <div className='login-page'>
            <h1>Iniciar Sesión</h1>
            <LoginForm />
        </div>
    )
}

export default LoginPage