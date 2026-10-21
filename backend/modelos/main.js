//@ts-nocheck
import crypto from 'node:crypto'
import { readFile, writeFile } from "../utils/funciones/funciones.js"
import { actualizarDato, validarUsuario } from '../esquemas/esquemas.js'

export class MainInfo {
    static async allRecovery({ schsp }) {
        let datos = await readFile()

        if (schsp) {
            datos = datos.filter(data => data.beca && data.beca?.toLowerCase() === schsp.toLowerCase())

            if (datos.length === 0) {
                return false
            }
        }
        return datos
    }


    static async idRecovery({ id }) {
        const datos = await readFile()
        const findData = await datos.find(d => d.id === id)
        return findData
    }

    static async newData({ dataVal }) {
        const checkVal = validarUsuario(dataVal)

        if (!checkVal.success) {
            return { error: JSON.parse(checkVal.error.message) }
        }

        const newScsh = {
            id: crypto.randomUUID(),
            ...checkVal.data
        }

        const data = await readFile()
        data.push(newScsh)
        await writeFile(data)
        return newScsh
    }

    static async deleteData({ id }) {
        const datos = await readFile()
        const filData = datos.filter(d => d.id !== id)
        if (datos.length !== filData.length) {
            await writeFile(filData)
            return true
        }
        return false
    }

    static async patchData({ id, input }) {
        const datos = await readFile()
        const actData = actualizarDato(input)
        if (!actData.success) {
            return { error_validation: JSON.parse(actData.error.message) }
        }

        const indice = datos.findIndex(d => d.id === id)
        if (indice === -1) {
            return false
        }

        datos[indice] = {
            ...datos[indice],
            ...input.data
        }

        await writeFile(datos)
        return datos[indice]
    }
}