import { createStore } from 'vuex'

export default createStore({
  state: {
    listaJuegos: JSON.parse(localStorage.getItem('listaJuegos')) || []
  },
  getters: {
    // getProductoById: (state) => (id) => {
    //   return state.listaJuegos.find(juego => juego.id == id)
    // }
  },
  mutations: {
    SET_JUEGOS(state, listaJuegos){
      state.listaJuegos = listaJuegos
    },
    ADD_STOCK(state, indice){
      return state.listaJuegos[indice].stock++
    },
    REMOVE_STOCK(state, indice){
      return state.listaJuegos[indice].stock--
    }
  },
  actions: {
    async cargarJuegos({commit, state}){
      if (state.listaJuegos.length === 0) {
        try {
          let domain = location.origin
          let project = "/desafio-tiendavuex/"
          let url = `${domain}${project}juegos.json`
          let response = await fetch(url);
          let juegos = await response.json();
          console.log(juegos);
          commit("SET_JUEGOS", juegos)
          localStorage.setItem('listaJuegos', JSON.stringify(juegos))
        } catch (error) {
          console.log(error);
        }
      }
    },
    addStock(context, codigo) {
      let indice = context.state.listaJuegos.findIndex(
        (juego) => juego.codigo == codigo)
        console.log(codigo)
      context.commit('ADD_STOCK', indice)
      localStorage.setItem('listaJuegos', JSON.stringify(context.state.listaJuegos))
    },
    removeStock(context, codigo) {
      let indice = context.state.listaJuegos.findIndex(
        (juego) => juego.codigo == codigo);
        context.commit('REMOVE_STOCK', indice)
        localStorage.setItem('listaJuegos', JSON.stringify(context.state.listaJuegos))
    }
  },
  modules: {
  },

})
