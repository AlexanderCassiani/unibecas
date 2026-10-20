//@ts-nocheck
import { Router } from 'express'
import { MainControl } from '../controladores/main.js'

export const mainRouter = Router()

// --------- ENRUTADOR -------------
// Y que cada ruta use su respectivo controlador para procesar su request

mainRouter.get('/', MainControl.allRecoveryCont)
mainRouter.get('/:id', MainControl.idRecoveryCont)
mainRouter.post('/', MainControl.newDataCont)
mainRouter.delete('/:id', MainControl.deleteDataCont)
mainRouter.patch('/:id', MainControl.patchDataCont)