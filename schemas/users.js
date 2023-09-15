const z = require('zod')

const userSchema = z.object({
    name: z.string({
        invalid_type_error: 'El usuario debe ser un string',
        required_error: 'Usuario es requerido'
    }), 
    id: z.string({
        invalid_type_error: 'Id debe ser un string',
        required_error: 'Id es requerido'
    })
})

function validateUser(obj) {
    return userSchema.safeParse(obj); // safeParse vs parse
}

module.exports = {
    validateUser
}