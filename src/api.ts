import axios from 'axios'

const noteApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default noteApi;