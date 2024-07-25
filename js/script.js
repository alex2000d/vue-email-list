
const {createApp} = Vue;

createApp({
    data(){
        return {
            emails: null,
            email: null,
            random_email:[],
         }
    },
    methods: {
      generateemail(){
        for(i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                this.random_email.push(resp.data.response)
                console.log(resp.data)
                console.log(this)
            });

        }

      },
  }
}).mount('#app');