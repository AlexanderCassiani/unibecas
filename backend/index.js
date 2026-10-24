//@ts-nocheck
import express from 'express'

import { mainRouter } from './rutas/main.js'
import { corsMiddleware } from './middlewares/cors.js'
import { cabecerasJSON } from './middlewares/cabeceras.js'
import { entidadesRouter } from './rutas/entidades.js'
import { universidadesRouter } from './rutas/universidades.js'

const app = express()
app.disable('x-powered-by')
app.use(corsMiddleware())
app.use(cabecerasJSON)
app.use(express.json())
// ------- RESPONSES -------

app.get('/', (req, res) => {
    res.status(200).send('<p>UniBecas API</p>')
})

// Si la peticion es a /main, que redirija los metodos al enrutador -> mainRouter de
// de la carpeta rutas para que resuelva las request dependiendo de su metodo

app.use('/main', mainRouter)
app.use('/entidades', entidadesRouter)
app.use('/universidades', universidadesRouter)

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})


const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
    console.log(`[Server] Running port: http://localhost:${PORT}`)
})