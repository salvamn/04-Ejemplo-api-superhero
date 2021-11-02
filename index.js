var boton = document.getElementById('boton')
var contenedor_resultado = document.getElementById('contenedor-resultado-user1')
var contenedor_resultado2 = document.getElementById('contenedor-resultado-user2')

const jotason = 'response.json'


var estadisticasU1 = []
var estadisticasU2 = []

var contadorUsuario1 = 0
var contadorUsuario2 = 0


boton.addEventListener('click', async function(){

    await pintarHeroeOVillano(contenedor_resultado)
    await pintarHeroeOVillano2(contenedor_resultado2)

    compararEstadisticas(estadisticasU1, estadisticasU2)
})


async function pintarHeroeOVillano(caja){
    caja.innerHTML = ''
    // const rndInt = Math.floor(Math.random() * 731)
    const rndInt = parseInt(Math.random() * (563 - 0) + 1) // 731
    // console.log(rndInt)

    await fetch(jotason)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        caja.innerHTML += `
        <div class='tarjeta'>

            <img width='220px' src='${data[rndInt].images.md}'></img>
            <h1><u>${data[rndInt].name}</u></h1>
            <h2>
                Bando: ${data[rndInt].biography.alignment === 'good' ? 'Bueno' : 'Malo'} - ${data[rndInt].biography.publisher}
            </h2>
            <h3>Estadisticas de poder</h3>

            <span style="color: ${parseInt(data[rndInt].powerstats.intelligence) >= 70 ? 'green' : 'red'};">
                Inteligencia: ${data[rndInt].powerstats.intelligence}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.strength) >= 70 ? 'green' : 'red'};">
                Fuerza: ${data[rndInt].powerstats.strength}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.speed) >= 60 ? 'green' : 'red'};">
                Velocidad: ${data[rndInt].powerstats.speed}   
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.durability) >= 50 ? 'green' : 'red'};">
                Durabilidad: ${data[rndInt].powerstats.durability}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.power) >= 70 ? 'green' : 'red'};">
                Poder: ${data[rndInt].powerstats.power}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.combat) >= 65 ? 'green' : 'red'};">
                Combate: ${data[rndInt].powerstats.combat}
            </span>

        </tarjeta>
        `

        estadisticasU1 = [
            data[rndInt].powerstats.intelligence,
            data[rndInt].powerstats.speed,
            data[rndInt].powerstats.durability,
            data[rndInt].powerstats.power,
            data[rndInt].powerstats.combat,
            data[rndInt].powerstats.strength
        ]
        console.log("----------------------------------")
        console.log("Heroe o Villano del jugador 1 listo")

    })
    .catch(error => {
        console.log(error)
    })
}


async function pintarHeroeOVillano2(caja){
    caja.innerHTML = ''
    // const rndInt = Math.floor(Math.random() * 731)
    const rndInt = parseInt(Math.random() * (563 - 0) + 1) // 731
    // console.log(rndInt)

    await fetch(jotason)
    .then(response => response.json())
    .then(data => {
        caja.innerHTML += `
        <div class='tarjeta'>

            <img width='220px' src='${data[rndInt].images.md}'></img>
            <h1><u>${data[rndInt].name}</u></h1>
            <h2>
                Bando: ${data[rndInt].biography.alignment === 'good' ? 'Bueno' : 'Malo'} - ${data[rndInt].biography.publisher}
            </h2>
            <h3>Estadisticas de poder</h3>

            <span style="color: ${parseInt(data[rndInt].powerstats.intelligence) >= 70 ? 'green' : 'red'};">
                Inteligencia: ${data[rndInt].powerstats.intelligence}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.strength) >= 70 ? 'green' : 'red'};">
                Fuerza: ${data[rndInt].powerstats.strength}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.speed) >= 60 ? 'green' : 'red'};">
                Velocidad: ${data[rndInt].powerstats.speed}   
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.durability) >= 50 ? 'green' : 'red'};">
                Durabilidad: ${data[rndInt].powerstats.durability}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.power) >= 70 ? 'green' : 'red'};">
                Poder: ${data[rndInt].powerstats.power}
            </span>

            <span style="color: ${parseInt(data[rndInt].powerstats.combat) >= 65 ? 'green' : 'red'};">
                Combate: ${data[rndInt].powerstats.combat}
            </span>

        </tarjeta>
        `

        estadisticasU2 = [
            data[rndInt].powerstats.intelligence,
            data[rndInt].powerstats.strength,
            data[rndInt].powerstats.speed,
            data[rndInt].powerstats.durability,
            data[rndInt].powerstats.power,
            data[rndInt].powerstats.combat,
        ]
        console.log("----------------------------------")
        console.log("Heroe o Villano del jugador 2 listo")
        
    })
    .catch(error => {
        console.log(error)
    })
}



