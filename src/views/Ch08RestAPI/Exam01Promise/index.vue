<template>
    <div class="card">
        <div class="card-header">Exam01Promise</div>
        <div class="card-body">
            <div>
                <button class="btn btn-info btn-sm me-2" @click="handleBtn1">비동기 작업1</button>
                <button class="btn btn-info btn-sm me-2" @click="handleBtn2">비동기 작업2</button>
                <div class="mt-3" v-if="loading">
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="mt-3" v-if="!loading">
                    <div>{{ result }}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

//상태 정의
const loading = ref(false);
const result = ref("결과가 나오는 부분");

function asyncWork() { // 일부만 비동기 작업 실행 시 사용
    // 3초후에 응답이 오는지 Promise 생성
    const promise = new Promise((resolve, reject) => {
        // 3초후에, 첫번째 매개값인 람다식이 실행
        setTimeout(() => {
            // 성공적으로 처리했을 경우
            resolve("성공한 응답 내용");
            // 실패 처리할 경우
        //    reject("실패내용");
        }, 3000);
    });
    return promise;
}

// 방법 1
function handleBtn1() {
    loading.value = true;
    console.log("handleBtn1() 시작");
    asyncWork() // -> promise를 리턴함 promise를 리턴하면 then, catch, finally 를 사용할 수 있음
     // resiolve가 호출 될 때    
        .then((data) => {
            console.log("성공시 전달된 데이터: ", data);
            result.value = data;
        }) 
        // reject가 호출 될 때
        .catch((error) => {
            console.log("실패시 전달된 데이터", error);
            result.value = error;
        }) 
        // resolve, reject 실행 이후에 자동 실행
        .finally(() => {
            console.log("마무리 작업 실행");
            loading.value = false;
        }); 
        console.log("handleBtn1() 끝");
}

function handleBtn2() {
    console.log("handleBtn2() 시작");
    // await를 사용하면 비동기가 아니게됨 -> 함수 자체를 비동기로 만들어서 사용
    useAsyncWork();
    console.log("handleBtn2() 끝");
    }
// ---------------------------------------------------------------------------
// 방법 2를 선호
async function useAsyncWork() { 
    loading.value = true;
    // 함수 자체가 비동기이므로 비동기 함수 안에서 동기 방식이여도 상관 없음
    try{
        const data = await asyncWork(); // promise를 await를 사용하면 감싸고 있는 함수는 async(비동기 함수)여야 한다
        console.log("성공 시 전달된 데이터", data);
        result.value = data;

    } catch(error){
        console.log("실패 시 전달된 데이터", error);
        result.value = error;
    }
    console.log("마무리 작업 실행")
    loading.value = false;
}
</script>

<style scoped>
</style>