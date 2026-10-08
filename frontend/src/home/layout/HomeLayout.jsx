import "./homeLayout.css";
import Hero from "../components/hero/Hero";
import infoBecasImg from "../../assets/icons/home/info-becas-icon.svg";

import senaLogo from "../../assets/images/home/sena-logo.png";
import rafaelLogo from "../../assets/images/home/rafael-nuñez-logo.png";
import unicartagenaLogo from "../../assets/images/home/unicartagena-logo.png";
import unicolomboLogo from "../../assets/images/home/unicolombo-logo.png";
import utbLogo from "../../assets/images/home/utb-logo.png";
import antonionariñologo from "../../assets/images/home/antonio-nariño-logo.png";
import areandinalogo from "../../assets/images/home/areandina-logo.png";
import autonomadenariñologo from "../../assets/images/home/autonoma-de-narino-logo.png";
import cienciasaplicadasambientaleslogo from "../../assets/images/home/ciencias-aplicadas-ambientales-logo.png";

import politecnicograncolombianologo from "../../assets/images/home/politecnico-grancolombiano-logo.png";
import sanbuenaventuralogo from "../../assets/images/home/san-buenaventura-logo.png";
import sinulogo from "../../assets/images/home/sinu-logo.png";
import tecnologicoconfenalcologo from "../../assets/images/home/tecnologico-confenalco-logo.png";
import unadLogo from "../../assets/images/home/unad-logo.png";
import unibellasarteslogo from "../../assets/images/home/uni-bellas-artes-logo.png";
import unilibertadoreslogo from "../../assets/images/home/uni-libertadores-logo.png";
import unilibrelogo from "../../assets/images/home/unilibre-logo.png";
import inimayorlogo from "../../assets/images/home/uni-mayor-logo.png";
import uniminutologo from "../../assets/images/home/uniminuto-logo.png";
import unipamplonaslogo from "../../assets/images/home/uni-pamplonas-logo.png";
import unitecnar from "../../assets/images/home/unitecnar-logo.png";

import personasCelebrando from "../../assets/images/home/personas-celebrando.jpg";

import Header from "../components/header/Header";

import PanelAccesible from "../../components/panelAccesible/PanelAccesible";

const HomeLayout = () => {
  const infoBecas = [
    {
      id: 1,
      titulo: "200+",
      description: "Becas para estudiar",
    },
    {
      id: 2,
      titulo: "20+",
      description: "Universidades afiliadas",
    },
    {
      id: 3,
      titulo: "150+",
      description: "Programas disponibles",
    },
  ];
  const universidades = [
    {
      logo: senaLogo,
      alt: "Logo del SENA",
      className: "",
    },
    {
      logo: rafaelLogo,
      alt: "Logo del Rafael Núñez",
      className: "",
    },
    {
      logo: unicartagenaLogo,
      alt: "Logo de la Universidad Cartagena",
      className: "",
    },
    {
      logo: unicolomboLogo,
      alt: "Logo de la Universidad Colombo",
      className: "unicolombo",
    },
    {
      logo: utbLogo,
      alt: "Logo de la UTB",
      className: "utb",
    },
    {
      logo: antonionariñologo,
      alt: "Logo de Antonio Nariño",
      className: "antonionariño",
    },
    {
      logo: areandinalogo,
      alt: "Logo de Areandina",
      className: "areandina",
    },
    {
      logo: autonomadenariñologo,
      alt: "Logo de la Universidad Autónoma de Nariño",
      className: "autonomadenariño",
    },
    {
      logo: cienciasaplicadasambientaleslogo,
      alt: "Logo de Ciencias Aplicadas Ambientales",
      className: "cienciasaplicadasambientales",
    },
    {
      logo: politecnicograncolombianologo,
      alt: "Logo del Politécnico Grancolombiano",
      className: "politecnicograncolombiano",
    },
    {
      logo: sanbuenaventuralogo,
      alt: "Logo de la Universidad San Buenaventura",
      className: "sanbuenaventura",
    },
    {
      logo: sinulogo,
      alt: "Logo de la Universidad del Sinú",
      className: "sinu",
    },
    {
      logo: tecnologicoconfenalcologo,
      alt: "Logo del Tecnológico de Confenalco",
      className: "tecnologicoconfenalco",
    },
    {
      logo: unadLogo,
      alt: "Logo de la Universidad Nacional",
      className: "unad",
    },
    {
      logo: unibellasarteslogo,
      alt: "Logo de la Universidad Bellas Artes",
      className: "unibellasartes",
    },
    {
      logo: unilibertadoreslogo,
      alt: "Logo de la Universidad Libertadores",
      className: "unilibertadores",
    },
    {
      logo: unilibrelogo,
      alt: "Logo de la Universidad Libre",
      className: "unilibre",
    },
    {
      logo: inimayorlogo,
      alt: "Logo de la Universidad Mayor",
      className: "unimayor",
    },
    {
      logo: uniminutologo,
      alt: "Logo de la Universidad Uniminuto",
      className: "uniminuto",
    },
    {
      logo: unipamplonaslogo,
      alt: "Logo de la Universidad de Pamplona",
      className: "unipamplonas",
    },
    {
      logo: unitecnar,
      alt: "Logo de la Universidad Tecnar",
      className: "unitecnar",
    },
  ];

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

      <PanelAccesible />
    </div>
  );
};

export default HomeLayout;
