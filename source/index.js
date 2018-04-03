import VueYodifyComponent from './components/VueYodify.vue';
import { createEventBridge } from './utilities';

export default {
	install(Vue) {
		if (this.installed) return;
		this.installed = true;

		const eventBridge = createEventBridge(Vue);

		// inject registerEventBridge method into component
		VueYodifyComponent.methods.registerEventBridge = function() {
			eventBridge.events.$on('vue-yodify', this.addNotification);
		};

		Vue.component('vue-yodify', VueYodifyComponent);

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
		Vue.prototype.$yodify = ({ duration = 3000, text, type = 'success' }) => {
			eventBridge.events.$emit('vue-yodify', { text, type, duration });
		};
	},
};
