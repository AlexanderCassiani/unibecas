import './loginForm.css'
import Input from '../../../../components/input/Input'
import Button from '../../../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../services/authService'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (evt) => {
        evt.preventDefault()

        try {
            await login(email, password)
            navigate('/perfil')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='contenedor-login-form'>
            <form className='signup-form'>
                <Input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className='input-login'
                    autoComplete='username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="**********"
                    className='input-login'
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    title="Iniciar sesión"
                    text="Iniciar sesión"
                    className="btn-login"
                    onClick={handleLogin}
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