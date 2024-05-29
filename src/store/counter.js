export default {
  namespaced: true,

  state: {
      count: 100
  },

  getters: {
          //  자신     자신       부모        부모    참조
    getCount(state, getters, rootState, rootGetters) {
        return state.count;
    }
  },

  mutations: {
    setCount(state, payload) {
      state.count = state.count + payload;
    }
  },

  actions: {
    addAction(context, payload){
        context.commit("setCount", payload)
    }
  },

  modules: {

  },
};