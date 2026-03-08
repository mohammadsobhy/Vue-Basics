const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello,  ",
			count: 0,
			ourInput: "",
		};
	},
	methods: {
		addCount(value) {
			this.count = this.count + value;
		},
		reduceCount(value) {
			this.count = this.count - value;
		},
		resetCount() {
			this.count = 0;
		},
		ourInputFn(e) {
			this.ourInput = e.target.value;
		},
	},
}).mount("#app");
