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
        const [data, setData] = useState(null)
        const [error, setError] = useState('')


        async function handleSignup(evt) {
            evt.preventDefault()

            setData(null)
            setError('')

            try {
                const data = await signup(usuario, email, password)
                setData(data)
                console.log(data)
            } catch (error) {
                setError(error.message)
            }
        }
        
        return (
            <div className='contenedor-login-form'>
                <form className='signup-form' onSubmit={handleSignup}>
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
                        autoComplete='email'
                        />
                    <Input
                        type="password"
                        placeholder="**********"
                        className='input-login'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                    />

                    {
                    error ? 
                    <p className='error-message' style={{ color: 'var(--danger)', marginTop: 0 }}>
                        {error}
                    </p> : 
                    data ? 
                    <p className='success-message' style={{ color: 'var(--success)', marginTop: 0 }}>
                        {data.message}
                    </p> : 
                    null
                    }

                    <Button
                        title="Registrarse"
                        text="Registrarse"
                        className="btn-login"
                        type="submit"
                    />
                </form>

                <Link
                    to="/login"
                    className='login-link'>
                    Inicia sesión si ya tienes cuenta
                </Link>
            </div>
        )
    }

    export default SignupForm