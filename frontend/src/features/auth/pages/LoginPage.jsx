import '../styles/loginPage.css'
import LoginForm from "../components/loginForm/LoginForm"

const LoginPage = () => {
    return (
        <div className='login-page'>
            <h2>UNI<span>BECAS</span></h2>
            <LoginForm />
        </div>
    )
}

export default LoginPage