//@ts-nocheck
import { MainInfo } from "../modelos/main.js"
import { horaActual } from "../utils/funciones/funciones.js"

// ---------- Controladdor para la peticion /main
// Cada estatica es una forma de controlar la peticion del enrutador
// La cual, la estatica usa los modelos para el procesamiento de la informacion
// Que le llega a la ruta.

export class MainControl {

    static async allRecoveryCont(req, res) {
        try {
            const datos = await MainInfo.allRecovery({ schsp: req.query.schsp })
            if (!datos) {
                return res.status(404).json({
                    error: `Beca "${req.query.schsp}" no encontrada`
                })
            }

            console.log('[server] Datos filtrados exitosamente')
            res.status(200).json(datos)
        } catch (error) {
            console.log(`[server - ${horaActual()}] - Error de servidor:`, error)
            res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }

    static async idRecoveryCont(req, res) {
        try {
            const findData = await MainInfo.idRecovery({ id: req.params.id })
            if (findData) {
                console.log(`[server - ${horaActual()}] - Usuario devuelto`)
                res.status(200).json({
                    message: `Usuario ID: ${req.params.id} encontrado`,
                    INFO: findData
                })
            }

            res.status(404).json({
                error: `Usuario ${req.params.id} no encontrado`
            })
        } catch (error) {
            console.log(`[server - ${horaActual()}] - Error de servidor:`, error)
            res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }

    static async newDataCont(req, res) {
        try {
            const newScsh = await MainInfo.newData({ dataVal: req.body })
            if (typeof newScsh === 'object' && newScsh !== null && newScsh.error) {
                return res.status(422).json(newScsh)
            }

            res.status(201).json({
                message: 'Usuario insertado con exito',
                INFO: newScsh
            })
            console.log(`[server - ${horaActual()}] Usuario insertado con exito - ${newScsh.id}`)
        } catch (error) {
            console.log(`[server - ${horaActual()}] Error de servicio:`, error)
            res.status(500).json({
                error: `Error de servicio - ${error.message}`
            })
        }
    }

    static async deleteDataCont(req, res) {
        try {
            const filData = await MainInfo.deleteData({ id: req.params.id })
            if (filData) {
                console.log(`[server - ${horaActual()}] Dato ${req.params.id} borrado con éxito`)
                res.status(200).json({
                    message: `ID: ${req.params.id} eliminada con éxito`
                })
            }

            res.status(404).json({
                error: `ID: ${req.params.id} no existe en los datos`
            })
        } catch (error) {
            console.log(`[server - ${horaActual()}] Error de servicio:`, error)
            res.status(500).json({
                error: `Error de servicio - ${error.message}`
            })
        }
    }

    static async patchDataCont(req, res) {
        try {
            const data = await MainInfo.patchData({ id: req.params.id, input: req.body })
            if (typeof data === 'object' && data !== null && data.error) {
                return res.status(422).json(data)
            }
            if (!data) {
                console.log(`[server - ${horaActual()}] El indice ${req.params.id} no existe en la BD`)
                return res.status(404).json({
                    error: `No existe dato con la ID: ${req.params.id}`
                })
            }

            console.log(`[server - ${horaActual()}] ID ${req.params.id} actualizado con exito`)
            return res.status(200).json({
                message: `Dato ${req.params.id} actualizado con éxito`,
                INFO: data
            })
        } catch (error) {
            console.log(`[server - ${horaActual()}] Error de servidor 500 - ${error.message}`)
            return res.status(500).json({
                error: `Error de servicio - ${error.message}`
            })
        }

    }
}