import "./hero.css";
import Input from "../../../components/input/Input";
import heroImg from "../../../assets/images/home/hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-contenido">
        <div className="contenido-izquierda">
          <h1>
            Encuentra tu <span>beca</span> ideal
          </h1>
          <p>
            Explora becas de distintas universidades y encuentra oportunidades
            que se ajusten a tu carrera y necesidades.
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
        <div className="contenido-derecha">
          <img src={heroImg} alt="Mujer leyendo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
