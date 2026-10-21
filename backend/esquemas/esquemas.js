// @ts-nocheck
import z from 'zod'

const formatoNewuser = z.object({
    nombrebeca: z.string({
        error: 'El campo debe ser un string'
    }).trim().min(1, {
        error: 'El campo no puede estar vacio'
    }).max(120, {
        error: 'Limite de caracteres: 120'
    }),
    vigencia: z.string({
        error: 'El campo nombre debe ser un string'
    }).min(1, {
        error: 'El campo no puede estar vacío'
    }).max(50, {
        error: 'Limite de caracteres: 50'
    }),
    descripcion: z.string({
        error: 'El campo debe ser string'
    }),
    aplicar: z.string({
        error: 'El campo nombre debe ser un string'
    }),
    modalidad: z.enum([
        'Pregrado',
        'Posgrado',
        'Tecnologica',
        'Tecnica'
    ], {
        error: 'El tipo de dato es invalido',
    }),
    cobertura: z.string({
        error: 'El campo debe ser un string'
    }),
    iduniversidad: z.number({
        error: 'El dato debe ser un numero'
    }).int({
        error: 'El numero debe ser entero'
    }).positive({
        error: 'El numero debe ser positivo'
    }).max(80000, {
        error: 'El numero debe ser menor o igual a 80.000'
    }),
    estado: z.enum([
        'Activa',
        'En proceso',
        'Vencida',
        'Suspendida'
    ], {
        error: 'El tipo de dato ingresado es invalido'
    }),
    urlinfo: z.httpUrl({
        error: 'El dato debe de ser tipo URL'
    }).max(255, {
        error: 'Maximo 255 caracteres'
    }),
    proveedor: z.number({
        error: 'El dato debe ser un numero'
    }).int({
        error: 'El numero debe ser positivo'
    }).positive({
        error: 'El numero debe ser positivo'
    }).max(80000, {
        error: 'El numero debe ser menor o igual a 80.000'
    })
})

export function validarBeca(objeto) {
    return formatoNewuser.safeParse(objeto)
}

export function actualizarBeca(objeto) {
    return formatoNewuser.partial().safeParse(objeto)
}