/* 
API.- Es un servicio el cual podemos consultar o llamar para a partir de ahi obtener datos que nosotros queremos.
Son importantes para tener nuestra conexión entre back end y front end
*/

 // fetch es una forma para hacer un apetición o una consulta a una Api

 const fecthPokemon = () => {
    //Recuperando información del input
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    //URL de la api
    const url = 'https://pokeapi.co/api/v2/pokemon/'+ pokeInput;
    // Fecth - Preguntar al servidor la info.
    //Promesa - programacion asincrona es realizar operaciones la mismo tiempo - una consulta al servidor es asincrona debido a que se ejecuta el programa  mientras se ejecuta la consulta
    //Esperame tantito en lo que ecibo el valor.
    fetch(url).then((res) =>{
        /* Manejo de errores */
        if( res.status != "200"){
            console.log(res);
            pokeImage("./images/poke.jpg")
        } else{
            return res.json();
        }
    }).then((data)  =>{
        console.log(data);
        // Imagen que quiero del JSON.
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        //Función para cambiar la imagen
        pokeImage(pokeImg);
        // ID
        let pokeId = data.id;
        console.log(pokeId);

        // Experiencia
        let pokeExperience = data.base_experience;
        console.log(pokeExperience);
        
        // Abilities
        let pokeAbilitie = data.abilities;
        for (let i = 0; i < pokeAbilitie.length; i++){
            console.log(pokeAbilitie[i].ability.name);
        }
        //Función Datos
        pokeInfo(pokeInput,pokeId, pokeExperience, pokeAbilitie);


    })

 }

 const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
 }

 const pokeInfo = (pokeInput, pokeId, pokeExperience, pokeAbilitie) =>{
    //Eliminar informacion
    const div = document.getElementById("pokeInfo");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    //Name
    const pokeNameF = document.createElement('p');
    pokeNameF.innerText = pokeInput;
    document.getElementById("pokeInfo").appendChild(pokeNameF);

    //Eliminar informacion
    const divData = document.getElementById("pokeData");
    while (divData.firstChild) {
        divData.removeChild(divData.firstChild);
    }
    // ID
    const pokeid = document.createElement('p');
    pokeid.innerText = "ID: "+ pokeId + " Experince: " + pokeExperience;
    document.getElementById("pokeData").appendChild(pokeid);


    //Abilities
    const pokeAbilities = document.createElement('p');
    let abilities = '';
    for (let i = 0; i < pokeAbilitie.length; i++){
        abilities = abilities + '  ' + pokeAbilitie[i].ability.name;
    }
    pokeAbilities.innerText = "Abilities: "+ abilities;
    document.getElementById("pokeData").appendChild(pokeAbilities);
 }



 