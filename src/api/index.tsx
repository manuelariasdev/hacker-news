import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1' 

})