import "./sigupForm.css";

import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";

import { Link } from "react-router-dom";
import { useState } from "react";

import { signup } from "../../services/authService";

import SeePasswordIcon from "../../../../assets/icons/auth/SeePasswordIcon.svg";
import HidePasswordIcon from "../../../../assets/icons/auth/HidePasswordIcon.svg";

import Spinner from "../../../../components/spinner/Spinner";

const SignupForm = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(SeePasswordIcon);
  const [passwordType, setPasswordType] = useState("password");

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(SeePasswordIcon);
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const [loading, setLoading] = useState(false);

  async function handleSignup(evt) {
    evt.preventDefault();

    setError(null);
    setData(null);

    if (!usuario || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);
      
      const result = await signup(usuario, email, password);
      setData(result.message);

      // limpiar formulario
      setUsuario("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(
      showPassword === SeePasswordIcon ? HidePasswordIcon : SeePasswordIcon,
    );
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      showConfirmPassword === SeePasswordIcon
        ? HidePasswordIcon
        : SeePasswordIcon,
    );
    setConfirmPasswordType(
      confirmPasswordType === "password" ? "text" : "password",
    );
  };

  return (
    <>
      <div className="contenedor-signup-form">
        <h3>Crear cuenta</h3>
        <p>Regístrate para comenzar a explorar becas</p>
        <form className="signup-form" onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Nombre"
            className="input-login usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="username"
          />

          <Input
            type="email"
            placeholder="Correo"
            className="input-login email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div className="input-password-container">
            <Input
              type={passwordType}
              placeholder="Contraseña"
              className="input-login password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />

            <button
              type="button"
              className="see-password-btn"
              onClick={togglePasswordVisibility}
            >
              <img src={showPassword} alt="Ver contraseña" />
            </button>
          </div>

          <div className="input-password-container">
            <Input
              type={confirmPasswordType}
              placeholder="Confirmar contraseña"
              className="input-login password confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />

            <button
              type="button"
              className="see-password-btn"
              onClick={toggleConfirmPasswordVisibility}
            >
              <img
                src={showConfirmPassword}
                alt={
                  showConfirmPassword === SeePasswordIcon
                    ? "Ver contraseña"
                    : "Ocultar contraseña"
                }
              />
            </button>
          </div>

          <div className="message-container">
            {error && (
              <p style={{ color: "var(--danger)", margin: 0 }}>{error}</p>
            )}

            {data && (
              <p style={{ color: "var(--success)", margin: 0 }}>{data}</p>
            )}
          </div>

          <Button
            title="Registrarse"
            text={
              loading ? (
                <>
                  <Spinner />
                  Registrando...
                </>
              ) : (
                "Registrarse"
              )
            }
            className="btn-signup btn-login"
            type="submit"
          />
        </form>

        <Link to="/login" className="login-link">
          Inicia sesión si ya tienes cuenta
        </Link>
      </div>
      <Link className="volver-al-inicio" to="/">
        ← Volver al inicio
      </Link>
    </>
  );
};

export default SignupForm;
