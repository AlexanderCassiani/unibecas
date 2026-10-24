const metodos = [
    'POST',
    'PUT',
    'PATCH'
]

export const cabecerasJSON = (req, res, next) => {
    if (metodos.includes(req.method) && !req.is('application/json')) {
        res.status(415).json({
            error: `El metodo ${req.method} no puede ser tratado si no es C/T -> APP/JSON`
        })
        return
    }
    next()
}