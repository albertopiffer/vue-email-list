const { createApp } = Vue

createApp({
	data() {
		return {
			mailsArray: [],
		}
	},
    
	methods: {
		resMail() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					this.mailsArray.push(res.data.response)
				})
		},

        cicle() {
            for (let i = 0; i < 10; i++) {
                this.resMail()
            }
        },

	},

}).mount('#app')