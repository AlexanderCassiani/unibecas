//@ts-nocheck
import { MainInfo } from "../modelos/postgreSQL/main.js"
import { horaActual } from "../utils/funciones/funciones.js"
import { ErrorValidacion } from "../utils/errores/errorcharcount.js"
// ---------- Controladdor para la peticion /main
// Cada estatica es una forma de controlar la peticion del enrutador
// La cual, la estatica usa los modelos para el procesamiento de la informacion
// Que le llega a la ruta.

export class MainControl {

    static async allRecoveryCont(req, res) {
        try {
            const datos = await MainInfo.allRecovery({ schsp: req.query.schsp })
            if (datos === false) {
                return res.status(404).json({
                    error: `Beca "${req.query.schsp}" no encontrada`
                })
            } else if (datos.length === 0) {
                return res.status(404).json({
                    info: `No hay becas disponibles`
                })
            }

            if (req.query.schsp) {
                console.log(`[server - ${horaActual()}] Datos filtrados exitosamente`)
            }
            console.log(`[server - ${horaActual()}] Datos enviados`)
            return res.status(200).json(datos)

        } catch (error) {
            if (error instanceof ErrorValidacion) {
                console.log(`[server - ${horaActual()}] - Validacion de busqueda:`, error.message, `- Info: ${req.params.id}`)
                return res.status(400).json({
                    error: error.message
                })
            }

            console.log(`[server - ${horaActual()}] - Error de servidor:`, error)
            return res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }

    static async idRecoveryCont(req, res) {
        try {
            const findData = await MainInfo.idRecovery({ id: req.params.id })
            if (findData) {
                console.log(`[server - ${horaActual()}] - Beca devuelta - ${req.params.id}`)
                return res.status(200).json({
                    message: `Beca con la ID: ${req.params.id} encontrado`,
                    INFO: findData
                })
            }

            return res.status(404).json({
                error: `Beca ${req.params.id} no encontrada`
            })
        } catch (error) {
            if (error instanceof ErrorValidacion) {
                console.log(`[server - ${horaActual()}] - Validacion de busqueda:`, error.message, `- Info: ${req.params.id}`)
                return res.status(400).json({
                    error: error.message
                })
            }

            console.log(`[server - ${horaActual()}] - Error de servidor:`, error)
            return res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }

    static async newDataCont(req, res) {
        try {
            const newScsh = await MainInfo.newData({ dataVal: req.body })

            console.log(`[server - ${horaActual()}] Beca insertada con exito - ${newScsh}`)
            return res.status(201).json({
                message: 'Beca insertada con exito',
                INFO: newScsh
            })
        } catch (error) {
            if (error instanceof ErrorValidacion) {
                console.log(`[server - ${horaActual()}] - Validación:`, error.message, `- Info: ${JSON.stringify(req.body)}`)
                return res.status(400).json({
                    error: error.message
                })
            }

            if (error.code === '23503') {
                console.log(`[server - ${horaActual()}] - Error de servidor:`, error.code, '-', error.detail)
                return res.status(500).json({
                    error: 'La referencia universitaria o de proveedor no existe'
                })
            }

            console.log(`[server - ${horaActual()}] - Error de servidor:`, error.message)
            return res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }

    static async deleteDataCont(req, res) {
        try {
            const filData = await MainInfo.deleteData({ id: req.params.id })

            if (filData) {
                console.log(`[server - ${horaActual()}] Dato ${req.params.id} borrado con éxito`)
                return res.status(200).json({
                    message: `ID: ${req.params.id} eliminada con éxito`
                })
            }

            return res.status(404).json({
                error: `ID: ${req.params.id} no existe en los datos`
            })

        } catch (error) {
            if (error instanceof ErrorValidacion) {
                console.log(`[server - ${horaActual()}] - Validación:`, error.message, `- Info: ${req.params.id}`)
                return res.status(400).json({
                    error: error.message
                })
            }

            console.log(`[server - ${horaActual()}] - Error de servidor:`, error)
            return res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }

    static async patchDataCont(req, res) {
        try {
            const data = await MainInfo.patchData({ id: req.params.id, input: req.body })

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
            if (error instanceof ErrorValidacion) {
                console.log(`[server - ${horaActual()}] - Validación:`, error.message, `- Info: ${req.params.id}`)
                return res.status(400).json({
                    error: error.message
                })
            }

            console.log(`[server - ${horaActual()}] - Error de servidor:`, error)
            return res.status(500).json({
                error: 'Error interno de servidor'
            })
        }
    }
}