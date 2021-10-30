var boton = document.getElementById('boton')
var boton2 = document.getElementById('boton2')
var contenedor_resultado = document.getElementById('contenedor-resultado-user1')
var contenedor_resultado2 = document.getElementById('contenedor-resultado-user2')
const jotason = 'response.json'

boton.addEventListener('click', function(){
    pintarHeroeOVillano(contenedor_resultado)
})

boton2.addEventListener('click', function(){
    pintarHeroeOVillano(contenedor_resultado2)
})



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
    })
    .catch(error => {
        console.log(error)
    })
}


