import "./homeLayout.css";
import Hero from "../components/hero/Hero";
import infoBecasImg from "../../assets/icons/home/info-becas-icon.svg";



import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import PanelAccesible from "../../components/panelAccesible/PanelAccesible";

import BecaCard from "../../components/becaCard/BecaCard";

import { useState, useEffect, useRef } from "react";

import { becas, becasPopulares, universidades, infoBecas } from "../data";

import arrowLeft from "../../assets/icons/home/arrow-left.svg";
import arrowRight from "../../assets/icons/home/arrow-right.svg";

import { Link } from "react-router-dom";

import encuentraBeca1 from "../../assets/images/home/encuentra-beca1.png";
import encuentraBeca2 from "../../assets/images/home/encuentra-beca2.png";
import encuentraBeca3 from "../../assets/images/home/encuentra-beca3.png";
import encuentraBeca4 from "../../assets/images/home/encuentra-beca4.png";
import encuentraBeca5 from "../../assets/images/home/encuentra-beca5.png";
import encuentraBeca6 from "../../assets/images/home/encuentra-beca6.png";
import encuentraBeca7 from "../../assets/images/home/encuentra-beca7.png";
import logoCompleto from "../../assets/images/home/unibecas-logo-completo.png";

import iconIngenieria from "../../assets/icons/home/ingenieria-icons.png";
import iconEconomia from "../../assets/icons/home/economia-icons.png";
import iconSalud from "../../assets/icons/home/salud-icons.png";
import iconComunicacion from "../../assets/icons/home/comunicacion-icons.png";
import iconEducacion from "../../assets/icons/home/educacion-icons.png";
import iconDerecho from "../../assets/icons/home/derecho-icons.png";

const imagenes = [
  encuentraBeca1,
  encuentraBeca2,
  encuentraBeca3,
  encuentraBeca4,
  encuentraBeca5,
  encuentraBeca6,
  encuentraBeca7,
  logoCompleto,
];

