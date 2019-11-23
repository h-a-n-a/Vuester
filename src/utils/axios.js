import axios from 'axios'

// axios will use this baseURL to make requests
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL
})

axiosInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    const { data } = response
    // get data directly
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
