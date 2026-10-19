//@ts-nocheck
import express from 'express'
import cors from 'cors'
import crypto from 'node:crypto'

import { readFile, writeFile } from './utils/funciones/funciones'
import validarUsuario from './esquemas/esquemas'

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

app.get('/main', (req, res) => {
    const datos = readFile()
    res.status(200).json(datos)
})

app.post('/main', async (req, res) => {
    const dataVal = validarUsuario(req.body)

    try {
        if (dataVal.error) {
            return res.status(422).json({
                error_validation: JSON.parse(dataVal.error.message)
            })
        }
        const newScsh = {
            id: crypto.randomUUID(),
            ...dataVal
        }

        const data = await readFile()
        data.push(newScsh)
        await writeFile(data)

        res.status(201).json({
            message: `Usuario insertado con exito - ${newScsh.id}`
        })
        console.log(`[server - ${new Date().toLocaleString}] Usuario insertado con exito - ${newScsh.id}`)
    } catch (error) {
        res.status(500).json({
            error: `Error de servicio - ${error.message}`
        })
    }
})

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
    console.log(`[Server] Running port: ${PORT}`)
})