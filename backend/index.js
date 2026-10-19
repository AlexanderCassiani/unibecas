//@ts-nocheck
import express from 'express'
import cors from 'cors'

import { mainRouter } from './rutas/main.js'

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

// ------- RESPONSES -------

app.get('/', (req, res) => {
    res.status(200).send('<p>UniBecas API</p>')
})

// Si la peticion es a /main, que redirija los metodos al enrutador -> mainRouter de
// de la carpeta rutas para que resuelva las request dependiendo de su metodo

app.use('/main', mainRouter)

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
    console.log(`[Server] Running port: http://localhost:${PORT}`)
})