import "./homeLayout.css";
import Hero from "../components/hero/Hero";
import infoBecasImg from "../../assets/icons/home/info-becas-icon.svg";

import personasCelebrando from "../../assets/images/home/personas-celebrando.jpg";

import Header from "../components/header/Header";

import PanelAccesible from "../../components/panelAccesible/PanelAccesible";

import BecaCard from "../../components/becaCard/Beca";

import { infoBecas, universidades, becas } from "../data";

import { useState } from "react";

const HomeLayout = () => {
  const [contenedorBecas, setContenedorBecas] = useState("mas-recientes");

  const mostrarBecasRecientes = () => {
    setContenedorBecas("mas-recientes");
  };

  const mostrarBecasPopulares = () => {
    setContenedorBecas("mas-populares");
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

      <section className="contenedor-sobre-nosotros">
        <div>
          <img src={personasCelebrando} alt="Personas celebrando" />
          <div>
            <h2>Becas disponibles</h2>
            <p>
              En UNIBECAS encontrarás diferentes becas y oportunidades
              educativas dirigidas a estudiantes de Cartagena. Consulta
              información sobre universidades, programas académicos, requisitos,
              beneficios y fechas de postulación para que puedas encontrar
              opciones que se adapten a tus metas.
            </p>
          </div>
        </div>

        <div className="sobre-unibecas">
          <h2>Sobre UNIBECAS</h2>
          <p>
            UNIBECAS es una plataforma creada para facilitar el acceso a
            información sobre becas y oportunidades educativas para los
            estudiantes de Cartagena. Reunimos en un solo lugar diferentes
            opciones de universidades, programas y beneficios para que encontrar
            una oportunidad sea más sencillo.
          </p>
          <p>
            Nuestro propósito es acercar a los estudiantes a nuevas
            posibilidades para continuar su formación académica, brindándoles
            información clara y organizada que les permita conocer sus opciones
            y tomar mejores decisiones sobre su futuro educativo.
          </p>
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

      <section className="seccion-becas">
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

        <div className="contenedor-becas">
          {becas.map((info) => (
            <BecaCard
              nombre={info.nombre_beca}
              fecha_craecion={info.fecha_creacion_sys}
              vigencia={info.vigencia_programa}
              descripcion={info.descripcion_informacion}
              info_aplicar={info.informacion_aplicar}
              modalidad={info.modalidad}
              estado={info.estado}
            />
          ))}
        </div>
      </section>

      <PanelAccesible />
    </div>
  );
};

export default HomeLayout;
