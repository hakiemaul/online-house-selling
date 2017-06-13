import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    houses: []
  },
  mutations: {
    getHouses: function (state) {
      axios.get('http://localhost:3000/api/houses')
      .then(response => {
        state.houses = response.data
      })
    },
    addHouse: function (state, result) {
      state.houses.push(result)
    }
  },
  actions: {
    addHouse (store, context) {
      axios.post('http://localhost:3000/api/houses', {
        title: context.title,
        pictures: context.pictures,
        description: context.description,
        city: context.city,
        price: context.price,
        specifications: context.specifications,
        contact: context.contact,
        lat: context.lat,
        lng: context.lng
      })
      .then(response => {
        console.log(response.data)
        store.commit('addHouse', response.data)
      })
    },
    editHouse (store, context) {
      axios.put(`http://localhost:3000/api/houses/${context.target}`, {
        atitle: context.title,
        pictures: context.pictures,
        description: context.description,
        city: context.city,
        price: context.price,
        specifications: context.specifications,
        contact: context.contact,
        lat: context.lat,
        lng: context.lng
      })
      .then(response => {
        store.commit('getHouses')
      })
    }
  },
  getters: {
    houses (state) {
      return state.houses
    }
  }
})
