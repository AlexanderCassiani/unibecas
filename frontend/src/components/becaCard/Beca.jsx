import "./becaCard.css";

const BecaCard = ({
  nombre,
  fecha_creacion,
  vigencia,
  descripcion,
  info_aplicar,
  modalidad,
  estado,
}) => {
  return (
    <article className="becaCard">
      <header className="becaCard-header">
        <span className="becaCard-modalidad">{modalidad}</span>

        <span className={`becaCard-estado`}>{estado}</span>
      </header>

      <div className="becaCard-contenido">
        <h2>{nombre}</h2>

        <p className="becaCard-descripcion">{descripcion}</p>

        <div className="becaCard-requisitos">
          <h3>¿Cómo aplicar?</h3>
          <p>{info_aplicar}</p>
        </div>
      </div>

      <footer className="becaCard-footer">
        <div className="becaCard-vigencia">
          <span>Periodo de convocatoria</span>
          <strong>
            {fecha_creacion} - {vigencia}
          </strong>
        </div>
      </footer>
    </article>
  );
};

export default BecaCard;
