import { defineStore } from 'pinia'
import axios from 'axios'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: []
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get()
    }
  }
})
