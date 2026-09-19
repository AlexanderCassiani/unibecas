import "./header.css";
import flechaAbajo from "../../../assets/icons/home/flechaAbajo.svg";
import registrarmeIcon from "../../../assets/icons/home/registrarmeIcon.svg";
import Input from "../../../components/input/Input";
import { useState } from "react";

const Header = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const [usuario, setUsuario] = useState("");
  const [errorUsuario, setErrorUsuario] = useState(null);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);

  const [contrasenna, setContrasenna] = useState("");
  const [errorContrasenna, setErrorContrasenna] = useState(null);

  const cerrarModal = () => {
    setEstaAbierto(false);
  };

  const handleSubmit = () => {
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

  return (
    <header>
      <h2>Unibecas</h2>

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
              />
            </div>
            <div className="contenedor-input-registrarme">
              <Input
                id="contraseña"
                type="password"
                textoLabel="Contraseña"
                onChange={handleChangeContrasenna}
                error={errorContrasenna}
                className={errorContrasenna ? "input-error" : null}
              />
            </div>
            <button className="btn-registrarme" onClick={handleSubmit}>
              Registrarme
            </button>
            <p className="tiene-cuenta">
              ¿Ya tienes cuenta? <span>Inicia sesion</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
