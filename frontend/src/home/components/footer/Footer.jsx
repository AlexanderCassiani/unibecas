import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-info">
          <h2>UNIBECAS</h2>
        </div>

        <div className="footer-seccion">
          <h3>Navegación</h3>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#becas">Becas</a>
            </li>
            <li>
              <a href="#acerca-de-unibecas">Sobr unibecas</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-inferior">
        <p>
          © {new Date().getFullYear()} UNIBECAS. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
