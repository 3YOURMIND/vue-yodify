import Toaster from 'src/toaster.vue'
import { createVM } from '../helpers/utils.js'

describe('Toaster.vue', function () {
  it('should render correct contents', function () {
    // eslint-disable-next-line
    const vm = createVM(this, `<Toaster types="error" :autoClose="true" autoCloseTime="8000" :showToaster="true" content="Hello Meeesage"></Toaster>`, { components: { Toaster }})
  })
})