function compararEstadisticas(listaU1, listaU2){
    console.log("----------------------------------")
    console.log("Comparacion de estadisticas listas")
    console.log(estadisticasU1)
    console.log(estadisticasU2)

    var ganadorU1 = 0
    var ganadorU2 = 0

    // COMPARACION DE INTELIGENCIA
    if(listaU1[0] > listaU2[0]){
        ganadorU1++ // Si gana en inteligencia se le suma un punto
        console.log("Gana U1 en inteligencia")
    }else if(listaU1[0] < listaU2[0]){
        ganadorU2++ // Si gana en inteligencia se le suma un punto
        console.log("Gana U2 en inteligencia")
    }else if(listaU1[0] === listaU2[0]){
        console.log("Empate de inteligencia")
    }

    // COMPARACION DE FUERZA
    if(listaU1[1] > listaU2[1]){
        ganadorU1++
        console.log("Gana U1 en fuerza")
    }else if(listaU1[1] < listaU2[1]){
        ganadorU2++
        console.log("Gana U2 en fuerza")
    }else if(listaU1[1] === listaU2[1]){
        console.log("Empate de fuerza")
    }

    // COMPARACION DE VELOCIDAD
    if(listaU1[2] > listaU2[2]){
        ganadorU1++
        console.log("Gana U1 en velocidad")
    }else if(listaU1[2] < listaU2[2]){
        ganadorU2++
        console.log("Gana U2 en velocidad")
    }else if(listaU1[2] === listaU2[2]){
        console.log("Empate de velocidad")
    }

    // COMPARACION DE DURABILIDAD
    if(listaU1[3] > listaU2[3]){
        ganadorU1++
        console.log("Gana U1 en durabilidad")
    }else if(listaU1[3] < listaU2[3]){
        ganadorU2++
        console.log("Gana U2 en durabilidad")
    }else if(listaU1[3] === listaU2[3]){
        console.log("Empate de durabilidad")
    }

    // COMPARACION DE PODER
    if(listaU1[4] > listaU2[4]){
        ganadorU1++
        console.log("Gana U1 en poder")
    }else if(listaU1[4] < listaU2[4]){
        ganadorU2++
        console.log("Gana U2 en poder")
    }else if(listaU1[4] === listaU2[4]){
        console.log("Empate de poder")
    }

    // COMPARACION DE COMBATE
    if(listaU1[5] > listaU2[5]){
        ganadorU1++
        console.log("Gana U1 en combate")
    }else if(listaU1[5] < listaU2[5]){
        ganadorU2++
        console.log("Gana U2 en combate")
    }else if(listaU1[5] === listaU2[5]){
        console.log("Empate de combate")
    }

    if(ganadorU1 > ganadorU2){
        console.log("Usuario 1 gana")
        contadorUsuario1++
        document.getElementById('usuario1').innerHTML = contadorUsuario1
    }else if(ganadorU1 < ganadorU2){
        console.log("Usuario 2 gana")
        contadorUsuario2++
        document.getElementById('usuario2').innerHTML = contadorUsuario2
    }else if(ganadorU1 === ganadorU2){
        console.log("Empate")
        alert("Empate")
    }
}