import Input from '../../../../components/input/Input'

const LoginForm = () => {
    return (
        <div className='login-form'>
            <form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default LoginForm