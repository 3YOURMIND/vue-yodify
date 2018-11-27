import VueYodifyComponent from './components/VueYodify.vue';

export default {
	install(Vue, options) {
		if (this.installed) return;
		this.installed = true;

		Vue.component('vue-yodify', VueYodifyComponent);

		// prevent race condition when emitting
		// notifications before vue is ready
		Vue.prototype.$yodifyBuffer = [];

		/**
		 * @description Function to add payload to queue.
		 * @param {String} $0.text Message Content
		 * @param {String} [$0.type=success] Message Style
		 * @param {Number} [$0.duration=3000] Message Duration
		 * @example { text: 'Success!' }
		 * @example { type: 'error', text: 'Error!' }
		 * @example { type: 'warn', text: 'Warn!' }
		 * @example { type: 'info', text: 'Info!' }
		 * @example { text: 'Long Notification', duration: 10000 }
		 */
		Vue.prototype.$yodify = function({
			duration = 3000,
			text,
			type = 'success',
		}) {
			const notification = { duration, text, type };

			// buffer notifications if vue isn't ready
			if (!this.$root) Vue.prototype.$yodifyBuffer.push(notification);
			else this.$root.$emit('vue-yodify', notification);
		};
	},
};
