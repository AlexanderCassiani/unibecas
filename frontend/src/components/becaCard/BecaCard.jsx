import "./becaCard.css";
import { ArrowUpRight } from "../icons/home/ArrowUpRight";

const BecaCard = ({
  universidad,
  nombre,
  vigencia,
  descripcion,
  info_aplicar,
  modalidad,
  estado,
}) => {
  const clase = estado === "Activa" ? "activa" : "vencida";

  return (
    <article className="becaCard">
      <header className="becaCard-header">
        <span className="becaCard-modalidad">{modalidad}</span>
        <h2>{universidad}</h2>
        {/* <span
          className="becaCard-cobertura"
          title={`Covertura del ${cobertura}%`}
        >
          {cobertura}
        </span> */}
      </header>

      <div className="becaCard-contenido">
        <h3>{nombre}</h3>

        <p className="becaCard-descripcion">{descripcion}</p>

        <div className="becaCard-requisitos">
          <h3>¿Cómo aplicar?</h3>
          <p>{info_aplicar}</p>
        </div>
      </div>

      <footer className="becaCard-footer">
        <div className="becaCard-vigencia">
          <span>Vigencia:</span>
          <br />
          <span className="becaCard-inscripciones">{vigencia}</span>
        </div>
        <div className="bottom">
          <div className={`contenedor-becaCard-estado ${clase}`}>
            <span className="becaCard-estado">{estado}</span>
            <span className={`punto ${clase}`}></span>
          </div>
          <ArrowUpRight />
        </div>
      </footer>
    </article>
  );
};

export default BecaCard;
