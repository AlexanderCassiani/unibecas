//@ts-nocheck
import fs from 'node:fs/promises'

export async function readFile() {
    const datos = await fs.readFile('datosprueba.json', 'utf-8')
    return JSON.parse(datos)
}

export async function writeFile(data) {
    await fs.writeFile('datosprueba.json', JSON.stringify(data, null, 2), 'utf-8')
}

export function horaActual() {
    return new Date().toLocaleString()
}