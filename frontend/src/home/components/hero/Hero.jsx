import "./hero.css";
import Input from "../../../components/input/Input";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-contenido">
        <h1>
          Encuentra tu <span>beca</span> ideal
        </h1>
        <p>
          Explora becas de distintas universidades y encuentra oportunidades que
          se ajusten a tu carrera y necesidades.
        </p>
        <div className="hero-buscador">
          <Input
            id="buscador"
            type="text"
            textoLabel="Buscar becas"
            placeholder="Ingeniería, Medicina, Programación..."
            className="buscador-input"
          />
          <button className="buscador-boton">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
