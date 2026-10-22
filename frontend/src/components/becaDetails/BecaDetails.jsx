import "./becaDetails.css";

import { useParams, Link } from "react-router-dom";

import Header from "../../home/components/header/Header";
import Footer from "../../home/components/footer/Footer";

import PanelAccesible from "../panelAccesible/PanelAccesible";

import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

import BecaDetailsSkeleton from "../../skeletons/BecaDetailsSkeleton";

const BecaDetails = () => {
  const [data, loading, error, fetchData] = useFetch();

  const { id } = useParams();

  useEffect(() => {
    fetchData(`https://unibecas.onrender.com/main/${id}`);
  }, [id]);

  console.log(data);

  const clase = data?.INFO?.estado === "Activa" ? "activa" : "vencida";

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
            {loading ? (
              <BecaDetailsSkeleton />
            ) : (
              <>
                <div className="contenedor-nombre-beca">
                  <h1>{data?.INFO?.nombre}</h1>
                  <span className="modalidad">{data?.INFO?.modalidad}</span>
                  <div className={`contenedor-estado ${clase}`}>
                    <span className="estado">{data?.INFO?.estado}</span>
                    <span className={`punto ${clase}`}></span>
                  </div>
                </div>

                <p className="cobertura">{data?.INFO?.cobertura}</p>

                <p>{data?.INFO?.descripcion}</p>

                <h2 className="como-aplicar">¿Como aplicar?</h2>
                <p>{data?.INFO?.aplicar}</p>
              </>
            )}
          </section>
        </div>
      </div>
      <Footer />

      <PanelAccesible />
    </div>
  );
};

export default BecaDetails;
