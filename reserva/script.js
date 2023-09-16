const apiUrlGet = "http://127.0.0.1:3000/salas";
const apiUrlPut = "http://127.0.0.1:3000/salas/"

async function fetchItems() {
    try{
        const response = await fetch(apiUrlGet);
        if (!response.ok) {
            throw new error(`HTTP error : Status: ${response.status}`)
        }
        const items = await response.json()
        return items; 
    }catch(e){
        console.log("Error fetching items: ", e);
        return ;
    }
}

let data = null; 

async function renderSalas() {
    data = await fetchItems(); 

    console.log(data);
    let infoDiv = document.getElementById("infoDiv");
    data.salas.forEach(e => {
        let cardInfo = document.createElement('section'); 
        cardInfo.classList.add("cardStyle");

        let nameSala = document.createElement("label");
        nameSala.innerText = e.name;

        let location = document.createElement("label");
        location.innerText = e.location;

        card.appendChild(nameSala, location); 
        
        for (let i = 0; i < salas.schedule.length; i++) {
            
            let reservaciones = document.createElement("div");
            reservaciones.classList.add("reservaciones"); 

            let hour = document.createElement("label"); 
            hour.innerText = `From ${salas.schedule[i].start} to ${salas.schedule[i].finish}`

            let resName = document.createElement("label"); 
            if (salas.schedule[i].isAvaiable === false){
                resName.innerText = salas.schedule[i].isAvaiable;
                reservaciones.classList.add("salaReservada")
            }else{
                resName.innerText = "Ta disponible bro";
            }

            let button = document.createElement("button");
            button.id = i; 
            button.name = salas.name;
            button.innerText = "Reserva"; 
            button.addEventListener('click',() =>{
                salas.schedule(this.userName, this.id); 
            }) 

            reservaciones.appendChild(hour)
            reservaciones.appendChild(resName)
            if (salas.schedule[i].isAvaiable === true) {
                reservaciones.appendChild(button);
            }

            card.appendChild(reservaciones)
        }

        infoDiv.appendChild(card)

    }); 
}

function salaReservada(name, start){
    let inputName = document.getElementById('inputName').value
    let inputId = document.getElementById('inputId').value
    if(inputName == "" || inputId == ""){
        alert("Uno de los campos está vacio como yo")
        return
    }
    let hora = start
    alert(`El usuario llamado ${inputName} con identificación ${inputId} ha hecho una reserva de la sala ${name} con una hora de inicio de ${start}`) 
}

renderSalas()