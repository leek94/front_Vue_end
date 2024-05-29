import { createStore } from 'vuex'
import counter from "./counter.js"

//store 객체를 생성
const store = createStore({
  // 루트 상태를 정의 -> 기능 마다 저장되는 상태 ex) 멤버 기능, 쇼핑몰 기능 등등 .js / .js로 모듈로 만들 수 있다
  state: {
    userId: "white"
  },

  // 루트 상태를 읽는 메소드 정의 -> get
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    }
  },

  //루트 상태를 변경하는 메소드 정의(동기 방식) -> 값 변경 set
  mutations: {
    setUserId(state, payload) { // state는 위의 상태를 참조 / payload 변경할 상태값을 가지고 있는 객체
      state.userId = payload;
    }
  },

  //루트 상태를 변경하는 메소드 정의(비동기 방식)
  actions: {
    loginAction(context, payload) {
      new Promise((resolve, reject) => {
      //서버와 통신 작업
      // ...3초 소요
      if(true){
        // 로그인 성공
        resolve({result: "success", userId:payload.userId}); // 성공시 data로 매개값이 들어감
      } else {
        // 로그인 실패
        reject({result:"fail" ,reason:"password is wrong"}); // 실패시 error로 매개값이 들어감
      }
      })

      // data는 로그인 성공인지, 실패인지 값을 받음
      .then((data) => {
        //작업이 성공적으로 처리가 될 경우
        //상태 변경 작성
        console.log("로그인 성공")
                        // 새터 이름, payload에 해당하는 데이터
        context.commit("setUserId", data.userId) // mutation 실행 하고 상태 변경
      })
      .catch((error)=> {
        //작업이 실패 처리될 경우
        console.log("로그인 실패")
      })
    }
  },

  //루트 하위의 상태를 정의
  modules: {
    counter: counter // 이름 같으면 생략 가능 counter 만 적어도 됨
    // counter -> 속성명이 나중에 namespace에 적혀서 중복을 제거해줌
  }
})

// store 객체를 내보내기
export default store;