import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quotes: []
  },
  mutations: {
    update_quotes(state, payload) {
      state.quotes = payload;
    }
  },
  actions: {
    get_quotes_from_api(store) {
    axios
      .request({
        url: "http://philosophy-quotes-api.glitch.me/quotes",
      })
      .then((response) => {
          // emit response to HomeContent
          store.commit('update_quotes', response.data);
      })
      .catch((error) => {
          error;
      });
  },
  },
})
