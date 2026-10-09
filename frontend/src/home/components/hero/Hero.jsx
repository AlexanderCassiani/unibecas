import "./hero.css";
import Input from "../../../components/input/Input";
import heroImg from "../../../assets/images/home/hero-img.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const frases = ["beca ideal", "futuro", "próxima meta"];

  const [texto, setTexto] = useState("");
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    const fraseActual = frases[indiceFrase];

    let velocidad = borrando ? 50 : 100;

    // Esperar cuando termine de escribir
    if (!borrando && texto === fraseActual) {
      velocidad = 1500;
    }

    // Pequeña pausa antes de la siguiente frase
    if (borrando && texto === "") {
      velocidad = 300;
    }

    const temporizador = setTimeout(() => {
      if (!borrando && texto === fraseActual) {
        setBorrando(true);
        return;
      }

      if (borrando && texto === "") {
        setBorrando(false);

        setIndiceFrase((indiceFrase + 1) % frases.length);

        return;
      }

      setTexto(
        borrando ? texto.slice(0, -1) : fraseActual.slice(0, texto.length + 1),
      );
    }, velocidad);

    return () => clearTimeout(temporizador);
  }, [texto, indiceFrase, borrando]);

  return (
    <div className="hero">
      <div className="hero-contenido">
        <div className="contenido-izquierda">
          <h1>
            Encuentra tu <span className="typing-text">{texto}</span>
            <span className="typing-cursor" />
          </h1>
          <p>
            Explora becas de distintas universidades y encuentra oportunidades
            que se ajusten a tu carrera y necesidades.
          </p>

          <div className="hero-buscador">
            <h2>Buscar becas</h2>
            <div>
              <select>
                <option value="" defaultValue>
                  Facultad
                </option>
              </select>
              <select>
                <option value="" defaultValue>
                  Tipo de formacion
                </option>
              </select>
              <select>
                <option value="" defaultValue>
                  Sede
                </option>
              </select>
            </div>
            <Input
              id="buscador"
              type="text"
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
