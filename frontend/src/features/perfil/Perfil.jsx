import { useState, useEffect } from "react"
import { perfil } from "../auth/services/authService"
import { useNavigate } from "react-router-dom"

export default function Perfil() {
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const perfilData = await perfil()
                setData(perfilData)
            } catch (error) {
                navigate('/')
            }
        }
        obtenerDatos()
    }, [])

    if (!data) {
        return <div>Cargando...</div>
    }
    
    return (
        <div>
            <h2>Perfil</h2>
            <p>Hola {data.user.usuario}</p>
        </div>
    )
}