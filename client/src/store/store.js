import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    houses: [],
    aHouse: {}
  },
  mutations: {
    getHouses: function (state) {
      axios.get('http://localhost:3000/api/houses')
      .then(response => {
        state.houses = response.data
        state.houses.forEach(house => {
          house.price = house.price.toLocaleString()
          house.createdAt = new Date(house.createdAt).toLocaleDateString('de-DE')
        })
      })
    },
    getHouse: function (state, payload) {
      console.log(payload)
      axios.get(`http://localhost:3000/api/houses/${payload}`)
      .then(response => {
        state.aHouse = response.data
        state.aHouse.price = state.aHouse.price.toLocaleString()
        state.aHouse.createdAt = new Date(state.aHouse.createdAt).toLocaleDateString('de-DE')
      })
    },
    addHouse: function (state, result) {
      result.price = result.price.toLocaleString()
      result.createdAt = new Date(result.createdAt).toLocaleDateString('de-DE')
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
    },
    house (state) {
      return state.aHouse
    }
  }
})
