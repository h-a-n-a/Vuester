import axios from 'utils/axios'

// make requests here
function getVuester() {
  return axios.get('/vuester')
}

export default {
  getVuester
}
