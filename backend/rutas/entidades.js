//@ts-nocheck
import { Router } from 'express'
import { EntidadesControl } from '../controladores/entidades.js'

export const entidadesRouter = Router()

entidadesRouter.get('/', EntidadesControl)
entidadesRouter.post('/', EntidadesControl)
entidadesRouter.get('/:id', EntidadesControl)
entidadesRouter.patch('/:id', EntidadesControl)
entidadesRouter.delete('/:id', EntidadesControl)