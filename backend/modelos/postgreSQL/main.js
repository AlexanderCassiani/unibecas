//@ts-nocheck
import { pool } from './conexion.js'
import { actualizarBeca, validarBeca } from '../../esquemas/esquemas.js'
import { ErrorValidacion } from '../../utils/errores/errorcharcount.js'

const MAPA_COLUMNAS_BECAS = {
    nombrebeca: 'nombre_beca',
    vigencia: 'vigencia_programa',
    descripcion: 'descripcion_informacion',
    aplicar: 'informacion_aplicar',
    modalidad: 'modalidad',
    cobertura: 'cobertura',
    estado: 'estado',
    urlinfo: 'url_informacion'
}

export class MainInfo {
    static async allRecovery({ schsp }) {
        if (schsp && schsp.trim().length < 4) {
            throw new ErrorValidacion('La busqueda debe ser de al menos 4 caracteres')
        }

        if (schsp) {
            const busquedaFormateada = `%${schsp}%`

            const info = await pool.query(`SELECT 
                        id_beca AS id, 
                        nombre_beca AS nombre, 
                        vigencia_programa AS vigencia, 
                        descripcion_informacion AS descripcion, 
                        informacion_aplicar AS aplicar, 
                        modalidad, 
                        cobertura, 
                        estado, 
                        url_informacion AS url 
                        FROM becas 
                        WHERE f_unaccent(lower(nombre_beca)) ILIKE f_unaccent(lower($1))
                        `, [busquedaFormateada])

            if (info.rowCount === 0) {
                return false
            }
            return info.rows
        }

        const info = await pool.query(`SELECT 
                        id_beca AS id, 
                        nombre_beca AS nombre, 
                        vigencia_programa AS vigencia, 
                        descripcion_informacion AS descripcion, 
                        informacion_aplicar AS aplicar, 
                        modalidad, 
                        cobertura, 
                        estado, 
                        url_informacion AS url 
                        FROM becas
                        `)

        return info.rows
    }

    static async idRecovery({ id }) {
        if (id && id.trim().length > 10) {
            throw new ErrorValidacion('Demasiados caracteres, sugerencia id <= 10 chars')
        }

        if (id) {
            if (!Number.isInteger(Number(id))) {
                return false
            }

            const datos = await pool.query(`
                        SELECT
                        id_beca AS id, 
                        nombre_beca AS nombre, 
                        vigencia_programa AS vigencia, 
                        descripcion_informacion AS descripcion, 
                        informacion_aplicar AS aplicar, 
                        modalidad, 
                        cobertura, 
                        estado, 
                        url_informacion AS url 
                        FROM becas 
                        WHERE id_beca = $1
                    `, [Number(id)])

            if (datos.rowCount === 0) {
                return false
            }
            return datos.rows
        }
    }

    static async newData({ dataVal }) {
        const checkVal = validarBeca(dataVal)

        if (!checkVal.success) {
            throw new ErrorValidacion('Error validación de campos:', JSON.parse(checkVal.error.message)[0].message)
        }

        const d = checkVal.data

        const newScsh = await pool.query(`
            INSERT INTO becas (nombre_beca, vigencia_programa, descripcion_informacion, informacion_aplicar, modalidad, cobertura, id_universidad_acceso, estado, url_informacion, proveedor_beca) VALUES(
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9,
                $10
            )
            RETURNING *
            `, [
            d.nombrebeca,
            d.vigencia,
            d.descripcion,
            d.aplicar,
            d.modalidad,
            d.cobertura,
            d.iduniversidad,
            d.estado,
            d.urlinfo,
            d.proveedor
        ])

        return newScsh.rows[0]
    }

    static async deleteData({ id }) {
        if (id && id.trim().length > 10) {
            throw new ErrorValidacion('Demasiados caracteres, sugerencia id <= 10 chars')
        }

        if (id) {
            if (!Number.isInteger(Number(id))) {
                return false
            }

            const datos = await pool.query(`
                DELETE FROM becas WHERE id_beca = $1 
                RETURNING * 
                `, [Number(id)])

            if (datos.rowCount === 0) {
                return false
            }
            return true
        }
    }

    static async patchData({ id, input }) {
        if (id && id.trim().length > 10) {
            throw new ErrorValidacion('Demasiados caracteres, sugerencia id <= 10 chars')
        }

        if (!Number.isInteger(Number(id)) || Number(id) < 1 || Number(id) > 2147483647) {
            return false
        }

        const actData = actualizarBeca(input)

        if (!actData.success) {
            throw new ErrorValidacion('Error validación de campos:', JSON.parse(actData.error.message)[0].message)
        }

        const claves = Object.keys(actData.data)
            .filter(clave => Object.hasOwn(MAPA_COLUMNAS_BECAS, clave))

        if (claves.length === 0) {
            throw new ErrorValidacion('No hay campos para actualizar')
        }

        const asignaciones = claves.map((clave, i) => `${MAPA_COLUMNAS_BECAS[clave]} = $${i + 1}`)
        const valores = claves.map(clave => actData.data[clave])

        valores.push(Number(id))
        const posicionId = valores.length

        const resultado = await pool.query(
            `UPDATE becas
         SET ${asignaciones.join(', ')}
         WHERE id_beca = $${posicionId}
         RETURNING
            id_beca AS id,
            nombre_beca AS nombre,
            vigencia_programa AS vigencia,
            descripcion_informacion AS descripcion,
            informacion_aplicar AS aplicar,
            modalidad,
            cobertura,
            estado,
            url_informacion AS url`,
            valores
        )

        if (resultado.rowCount === 0) {
            return false
        }

        return resultado.rows[0]
    }
}