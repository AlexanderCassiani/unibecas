import "./panelAccesible.css"
import { useState } from "react"

export const PanelAccesible = () => {
    const [fontSize, setFontSize] = useState(1)

    const verificarTamanno = (nuevoFontSize) => nuevoFontSize >= 1.40 || nuevoFontSize <= 0.80

    const aumentarTamanno =  () => {
        let nuevoFontSize = fontSize + 0.05
        console.log(nuevoFontSize)

        if (verificarTamanno(nuevoFontSize)) return 

        setFontSize(nuevoFontSize)
        document.documentElement.style.fontSize = `${nuevoFontSize}rem`
    }

    const disminuirTamanno =  () => {
        let nuevoFontSize = fontSize - 0.05

        if (verificarTamanno(nuevoFontSize)) return 

        setFontSize(nuevoFontSize)
        document.documentElement.style.fontSize = `${nuevoFontSize}rem`
    }

    return (
        <div className="contenedor-panel-accesible">
            <div onClick={aumentarTamanno}>
                <span title="Aumentar el tamaño de la letra">A+</span>
            </div>
            <div onClick={disminuirTamanno}>
                <span title="Disminuir el tamaño de la letra">A-</span>
            </div>
        </div>
    )
}

export default PanelAccesible