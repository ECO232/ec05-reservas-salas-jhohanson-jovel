const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const salas = [
    {
        name: 'Sala 0',
        location: 'Biblio',
        schedules: [

        ]
    },
    {
        name: 'Sala 1',
        location: 'Biblio',
        schedules: [

        ]
    },
    {
        name: 'Sala 2',
        location: 'Biblio',
        schedules: [

        ]
    }
]

const horarios = [
    {
        start: '07:00',
        finish: '08:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '08:00',
        finish: '09:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '09:00',
        finish: '10:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '10:00',
        finish: '11:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '11:00',
        finish: '12:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '12:00',
        finish: '13:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '13:00',
        finish: '14:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '14:00',
        finish: '15:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '15:00',
        finish: '16:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '16:00',
        finish: '17:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '17:00',
        finish: '18:00',
        isAvaiable: true,
        userName: '',
        id: ''
    },
    {
        start: '18:00',
        finish: '19:00',
        isAvaiable: true,
        userName: '',
        id: ''
    }
]

//for para pushear el arreglo horario a las salas
for (let index = 0; index < salas.length; index++) {
const sala = salas.find(sala => sala.name === `Sala ${index}`);
if (sala) {
sala.schedules.push(...horarios);
console.log(salas);
} else {
console.log(`Sala ${index} no encontrada`);
}
}

///////////////////////////////////////////////////////////////////////////////////

let users = []

users.push({
    name: "Dilan",
    id: "1"
})

console.log(users);

/////////////////////////////////////////////////////////
//Funcion para conseguir usuarios y salas existentes

app.get('/salas', (req,res)=>{
    res.send({"salas": salas})
})

app.get('/users', (req,res)=>{
    res.send({"users": users})
})

////////////////////////////////////////////////////////////

app.post('/users', (req,res)=>{
    let newUser = {
        name: req.body.name,
        id: req.body.id
    }
    users.push(newUser)
    res.send(`El usuario se ha creado con exito`)
})

app.put('/salas/:name', (req,res)=>{
    const salaName = req.params.name;
    const newSalaData = req.body;

    const salaIndex = salas.findIndex(sala => sala.name === salaName);

    if (salaIndex !== -1) {
        salas[salaIndex].schedules.forEach((schedule, index) => {
            if (newSalaData.schedules[index]) {
                schedule.isAvaiable = newSalaData.schedules[index].isAvaiable;
                schedule.userName = newSalaData.schedules[index].userName;
                schedule.id = newSalaData.schedules[index].id;
            }
        });

        res.send(`Sala ${salaName} actualizada con éxito.`);
    } else {
        res.status(404).send(`Sala ${salaName} no encontrada.`);
    }
})

/////////////////////////////////////////////////////////

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})

app.get(('/'),(req,res)=>{
    res.send("Bienvenidos a la API de usuarios")
})

