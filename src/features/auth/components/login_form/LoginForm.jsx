import Input from '../../../../components/input/Input'

const LoginForm = () => {
    return (
        <div className='login-form'>
            <form>
                <h2>Iniciar Sesión</h2>
                <Input type="email" placeholder="correo@ejemplo.com" />
                <Input type="password" placeholder="********" />
            </form>
        </div>
    )
}

export default LoginForm