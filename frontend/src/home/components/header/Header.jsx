import "./header.css";
import flechaAbajo from "../../../assets/icons/home/flechaAbajo.svg";
import registrarmeIcon from "../../../assets/icons/home/registrarmeIcon.svg";
import { useState } from "react";

const Header = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

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
          <h3>Registrarme</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel
            quisquam voluptatum, quasi ad ea pariatur. Quo enim velit iste
            dolorum doloremque suscipit rerum possimus, voluptatibus illo
            reiciendis, a ut. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusamus voluptatibus dolorem ducimus fugiat neque fuga
            repellendus quam. Veniam eos obcaecati rem sed, beatae illo
            quibusdam saepe temporibus, rerum blanditiis nam.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
