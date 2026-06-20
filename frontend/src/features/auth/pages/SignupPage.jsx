import SignupForm from "../components/sigupForm/SignupForm"
import '../styles/signupPage.css'

const SignupPage = () => {
    return (
        <div className="signup-page">
            <h1>Registrarse</h1>
            <SignupForm />
        </div>
    )
}

export default SignupPage