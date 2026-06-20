import './sigupForm.css'
import Input from '../../../../components/input/Input'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'

const SignupForm = () => {
    return (
        <div className='contenedor-login-form'>
            <form className='signup-form'>
                <Input
                    type="text"
                    placeholder="Nombre"
                    className='input-login'
                />

                <Input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className='input-login'
                />
                <Input
                    type="password"
                    placeholder="**********"
                    className='input-login'
                />
                <Button
                    title="Registrarse"
                    text="Registrarse"
                    className="btn-login"
                />
            </form>

            <Link
                to="/"
                className='login-link'>
                Inicia sesión si ya tienes cuenta
            </Link>
        </div>
    )
}

export default SignupForm