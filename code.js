
const ul = document.querySelector(".ciudades");
const enviar = document.getElementById("boton");
const texto = document.getElementById("texto");
const texterr = document.getElementById("error");
let ciudadesingresadas = [];

enviar.addEventListener("click",function(){
    fetchPrincipal();
})

async function fetchPrincipal(){
    const apikey = "9c2825d2ca070bd59cb3e939c8da349a";

    const li = document.createElement("li");
    li.classList.add("elemento");

    const textoingresado = texto.value;
    texterr.innerHTML = "";

    try{ 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textoingresado}&units=metric&appid=${apikey}`); 

        if(!response.ok){ 
            throw new Error("Error encontrado"); 
        }

        if(ciudadesingresadas.includes(textoingresado)){
            texterr.innerHTML = "Ya escribiste esa ciudad";
            return;
        }

        const data = await response.json(); 
        
        const datos=`
        <p class="ciudad">${data.name} <span class="pais">${data.sys.country}</span></p>
        <h1 class="temp">${parseInt(data.main.temp) }°C</h1>
        <img class="imagen" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="no hay imagen xd">
        <p class="descripcion">${data.weather[0].description.toUpperCase()}</p>`

        console.log(textoingresado);
        li.innerHTML = datos;
        ul.appendChild(li);
    
        ciudadesingresadas.push(textoingresado);

        console.log(data); 
    }

    catch(error){ //en caso de que falle, con el catch atrapamos el error y con el console lo printeamos en la consola
        console.error(error);
        texterr.innerHTML = "escribi un nombre valido";
    }
}

/*
function Funcion(){
    const li = document.createElement("li");
    const datos=`<h2>Athens</h2>
    <p class="xd">pais</p>
    <h1>11 °c</h1>
    <img src="" alt="no hay imagen xd">
    <p>descripcion</p>`

    li.classList.add("elemento");
    li.innerHTML = datos;
    ul.appendChild(li);
}*/