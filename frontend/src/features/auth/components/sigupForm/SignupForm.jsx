    import './sigupForm.css'
    import Input from '../../../../components/input/Input'
    import Button from '../../../../components/button/Button'
    import { Link } from 'react-router-dom'
    import { useState } from 'react'
    import { signup } from '../../services/authService'

    const SignupForm = () => {
        const [usuario, setUsuario] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')

        async function handleSignup(evt) {
            evt.preventDefault()

            try {
                const data = await signup(usuario, email, password)
                console.log(data)
            } catch (error) {
                setError(error.message)
            }
        }
        
        return (
            <div className='contenedor-login-form'>
                <form className='signup-form'>
                    <Input
                        type="text"
                        placeholder="Nombre"
                        className='input-login'
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        autoComplete='username'
                    />

                    <Input
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className='input-login'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='username'
                        />
                    <Input
                        type="password"
                        placeholder="**********"
                        className='input-login'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                    />

                    {error && <p className='error-message' style={{ color: 'red', marginTop: 0 }}>{error}</p>}

                    <Button
                        title="Registrarse"
                        text="Registrarse"
                        className="btn-login"
                        onClick={handleSignup}
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