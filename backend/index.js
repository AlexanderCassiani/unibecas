//@ts-nocheck
import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT ?? 3001
app.disable('x-powered-by')
app.use(express.json())
app.use(cors(/*{
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [

        ]

        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('No permitido por CORS'))
    }
}*/))

app.get('/', (req, res) => {
    res.status(200).send('<p>UniBecas API</p>')
})

app.get('/main', (req, res) => {
    res.status(200).send('<p>UniBecas API</p>')
})

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
    console.log(`[Server] Running port: ${PORT}`)
})