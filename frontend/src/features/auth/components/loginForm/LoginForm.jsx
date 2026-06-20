import './loginForm.css'
import Input from '../../../../components/input/Input'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className='contenedor-login-form'>
            <form className='signup-form'>
                <Input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className='input-login'
                    autoComplete='username'
                />
                <Input
                    type="password"
                    placeholder="**********"
                    className='input-login'
                    autoComplete='current-password'
                />
                <Button
                    title="Iniciar sesión"
                    text="Iniciar sesión"
                    className="btn-login"
                />
            </form>

            <div className='opciones-login'>
                <Link
                    to="/forgot-password"
                    className='forgot-password-link'>
                    ¿Olvidaste tu contraseña?
                </Link>
                
                <Link
                    to="/signup"
                    className='signup-link'>
                    ¿No tienes cuenta? Regístrate
                </Link>
            </div>
        </div>
    )
}

export default LoginForm