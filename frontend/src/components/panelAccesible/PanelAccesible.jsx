import "./panelAccesible.css";
import { useState } from "react";

import darkmode from "../../assets/icons/home/darkmode.svg";
import lightmode from "../../assets/icons/home/lightmode.svg";

export const PanelAccesible = () => {
  const [fontSize, setFontSize] = useState(1);
  const [mode, setMode] = useState("lightmode");

  const verificarTamanno = (nuevoFontSize) =>
    nuevoFontSize >= 1.4 || nuevoFontSize <= 0.8;

  const aumentarTamanno = () => {
    let nuevoFontSize = fontSize + 0.05;

    if (verificarTamanno(nuevoFontSize)) return;

    setFontSize(nuevoFontSize);
    document.documentElement.style.fontSize = `${nuevoFontSize}rem`;
  };

  const disminuirTamanno = () => {
    let nuevoFontSize = fontSize - 0.05;

    if (verificarTamanno(nuevoFontSize)) return;

    setFontSize(nuevoFontSize);
    document.documentElement.style.fontSize = `${nuevoFontSize}rem`;
  };

  const cambiarModo = () => {
    setMode(mode === "lightmode" ? "darkmode" : "lightmode");
    document.body.classList.toggle("darkmode");
  };

  const icono = mode === "lightmode" ? darkmode : lightmode;
  const imgAlt = mode === "lightmode" ? "darkmode" : "lightmode";

  return (
    <div className="contenedor-panel-accesible">
      <div onClick={cambiarModo}>
        <span>
          <img src={icono} alt={imgAlt} />
        </span>
      </div>
      <div onClick={aumentarTamanno}>
        <span title="Aumentar el tamaño de la letra">A+</span>
      </div>
      <div onClick={disminuirTamanno}>
        <span title="Disminuir el tamaño de la letra">A-</span>
      </div>
    </div>
  );
};

export default PanelAccesible;
