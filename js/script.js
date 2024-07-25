
const {createApp} = Vue;

createApp({
    data(){
        return {
            email: null
         }
    },
    methods: {
      generetaemail(){
        for(i = 0; i < 10; i++ ){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {

            });

        }

      },
  }
}).mount('#app');