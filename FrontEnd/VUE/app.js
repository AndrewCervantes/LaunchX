/* Generador de usuarios aleatroios  */


/*
Funcion de Vue para crear una app de nombre data y devuelve un objeto message.
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello',
            name: 'Explorers'
        }
    }
})
Mount es para ver donde montare el mensaje(id app)
app.mount('#app')
*/


const app = Vue.createApp({
    data() {
        return {
            nombre: 'Christian',
            apellido: 'Cervantes',
            email: 'ccervantes@inovaccion.mx',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    /*Metodos de la app*/
    methods: {
        /* Consulta API con fetch y async await */
        async cambiarUsuario() {
            const rest = await fetch('https://randomuser.me/api');
            const{ results } = await rest.json();
            //console.log(results;
            this.nombre = results[0].name.first
            this.apellido = results[0].name.last
            this.email = results[0].email
            this.genero = results[0].gender
            this.foto =  results[0].picture.large
        }
    }
})

app.mount('#app')