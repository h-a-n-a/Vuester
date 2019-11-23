import axios from 'utils/axios'

// make requests here
function getSomething(params) {
  return axios.get('/something', { params })
}

export default {
  getSomething
}