const HomeLayout = () => {
  const [contenedorBecas, setContenedorBecas] = useState("mas-recientes");
  const [actual, setActual] = useState(0);

  const contenedorRef = useRef(null);

  const siguiente = () => {
    setActual((actual + 1) % imagenes.length);
  };

  const anterior = () => {
    setActual((actual - 1 + imagenes.length) % imagenes.length);
  };

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setActual((numero) => (numero + 1) % imagenes.length);
    }, 3000);

    return () => clearTimeout(temporizador);
  }, [actual]);

  const mostrarBecasRecientes = () => {
    setContenedorBecas("mas-recientes");
  };

  const mostrarBecasPopulares = () => {
    setContenedorBecas("mas-populares");
  };

  const moverAIzquierda = () => {
    contenedorRef.current.scrollBy({
      left: -320,
    });
  };

  const moverADerecha = () => {
    contenedorRef.current.scrollBy({
      left: 320,
    });
  };

  return (
    <div className="home-layout">
      <Header />

      <Hero />

      <section className="contenedor-info-becas">
        {infoBecas.map((info) => (
          <div key={info.id} className="info-becas">
            <h2>
              <span className="icon-info-becas">
                <img src={infoBecasImg} alt="Icono de becas" />
              </span>
              <span>{info.titulo}</span>
            </h2>
            <p>{info.description}</p>
          </div>
        ))}
      </section>

      <section className="carrusel-becas">
        <button
          className="carrusel-becas-flecha carrusel-becas-flecha-izq"
          onClick={anterior}
        >
          <img
            className="carrusel-becas-flecha-img"
            src={arrowLeft}
            alt="Flecha izquierda"
          />
        </button>

        <img
          className="carrusel-becas-imagen"
          src={imagenes[actual]}
          alt={`Encuentra tu beca ${actual + 1}`}
        />

        <button
          className="carrusel-becas-flecha carrusel-becas-flecha-der"
          onClick={siguiente}
        >
          <img
            className="carrusel-becas-flecha-img"
            src={arrowRight}
            alt="Flecha derecha"
          />
        </button>
      </section>

      
<section className="contenedor-sobre-becas-ofertas" id="sobre-becas">
  <h2>Oferta académica</h2>
  <p className="descripcion-oferta">
    Explora diferentes áreas de estudio y encuentra oportunidades
    para alcanzar tus metas académicas.
  </p>

  <div className="contenedor-sobre-becas-ofertas-categorias">
    <div className="ingenieria-tecnologia tarjeta-categoria">
      <span className="icono-categoria">
        <img src={iconIngenieria} alt="Icono de ingeniería" />
      </span>
      <h3>Ingeniería y tecnología</h3>
      <p>Software, sistemas, datos e innovación digital.</p>
      <span className="flecha-categoria">
        <img src={arrowRight} alt="Flecha derecha" />
      </span>
    </div>

    <div className="economia-negocios tarjeta-categoria">
      <span className="icono-categoria">
        <img src={iconEconomia} alt="Icono de economía" />
      </span>
      <h3>Economía y negocios</h3>
      <p>Administración, finanzas y emprendimiento.</p>
      <span className="flecha-categoria">
        <img src={arrowRight} alt="Flecha derecha" />
      </span>
    </div>

    <div className="salud-bienestar tarjeta-categoria">
      <span className="icono-categoria">
        <img src={iconSalud} alt="Icono de salud y bienestar" />
      </span>
      <h3>Salud y bienestar</h3>
      <p>Programas relacionados con la salud y el bienestar.</p>
      <span className="flecha-categoria">
        <img src={arrowRight} alt="Flecha derecha" />
      </span>
    </div>

    <div className="comunicacion-diseño tarjeta-categoria">
      <span className="icono-categoria">
        <img src={iconComunicacion} alt="Icono de comunicación y diseño" />
      </span>
      <h3>Comunicación y diseño</h3>
      <p>Marketing, comunicación, artes y creatividad.</p>
      <span className="flecha-categoria">
        <img src={arrowRight} alt="Flecha derecha" />
      </span>
    </div>

    <div className="educacion-ciencias tarjeta-categoria">
      <span className="icono-categoria">
        <img src={iconEducacion} alt="Icono de educación y ciencias" />
      </span>
      <h3>Educación y ciencias</h3>
      <p>Enseñanza, investigación, idiomas y conocimiento.</p>
      <span className="flecha-categoria">
        <img src={arrowRight} alt="Flecha derecha" />
      </span>
    </div>

    <div className="derecho-idiomas tarjeta-categoria">
      <span className="icono-categoria">
        <img src={iconDerecho} alt="Icono de derecho e idiomas" />
      </span>
      <h3>Derecho e idiomas</h3>
      <p>Legislación, lenguas y relaciones internacionales.</p>
      <span className="flecha-categoria">
        <img src={arrowRight} alt="Flecha derecha" />
      </span>
    </div>
  </div>
</section>

      <div className="contenedor-universidades">
        <h2>Universidades afiliadas</h2>

        <section className="carrusel-universidades">
          <div className="carrusel-track">
            <div className="grupo-universidades">
              {universidades.map((universidad, index) => (
                <img
                  key={`primera-${index}`}
                  src={universidad.logo}
                  className={universidad.className}
                  alt={universidad.alt}
                />
              ))}
            </div>

            <div className="grupo-universidades" aria-hidden="true">
              {universidades.map((universidad, index) => (
                <img
                  key={`segunda-${index}`}
                  src={universidad.logo}
                  className={universidad.className}
                  alt={universidad.alt}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="seccion-becas" id="becas">
        <h2>Becas destacadas</h2>

        <div className="contenedor-botones">
          <button
            onClick={mostrarBecasRecientes}
            className={
              contenedorBecas === "mas-recientes" ? "seleccionado" : null
            }
          >
            Mas recientes
          </button>
          <button
            onClick={mostrarBecasPopulares}
            className={
              contenedorBecas === "mas-populares" ? "seleccionado" : null
            }
          >
            Mas populares
          </button>
        </div>

        <div
          className="contenedor-becas"
          key={contenedorBecas}
          ref={contenedorRef}
        >
          {contenedorBecas === "mas-recientes"
            ? becas.map((info) => (
                <Link
                  to={`/beca/${info.id_beca}`}
                  className="link-beca-card"
                  key={info.id_beca}
                >
                  <BecaCard
                    universidad={info.universidad}
                    nombre={info.nombre_beca}
                    fecha_creacion={info.fecha_creacion_sys}
                    vigencia={info.vigencia_programa}
                    descripcion={info.descripcion_informacion}
                    info_aplicar={info.informacion_aplicar}
                    modalidad={info.modalidad}
                    estado={info.estado}
                    cobertura={info.cobertura}
                  />
                </Link>
              ))
            : becasPopulares.map((info) => (
                <Link
                  to={`/beca/${info.id_beca}`}
                  className="link-beca-card"
                  key={info.id_beca}
                >
                  <BecaCard
                    universidad={info.universidad}
                    nombre={info.nombre_beca}
                    fecha_creacion={info.fecha_creacion_sys}
                    vigencia={info.vigencia_programa}
                    descripcion={info.descripcion_informacion}
                    info_aplicar={info.informacion_aplicar}
                    modalidad={info.modalidad}
                    estado={info.estado}
                    cobertura={info.cobertura}
                  />
                </Link>
              ))}
        </div>

        <div className="contenedor-arrows">
          <img src={arrowLeft} alt="Arrow left" onClick={moverAIzquierda} />
          <img src={arrowRight} alt="Arrow right" onClick={moverADerecha} />
        </div>
      </section>

      <Footer />

      <PanelAccesible />
    </div>
  );
};

export default HomeLayout;
