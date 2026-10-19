//@ts-nocheck
import express from 'express'
import cors from 'cors'
import crypto from 'node:crypto'

import { readFile, writeFile } from './utils/funciones/funciones.js'
import { validarUsuario, actualizarDato } from './esquemas/esquemas.js'

const app = express()
const PORT = process.env.PORT ?? 3001
app.disable('x-powered-by')
app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            "https://unibecas.orender.com"
        ]

        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('No permitido por CORS'))
    }
}))

app.get('/', (req, res) => {
    res.status(200).send('<p>UniBecas API</p>')
})

app.get('/main', async (req, res) => {
    const datos = await readFile()
    res.status(200).json(datos)
})

app.post('/main', async (req, res) => {
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

app.patch('/main/:id', async (req, res) => {
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
            return res.status(404).json({
                error: `No existe dato con la ID: ${id}`
            })
        }

        data[indexDato] = {
            ...data[indexDato],
            ...dataUpdated.data
        }

        await writeFile(data)

        return res.status(200).json({
            message: `Dato ${id} actualizado con éxito`,
            dato: data[indexDato]
        })
    } catch (error) {
        return res.status(500).json({
            error: `Error de servicio - ${error.message}`
        })
    }

})

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
    console.log(`[Server] Running port: http://localhost:${PORT}`)
})