import "./homeLayout.css";
import Hero from "../components/hero/Hero";
import infoBecasImg from "../../assets/icons/home/info-becas-icon.svg";

import senaLogo from "../../assets/images/home/sena-logo.png";
import rafaelLogo from "../../assets/images/home/rafael-nuñez-logo.png";
import unicartagenaLogo from "../../assets/images/home/unicartagena-logo.png";
import unicolomboLogo from "../../assets/images/home/unicolombo-logo.png";
import utbLogo from "../../assets/images/home/utb-logo.png";

import Header from "../components/header/Header";

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
    </div>
  );
};

export default HomeLayout;
