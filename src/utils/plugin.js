import globalAPIs from '@/api/index'

const install = Vue => {
  if (install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return globalAPIs
      }
    }
  })
}

export default {
  install
}
