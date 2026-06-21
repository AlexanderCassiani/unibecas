import "./sigupForm.css";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../services/authService";

const SignupForm = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function handleSignup(evt) {
    evt.preventDefault();

    setError(null);
    setData(null);

    try {
      const result = await signup(usuario, email, password);
      setData(result.message);

      // limpiar formulario
      setUsuario("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
    <div className="contenedor-signup-form">
      <h3>Crear cuenta</h3>
      <p>Regístrate para comenzar a explorar becas</p>
      <form className="signup-form" onSubmit={handleSignup}>
        <Input
          type="text"
          placeholder="Nombre"
          className="input-login"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
        />

        <Input
          type="email"
          placeholder="correo@ejemplo.com"
          className="input-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <Input
          type="password"
          placeholder="**********"
          className="input-login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        {error && (
          <p style={{ color: "var(--danger)", marginTop: 0 }}>{error}</p>
        )}

        {data && (
          <p style={{ color: "var(--success)", marginTop: 0 }}>{data}</p>
        )}

        <Button
          title="Registrarse"
          text="Registrarse"
          className="btn-login"
          type="submit"
        />
      </form>

      <Link to="/login" className="login-link">
        Inicia sesión si ya tienes cuenta
      </Link>
    </div>
    <Link className="volver-al-inicio" to="/">← Volver al inicio</Link>
    </>
  );
};

export default SignupForm;
