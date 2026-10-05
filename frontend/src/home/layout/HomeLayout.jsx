import "./homeLayout.css";
import Hero from "../components/hero/Hero";
import infoBecasImg from "../../assets/icons/home/info-becas-icon.svg";

import senaLogo from "../../assets/images/home/sena-logo.png";
import rafaelLogo from "../../assets/images/home/rafael-nuñez-logo.png";
import unicartagenaLogo from "../../assets/images/home/unicartagena-logo.png";
import unicolomboLogo from "../../assets/images/home/unicolombo-logo.png";
import utbLogo from "../../assets/images/home/utb-logo.png";

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

      <h2>Universidades afiliadas</h2>
      <section className="contenedor-universidades">
        <img src={senaLogo} alt="Logo del SENA" />
        <img src={rafaelLogo} alt="Logo del Rafael Núñez" />
        <img src={unicartagenaLogo} alt="Logo de la Universidad Cartagena" />
        <img
          src={unicolomboLogo}
          className="unicolombo"
          alt="Logo de la Universidad Colombo"
        />
        <img src={utbLogo} className="utb" alt="Logo de la utb" />
      </section>

      <PanelAccesible />
    </div>
  );
};

export default HomeLayout;
