//@ts-nocheck
import pg from 'pg'
import { horaActual } from '../../utils/funciones/funciones.js'
const { Pool } = pg
export const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

pool.on('error', (e) => {
    console.log(`[database - ${horaActual()}] - Error code: ${e.code} - Detalles: ${e.detail ? e.detail : '- No detalles'} - Error: ${e.message}`)
})