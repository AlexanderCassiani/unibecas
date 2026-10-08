import "./header.css";
import flechaAbajo from "../../../assets/icons/home/flechaAbajo.svg";
import registrarmeIcon from "../../../assets/icons/home/registrarmeIcon.svg";
import Input from "../../../components/input/Input";
import { useState } from "react";

import seePassword from "../../../assets/icons/home/see-password.svg";
import hidePassword from "../../../assets/icons/home/hide-password.svg";

const Header = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  // estados del los inputs del modal de registrarme
  const [usuario, setUsuario] = useState("");
  const [errorUsuario, setErrorUsuario] = useState(null);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);

  const [contrasenna, setContrasenna] = useState("");
  const [errorContrasenna, setErrorContrasenna] = useState(null);

  const [mostrarModal, setMostrarModal] = useState("registrarme");

  // estados de los inputs del modal de login
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [errorUsuarioLogin, setErrorUsuarioLogin] = useState(null);

  const [contrasennaLogin, setContrasennaLogin] = useState("");
  const [errorContrasennaLogin, setErrorContrasennaLogin] = useState(null);

  // type y el icono del modal login
  const [inputLoginType, setInputLoginType] = useState("password");
  const [loginPasswordIcon, setLoginPasswordIcon] = useState(seePassword);

  // type y el icono del modal registrarme
  const [inputRegistrarmeType, setInputRegistrarmeType] = useState("password");
  const [registrarPasswordIcon, setRegistrarmePasswordIcon] =
    useState(seePassword);

  const cerrarModal = () => {
    setEstaAbierto(false);
  };

  const handleRegister = () => {
    setErrorUsuario(null);
    setErrorEmail(null);
    setErrorContrasenna(null);

    if (!usuario.trim()) {
      setErrorUsuario("¡Oops! debes llenar este campo");
    }

    if (!email.trim()) {
      setErrorEmail("¡Oops! debes llenar este campo");
    }

    if (!contrasenna.trim()) {
      setErrorContrasenna("¡Oops! debes llenar este campo");
    }
  };

  const handleChangeUsuario = (e) => {
    const nuevoUsuario = e.target.value;

    setUsuario(nuevoUsuario);

    if (nuevoUsuario.trim()) {
      setErrorUsuario(null);
    } else {
      setErrorUsuario("¡Oops! debes llenar este campo");
    }
  };

  const handleChangeEmail = (e) => {
    const nuevoEmail = e.target.value;

    setEmail(nuevoEmail);

    if (nuevoEmail.trim()) {
      setErrorEmail(null);
    } else {
      setErrorEmail("¡Oops! debes llenar este campo");
    }
  };

  const handleChangeContrasenna = (e) => {
    const nuevaContrasenna = e.target.value;

    setContrasenna(nuevaContrasenna);

    if (nuevaContrasenna.trim()) {
      setErrorContrasenna(null);
    } else {
      setErrorContrasenna("¡Oops! debes llenar este campo");
    }
  };

  const handleLogin = () => {
    if (!usuarioLogin.trim()) {
      setErrorUsuarioLogin("¡Oops! debes llenar este campo");
    }
    if (!contrasennaLogin.trim()) {
      setErrorContrasennaLogin("¡Oops! debes llenar este campo");
    }
  };

  const handleChangeUsuarioLogin = (e) => {
    const usuario = e.target.value;

    setUsuarioLogin(usuario);

    if (usuario.trim()) {
      setErrorUsuarioLogin(null);
    } else {
      setErrorUsuarioLogin("¡Oops! debes llenar este campo");
    }
  };

  const handleChangeContrasennaLogin = (e) => {
    const contrasenna = e.target.value;

    setContrasennaLogin(contrasenna);

    if (contrasenna.trim()) {
      setErrorContrasennaLogin(null);
    } else {
      setErrorContrasennaLogin("¡Oops! debes llenar este campo");
    }
  };

  const changeLoginInputType = () => {
    setInputLoginType(inputLoginType === "password" ? "text" : "password");
    setLoginPasswordIcon(
      loginPasswordIcon === seePassword ? hidePassword : seePassword,
    );
  };

  const changeRegistrarmeInputType = () => {
    setInputRegistrarmeType(
      inputRegistrarmeType === "password" ? "text" : "password",
    );
    setRegistrarmePasswordIcon(
      registrarPasswordIcon === seePassword ? hidePassword : seePassword,
    );
  };

  return (
    <header>
      <h2>UniBecas</h2>

      <nav>
        <ul>
          <li>
            <span>Programas</span>
            <img src={flechaAbajo} alt="Flecha abajo" />
          </li>
          <li>
            <span>Universidades</span>
            <img src={flechaAbajo} alt="Flecha abajo" />
          </li>
        </ul>
      </nav>

      <div className="contenedor-registrarme">
        <button
          onClick={() => setEstaAbierto(!estaAbierto)}
          className="btn-registrarme"
        >
          <span>Registrarme</span>
          <img src={registrarmeIcon} alt="Icono de registrarme" />
        </button>

        <div className={`modal ${estaAbierto ? "abrir-modal" : ""}`}>
          {mostrarModal === "registrarme" ? (
            <div>
              <h3>
                <span>Registrarme</span>
                <span className="cerrar-modal" onClick={cerrarModal}>
                  x
                </span>
              </h3>
              <div className="contenedor-input-registrarme">
                <Input
                  id="nombre"
                  textoLabel="Nombre"
                  onChange={handleChangeUsuario}
                  error={errorUsuario}
                  className={errorUsuario ? "input-error" : null}
                  placeholder="Nombre"
                />
              </div>
              <div className="contenedor-input-registrarme">
                <Input
                  id="Email"
                  type="email"
                  textoLabel="Correo"
                  onChange={handleChangeEmail}
                  error={errorEmail}
                  className={errorEmail ? "input-error" : null}
                  placeholder="ejemplo@gmail.com"
                />
              </div>
              <div className="contenedor-input-registrarme input-password">
                <Input
                  id="contraseña"
                  type={inputLoginType}
                  textoLabel="Contraseña"
                  onChange={handleChangeContrasenna}
                  error={errorContrasenna}
                  className={errorContrasenna ? "input-error" : null}
                  placeholder="*******"
                />
                <img
                  src={loginPasswordIcon}
                  alt=""
                  onClick={changeLoginInputType}
                />
              </div>
              <button className="btn-registrarme" onClick={handleRegister}>
                Registrarme
              </button>
              <p className="tiene-cuenta">
                <span>¿Ya tienes cuenta? </span>
                <span className="link" onClick={() => setMostrarModal("login")}>
                  Inicia sesion
                </span>
              </p>
            </div>
          ) : (
            <div>
              <h3>
                <span>Iniciar sesion</span>
                <span className="cerrar-modal" onClick={cerrarModal}>
                  x
                </span>
              </h3>

              <div className="contenedor-input-registrarme">
                <Input
                  id="usuario"
                  value={usuarioLogin}
                  textoLabel="Usuario"
                  onChange={handleChangeUsuarioLogin}
                  error={errorUsuarioLogin}
                />
              </div>

              <div className="contenedor-input-registrarme input-password">
                <Input
                  type={inputRegistrarmeType}
                  value={contrasennaLogin}
                  id="contraseña"
                  textoLabel="Contraseña"
                  onChange={handleChangeContrasennaLogin}
                  error={errorContrasennaLogin}
                />
                <img
                  src={registrarPasswordIcon}
                  alt=""
                  onClick={changeRegistrarmeInputType}
                />
              </div>

              <button className="btn-registrarme" onClick={handleLogin}>
                Iniciar sesion
              </button>

              <p className="tiene-cuenta">
                <span>¿No tienes cuenta? </span>
                <span
                  className="link"
                  onClick={() => setMostrarModal("registrarme")}
                >
                  Registrate
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
