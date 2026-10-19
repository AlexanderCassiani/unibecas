//@ts-nocheck
import { Router } from 'express'

import { readFile, writeFile } from '../utils/funciones/funciones.js'
import { validarUsuario, actualizarDato } from '../esquemas/esquemas.js'
import crypto from 'node:crypto'

// Enrutador para poder responder las request para dejar el index mas limpio
export const mainRouter = Router()

mainRouter.get('/', async (req, res) => {
    const datos = await readFile()
    res.status(200).json(datos)
})

mainRouter.post('/', async (req, res) => {
    const dataVal = validarUsuario(req.body)

    try {
        if (!dataVal.success) {
            return res.status(422).json({
                error_validation: JSON.parse(dataVal.error.message)
            })
        }
        const newScsh = {
            id: crypto.randomUUID(),
            ...dataVal.data
        }

        const data = await readFile()
        data.push(newScsh)
        await writeFile(data)

        res.status(201).json({
            message: `Usuario insertado con exito - ${newScsh.id}`
        })
        console.log(`[server - ${new Date().toLocaleString()}] Usuario insertado con exito - ${newScsh.id}`)
    } catch (error) {
        res.status(500).json({
            error: `Error de servicio - ${error.message}`
        })
    }
})

mainRouter.patch('/:id', async (req, res) => {
    const dataUpdated = await actualizarDato(req.body)
    try {
        if (!dataUpdated.success) {
            return res.status(422).json({
                error_validation: JSON.parse(dataUpdated.error.message)
            })
        }
        const { id } = req.params
        const data = await readFile()
        const indexDato = data.findIndex(dato => dato.id === id)

        if (indexDato === -1) {
            console.log(`[server - ${new Date().toLocaleString()}] El indice ${id} no existe en la BD`)
            return res.status(404).json({
                error: `No existe dato con la ID: ${id}`
            })
        }

        data[indexDato] = {
            ...data[indexDato],
            ...dataUpdated.data
        }

        await writeFile(data)

        console.log(`[server - ${new Date().toLocaleString()}] ID ${id} actualizado con exito`)
        return res.status(200).json({
            message: `Dato ${id} actualizado con éxito`,
            dato: data[indexDato]
        })
    } catch (error) {
        console.log(`[server - ${new Date().toLocaleString()}] Error de servidor 500 - ${error.message}`)
        return res.status(500).json({
            error: `Error de servicio - ${error.message}`
        })
    }

})