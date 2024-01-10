// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;


// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            message: 'Template HTML CSS Vue',
        };
    },
    mounted(){
        console.log(axios);

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (risposta){
                console.log(risposta);
                console.log(risposta.data);
            });
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');
