const z = require('zod')

const reservaSchema = z.object({
    name: z.string({
        invalid_type_error: 'La reservación debe ser un string',
        required_error: 'Reservación es requerido'
    }), 
    id: z.string({
        invalid_type_error: 'Id debe ser un string',
        required_error: 'Id es requerido'
    }), 
    hour: z.number({
        invalid_type_error: 'Hora debe ser un número',
        required_error: 'Hora es requerido'
    })
})

function validateReserva(obj) {
    return reservaSchema.safeParse(obj); // safeParse vs parse
}

module.exports = {
    validateReserva
}