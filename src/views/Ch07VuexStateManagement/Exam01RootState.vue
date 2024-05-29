<template>
    <div class="card">
        <div class="card-header">Exam01RootState</div>
        <div class="card-body">
            <h6>[루트 상태 읽기]</h6>
            <!-- $는 Vue에서 제공하는 속성이나 메서드 -->
            <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>  <!-- 정의된 store에서 값 받기-->
            <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>   <!-- 정의된 store의 getters에서 값 받기-->
            <p>userId 단방향 바인딩: {{ getUserId() }}</p>  <!-- 우리가 정의한 함수에서 store의 값 받기-->
            <p>userId 단방향 바인딩: {{ computedUserId }}</p>
            <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"/></p>
            
            <hr/>

            <h6>[루트 상태 변경]</h6>
            <button class="btn btn-dark btn-sm me-3" @click="changeByMutation">userId 변경 (Mutation 동기 방식)</button>
            <button class="btn btn-dark btn-sm" @click="changeByAction">userId 변경 (Action 동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore(); // import를 통해서 store 객체를 받아옴

function getUserId() {

    // 둘다 사용 가능(위에 추천)
     return store.state.userId;
    //return store.getters.getUserId; // getter에 () 붙이면 안됨
}

const computedUserId = computed(() => {

    // 둘다 사용 가능(위에 추천)
    return store.state.userId;
    // return store.getters.getUserId;
})

function changeByMutation() {
    new Promise((resolve, reject) => {
      //서버와 통신 작업
      // ...3초 소요
      if(true){
        // 로그인 성공
            resolve({result: "success", userId:"spring"}); // 성공시 data로 매개값이 들어감
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
            store.commit("setUserId", data.userId) // mutation 실행 하고 상태 변경 
            // mutation은 commit으로만 실행 시킬 수 있음
      })
      .catch((error)=> {
        //작업이 실패 처리될 경우
            console.log("로그인 실패")
      })
}

function changeByAction() {
    store.dispatch("loginAction", {userId: "summer"}); // action은 dispatch로만 실행 가능함
    // null 위치가 payload인데 보통은 {userId: "summer"} 처럼 객체로 전달을 함
}
 
</script>

<style scoped>
</style>