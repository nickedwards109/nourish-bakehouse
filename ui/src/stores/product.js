import axios from 'axios'
import productSchema from 'schemas/productSchema'
import BaseStore from './base'

export default BaseStore({
  schema: productSchema,

  fetchAll() {
    return axios.get('http://localhost:3000/api/v1/products').then(({ data }) => {
      this.cache.setCollection('all', data.map(obj => ({
        ...obj,

        // TODO stop this once the api returns id's as strings
        id: obj.id.toString(),
      })))
    })
  },

  getAll() {
    return this.cache.getCollection('all')
  },
})
