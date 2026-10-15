import senaLogo from "../assets/images/home/sena-logo.png";
import rafaelLogo from "../assets/images/home/rafael-nuñez-logo.png";
import unicartagenaLogo from "../assets/images/home/unicartagena-logo.png";
import unicolomboLogo from "../assets/images/home/unicolombo-logo.png";
import utbLogo from "../assets/images/home/utb-logo.png";
import antonionariñologo from "../assets/images/home/antonio-nariño-logo.png";
import areandinalogo from "../assets/images/home/areandina-logo.png";
import autonomadenariñologo from "../assets/images/home/autonoma-de-narino-logo.png";
import cienciasaplicadasambientaleslogo from "../assets/images/home/ciencias-aplicadas-ambientales-logo.png";
import politecnicograncolombianologo from "../assets/images/home/politecnico-grancolombiano-logo.png";
import sanbuenaventuralogo from "../assets/images/home/san-buenaventura-logo.png";
import sinulogo from "../assets/images/home/sinu-logo.png";
import tecnologicoconfenalcologo from "../assets/images/home/tecnologico-confenalco-logo.png";
import unadLogo from "../assets/images/home/unad-logo.png";
import unibellasarteslogo from "../assets/images/home/uni-bellas-artes-logo.png";
import unilibertadoreslogo from "../assets/images/home/uni-libertadores-logo.png";
import unilibrelogo from "../assets/images/home/unilibre-logo.png";
import inimayorlogo from "../assets/images/home/uni-mayor-logo.png";
import uniminutologo from "../assets/images/home/uniminuto-logo.png";
import unipamplonaslogo from "../assets/images/home/uni-pamplonas-logo.png";
import unitecnar from "../assets/images/home/unitecnar-logo.png";

export const infoBecas = [
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

export const universidades = [
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

export const becas = [
    {
      id_beca: 1,
      nombre_beca: "Beca Talento Caribe",
      fecha_creacion_sys: "2026-01-15",
      vigencia_programa: "2026-02-12",
      descripcion_informacion:
        "Beca dirigida a estudiantes destacados académicamente que deseen iniciar sus estudios de pregrado en la Universidad de Cartagena. Busca promover el acceso a la educación superior de jóvenes de la región Caribe.",
      informacion_aplicar:
        "Presentar certificado de notas de bachillerato, documento de identidad, resultados de las pruebas Saber 11 y formulario de inscripción. Se requiere un promedio mínimo de 4.3.",
      modalidad: "Pregrado",
      cobertura: "100%",
      estado: "Activa",
      url_informacion: "https://www.unicartagena.edu.co/becas",
    },
    {
      id_beca: 2,
      nombre_beca: "Beca Jóvenes Innovadores",
      fecha_creacion_sys: "2026-02-10",
      vigencia_programa: "2027-01-20",
      descripcion_informacion:
        "Programa de apoyo económico para estudiantes interesados en carreras relacionadas con ingeniería, tecnología y desarrollo de software en la Universidad Tecnológica de Bolívar.",
      informacion_aplicar:
        "Ser admitido en un programa de ingeniería, presentar certificado de ingresos familiares, documento de identidad y una carta de motivación explicando el interés por la innovación tecnológica.",
      modalidad: "Pregrado",
      cobertura: "80%",
      estado: "Activa",
      url_informacion: "https://www.utb.edu.co/becas",
    },
    {
      id_beca: 3,
      nombre_beca: "Beca Excelencia Académica",
      fecha_creacion_sys: "2026-03-05",
      vigencia_programa: "2026-06-20",
      descripcion_informacion:
        "Convocatoria dirigida a profesionales que deseen continuar su formación académica mediante programas de especialización y maestría en la Universidad de San Buenaventura Cartagena.",
      informacion_aplicar:
        "Contar con título profesional, certificado de calificaciones universitarias, hoja de vida actualizada, documento de identidad y carta de intención. Se valorará especialmente el desempeño académico.",
      modalidad: "Posgrado",
      cobertura: "80%",
      estado: "Activa",
      url_informacion: "https://www.usbcartagena.edu.co/becas",
    },
    {
      id_beca: 4,
      nombre_beca: "Beca Formación para el Futuro",
      fecha_creacion_sys: "2026-04-20",
      vigencia_programa: "2027-08-18",
      descripcion_informacion:
        "Iniciativa de apoyo educativo para jóvenes de Cartagena que deseen realizar programas de formación técnica y adquirir competencias para incorporarse rápidamente al mercado laboral.",
      informacion_aplicar:
        "Presentar documento de identidad, diploma de bachiller, certificado de residencia en Cartagena y completar el formulario de inscripción. No se requiere experiencia laboral.",
      modalidad: "Tecnica",
      cobertura: "50%",
      estado: "Activa",
      url_informacion: "https://www.unitecnar.edu.co/becas",
    },
    {
      id_beca: 5,
      nombre_beca: "Beca Impulso Profesional",
      fecha_creacion_sys: "2026-05-12",
      vigencia_programa: "2026-04-20",
      descripcion_informacion:
        "Beca orientada a estudiantes y egresados que buscan fortalecer sus conocimientos mediante programas tecnológicos en áreas administrativas, contables y de sistemas en instituciones de educación superior de Cartagena.",
      informacion_aplicar:
        "Diligenciar el formulario de solicitud, presentar documento de identidad, certificado académico y una carta explicando las razones por las cuales solicita el beneficio.",
      modalidad: "Tecnologica",
      cobertura: "30%",
      estado: "Activa",
      url_informacion: "https://www.unicolombo.edu.co/becas",
    },
  ];