//@ts-nocheck
import { Router } from 'express'
import { UniversidadesControl } from '../controladores/universidades.js'

export const universidadesRouter = Router()

universidadesRouter.get('/', UniversidadesControl)
universidadesRouter.post('/', UniversidadesControl)
universidadesRouter.get('/:id', UniversidadesControl)
universidadesRouter.patch('/:id', UniversidadesControl)
universidadesRouter.delete('/:id', UniversidadesControl)