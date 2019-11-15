/* eslint-disable */

import axios from 'axios'

export default {
	namespaced: true,

  state: {
  	token: null,
  	user: null
  },

  getters: {
    authenticated (state) {
      return state.token && state.user
    },

    user (state) {
      return state.user
    }
  },

  mutations: {
  	SET_TOKEN (state, token) {
  		state.token = token
  	},

  	SET_USER (state, user) {
  		state.user = user
  	}
  },

  actions: {
  	async login ({ dispatch }, credentials) {
  		let { data } = await axios.post('auth/login', credentials)

  		return dispatch('attempt', data.token)
  	},

  	async attempt ({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }

      if (!state.token) {
        return
      }

  		try {
  			let { data } = await axios.get('auth/me', {
  				headers: {
  					'Authorization': `Bearer ${token}`
  				}
  			})

  			commit('SET_USER', data)
  		} catch (e) {
  			commit('SET_TOKEN', null)
        commit('SET_USER', null)
  		}
  	},

    logout ({ commit }) {
      return axios.post('auth/logout')
        .then(() => {
          commit('SET_TOKEN', null)
          commit('SET_USER', null)
        })
    }
  }
}
