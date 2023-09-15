const z = require('zod')

const salaSchema = z.object({
    name: z.string({
        invalid_type_error: 'La sala debe ser un string',
        required_error: 'Sala es requerido'
    }), 
    location: z.string({
        invalid_type_error: 'Location debe ser un string',
        required_error: 'Location es requerido'
    }), 
    schedule: z.array({
        invalid_type_error: 'La reservación debe ser un string',
        required_error: 'Reservación es requerida'
    })
})

function validateSala(obj) {
    return salaSchema.safeParse(obj); // safeParse vs parse
}

module.exports = {
    validateSala
}

