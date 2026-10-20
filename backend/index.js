//@ts-nocheck
import express from 'express'
import dotenv from 'dotenv'

import { mainRouter } from './rutas/main.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
dotenv.config()
app.disable('x-powered-by')
app.use(express.json())
app.use(corsMiddleware())

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


const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
    console.log(`[Server] Running port: http://localhost:${PORT}`)
})