import "./loginForm.css";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/authService";
import SeePasswordIcon from "../../../../assets/icons/auth/SeePasswordIcon.svg";
import HidePasswordIcon from "../../../../assets/icons/auth/HidePasswordIcon.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(SeePasswordIcon);
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const handleLogin = async (evt) => {
    evt.preventDefault();
    setError(null);

    try {
      await login(email, password);

      navigate("/perfil");
    } catch (error) {
      setError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword === SeePasswordIcon ? HidePasswordIcon : SeePasswordIcon);
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
    <div className="contenedor-login-form">
      <h3>Bienvenido de vuelta</h3>
      <p>Inicia sesión para seguir explorando becas</p>
      <form className="signup-form" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Correo"
          className="input-login email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <div className="input-password-container">
          <Input
          type={passwordType}
          placeholder="Contraseña"
          className="input-login password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" className="see-password-btn" onClick={togglePasswordVisibility}>
            <img src={showPassword} alt={showPassword === SeePasswordIcon ? "Ver contraseña" : "Ocultar contraseña"} />
          </button>
        </div>

        {error && (
          <p style={{ color: "var(--danger)", marginTop: 0 }}>{error}</p>
        )}

        <Button
          title="Iniciar sesión"
          text="Iniciar sesión"
          className="btn-login"
          type="submit"
        />
      </form>

      <div className="opciones-login">
        <Link to="/forgot-password" className="forgot-password-link">
          ¿Olvidaste tu contraseña?
        </Link>

        <Link to="/signup" className="signup-link">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>

    </div>

    <Link className="volver-al-inicio" to="/">← Volver al inicio</Link>
    </>
  );
};

export default LoginForm;
