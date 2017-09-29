import VueYodifyComponent from './VueYodify.vue';
import test from './events';

const VueYodify = {};

/* eslint-disable no-param-reassign */
VueYodify.install = function install(Vue) {
  if (this.installed) {
    return;
  }
  this.installed = true;

  Vue.component('vue-yodify', VueYodifyComponent);
  /**
   * Function to add payload to queue.
   * Possible types:
   *  - success
   *  - error
   *  - warn
   *  - info
   */
  Vue.prototype.$yodify = (payload) => {
    test.events.$emit('vue-yodify', payload);
  };
};
/* eslint-enable no-param-reassign */

export default VueYodify;
