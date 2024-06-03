export default {
  namespaced: true,
  // namespaced를 사용해야 하위 모듈과 상위 모듈이 겹칠 경우(같은 이름) 에러가 없음

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
        // 같은 파일에 있는 setCount을 사용하려고 할땐 counter/setCount   
       }
  },

  modules: {

  },
};