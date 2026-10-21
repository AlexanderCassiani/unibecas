import "./becaDetails.css";

import { becas } from "../../home/data";
import { useParams, Link } from "react-router-dom";

import Header from "../../home/components/header/Header";
import Footer from "../../home/components/footer/Footer";

import PanelAccesible from "../panelAccesible/PanelAccesible";

const BecaDetails = () => {
  const { id } = useParams();

  const beca = becas.find((beca) => beca.id_beca === Number(id));

  const clase = beca.estado === "Activa" ? "activa" : "vencida";

  return (
    <div className="beca-details">
      <div>
        <Header />
        <div className="beca-details-contenido">
          <div className="contenedor-navegacion">
            <Link to="/" className="volver">
              Volver al inicio
            </Link>
            <button className="como-acceder">¿Como acceder a esta beca?</button>
          </div>

          <section>
            <h2 className="universidad">{beca.universidad}</h2>

            <div className="contenedor-nombre-beca">
              <h1>{beca.nombre_beca}</h1>
              <span className="cobertura">{beca.cobertura}</span>
              <span className="modalidad">{beca.modalidad}</span>
              <div className={`contenedor-estado ${clase}`}>
                <span className="estado">{beca.estado}</span>
                <span className={`punto ${clase}`}></span>
              </div>
            </div>

            <p>{beca.descripcion_informacion}</p>

            <h2 className="como-aplicar">¿Como aplicar?</h2>
            <p>{beca.informacion_aplicar}</p>
          </section>
        </div>
      </div>
      <Footer />

      <PanelAccesible />
    </div>
  );
};

export default BecaDetails;
