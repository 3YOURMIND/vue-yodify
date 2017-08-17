import Toaster from './toaster.vue'

function plugin (Vue) {
  Vue.component('yoda-vuetoaster', Toaster)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Toaster,
  version
}
