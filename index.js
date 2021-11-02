var boton = document.getElementById('boton')
var contenedor_resultado = document.getElementById('contenedor-resultado-user1')
var contenedor_resultado2 = document.getElementById('contenedor-resultado-user2')

const jotason = 'response.json'

// pintarHeroeOVillano(contenedor_resultado)
// pintarHeroeOVillano2(contenedor_resultado2)


var estadisticasU1 = []
var estadisticasU2 = []

var contadorUsuario1 = 0
var contadorUsuario2 = 0


boton.addEventListener('click', function(){
    pintarHeroeOVillano(contenedor_resultado)
    pintarHeroeOVillano2(contenedor_resultado2)

    compararEstadisticas(estadisticasU1, estadisticasU2)

    estadisticasU2 = []
    estadisticasU1 = []
})




function compararEstadisticas(listaU1, listaU2){
    if(listaU1[0] > listaU2[0]){
        console.log("Usuario 1 gana")

        contadorUsuario1++
        document.getElementById('usuario1').innerHTML = contadorUsuario1

        console.log(estadisticasU1)
        console.log(estadisticasU2)

    }else if(listaU1[0] < listaU2[0]){
        console.log("Usuario 2 gana")

        contadorUsuario2++
        document.getElementById('usuario2').innerHTML = contadorUsuario2

        console.log(estadisticasU1)
        console.log(estadisticasU2)

    }else if(listaU1[0] === listaU2[0]){
        console.log("Empate")

        console.log(estadisticasU1)
        console.log(estadisticasU2)
    }
}







function pintarHeroeOVillano(caja){
    caja.innerHTML = ''
    // const rndInt = Math.floor(Math.random() * 731)
    const rndInt = parseInt(Math.random() * (563 - 0) + 1) // 731
    // console.log(rndInt)

    fetch(jotason)
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

    })
    .catch(error => {
        console.log(error)
    })
}


function pintarHeroeOVillano2(caja){
    caja.innerHTML = ''
    // const rndInt = Math.floor(Math.random() * 731)
    const rndInt = parseInt(Math.random() * (563 - 0) + 1) // 731
    // console.log(rndInt)

    fetch(jotason)
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
            data[rndInt].powerstats.speed,
            data[rndInt].powerstats.durability,
            data[rndInt].powerstats.power,
            data[rndInt].powerstats.combat,
            data[rndInt].powerstats.strength
        ]
        
    })
    .catch(error => {
        console.log(error)
    })
}