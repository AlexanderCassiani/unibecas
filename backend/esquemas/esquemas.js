// @ts-nocheck
import z from 'zod'

const formatoNewuser = z.object({
    nombre: z.string({
        error: 'El campo nombre debe ser un string'
    }),
    proveedor: z.string({
        error: 'El campo debe ser string'
    })
})

export function validarUsuario(objeto) {
    return formatoNewuser.safeParse(objeto)
}

export function actualizarDato(objeto) {
    return formatoNewuser.partial().safeParse(objeto)
}