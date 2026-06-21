import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-wrap">
        <header className="header">
          <p className="logo">
            UNI<span>BECAS</span>
          </p>

          <nav className="nav-links">
            <a href="#about">Qué es</a>
            <a href="#how">Cómo funciona</a>
            <a href="#audience">Para quién</a>
          </nav>

          <div className="header-right">
            <Link to="/login" className="btn secondary small">
              Iniciar sesión
            </Link>
            <Link to="/signup" className="btn primary small">
              Registrarse
            </Link>
          </div>
        </header>
      </div>

      <section className="hero">
        <span className="badge">
          <span className="dot"></span>Hecho para estudiantes de Cartagena
        </span>

        <h1 className="hero-title">
          Encuentra tu <span className="gradient-text">beca ideal</span>
          <br />
          sin perderte en mil páginas
        </h1>

        <p className="subtitle">
          UNIBECAS centraliza becas, programas tecnológicos y oportunidades de
          educación superior de Cartagena en un solo lugar, para que
          postularte sea simple y claro.
        </p>

        <div className="hero-ctas">
          <Link to="/becas" className="btn primary large">
            Explorar becas
          </Link>
          <a href="#about" className="btn secondary large">
            Cómo funciona
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">+50</div>
            <div className="stat-label">Becas y programas</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Información verificada</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Disponible para consultar</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="about-grid">
          <div>
            <p className="section-eyebrow">¿Qué es UNIBECAS?</p>
            <h2>Toda la información de becas, en un solo lugar</h2>
            <p>
              Hoy esa información está dispersa en decenas de páginas
              distintas, y muchos estudiantes ni siquiera saben que estas
              oportunidades existen. UNIBECAS reúne becas, programas
              tecnológicos y opciones de educación superior de
              universidades, instituciones públicas y entidades como el
              SENA, con requisitos, beneficios y fechas claras desde el
              primer momento.
            </p>
            <div className="source-list">
              <span className="source-chip">Universidades de Cartagena</span>
              <span className="source-chip">SENA</span>
              <span className="source-chip">Instituciones públicas</span>
              <span className="source-chip">Programas tecnológicos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-head">
          <p className="section-eyebrow">En la plataforma</p>
          <h2>Todo lo que necesitas para postularte</h2>
          <p>
            Desde encontrar la beca correcta hasta dar el último clic para
            aplicar.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>Explora becas</h3>
            <p>
              Consulta becas y programas disponibles en universidades e
              instituciones de Cartagena.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🔎</div>
            <h3>Busca y filtra</h3>
            <p>
              Filtra por universidad o tipo de programa: tecnológico,
              universitario o posgrado.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📄</div>
            <h3>Revisa los detalles</h3>
            <p>
              Requisitos, beneficios y fecha límite de cada beca, sin letra
              pequeña escondida.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🚀</div>
            <h3>Aplica fácilmente</h3>
            <p>
              Accede directo al enlace oficial de inscripción, sin vueltas
              ni intermediarios.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="section-head">
          <p className="section-eyebrow">El proceso</p>
          <h2>Tres pasos para encontrar tu beca</h2>
          <p>Pensado para que no necesites experiencia previa buscando becas.</p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Crea tu cuenta</h3>
            <p>
              Regístrate con tu nombre, correo y contraseña en menos de un
              minuto.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Busca y filtra</h3>
            <p>
              Encuentra becas por universidad o tipo de programa según lo
              que estás buscando.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Aplica con confianza</h3>
            <p>
              Revisa la guía de aplicación y entra directo al sitio oficial
              para postularte.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt" id="audience">
        <div className="section-head">
          <p className="section-eyebrow">¿Para quién es?</p>
          <h2>Hecho para quienes quieren seguir estudiando</h2>
        </div>

        <div className="audience-list">
          <div className="audience-item">
            <div className="audience-icon">🧑‍🎓</div>
            <p>
              Estudiantes que buscan oportunidades de educación superior en
              Cartagena.
            </p>
          </div>
          <div className="audience-item">
            <div className="audience-icon">💡</div>
            <p>
              Jóvenes interesados en becas y programas tecnológicos como
              los del SENA.
            </p>
          </div>
          <div className="audience-item">
            <div className="audience-icon">🗂️</div>
            <p>
              Personas que necesitan información clara, organizada y
              verificada para decidir.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-final">
          <h2>Tu próxima beca puede estar a un clic</h2>
          <p>
            Crea tu cuenta gratis y empieza a explorar oportunidades hechas
            para ti.
          </p>
          <Link to="/signup" className="btn primary large">
            Registrarme gratis
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} UNIBECAS — Plataforma de
          oportunidades educativas de Cartagena
        </p>
        <div className="footer-links">
          <a href="#about">Qué es</a>
          <a href="#how">Cómo funciona</a>
          <Link to="/contacto">Contacto</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
