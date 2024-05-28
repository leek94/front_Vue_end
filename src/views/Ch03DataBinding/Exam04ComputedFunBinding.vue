<template>
    <div class="card">
        <div class="card-header">Exam04ComputedFunBinding</div>
        <div class="card-body">
            <p>이름: {{ name }}</p>
            <p>주민번호: {{ getSsn() }}</p>
            <!--  호출코드 형식 -->
            <p>주민번호: {{ computedSsn }}</p> 
            <!-- computed 사용할 때는 상태코드 처럼 사용 -->
            <hr/>
            <button class="btn btn-success btn-sm me-2" @click="changeName">이름 수정</button>
            <button class="btn btn-danger btn-sm" @click="changeSsn">주민번호 수정</button>

        </div>

    </div>
</template>

<script setup>
import {computed, ref} from "vue"

// 상태 선언
const name = ref("홍길동");
const ssn1 = ref("123456");
const ssn2 = ref("1234567");

// 바인딩을 할때는 일반함수 보다 computed 함수를 사용하는 것이 성능 향상에 좋다
// 일반 함수 -> 무조건 실행됨(컴포넌트가 리렌더링될때 마다 호출)
function getSsn() {
    console.log("getSsn() 실행");
    // const ssn = ssn1.value + "-" + ssn2.value;
    const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
    return ssn;
}
// 계산된 함수 (컴포넌트가 리렌더링이 되더라도 ssn1과 ssn2의 값이 이전과 동일할 경우 호출이 안됨)
const computedSsn = computed(()=> {
    console.log("computedSsn() 실행");
    // const ssn = ssn1.value + "-" + ssn2.value;
    const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
    return ssn;
})

//상태 변경 함수
function changeSsn() {
    ssn2.value = (parseInt(Math.random()*10) + 1) + "234567";
    // ssn2.value ="1234567"; // 상태값이 변경되지 않으면 리랜더링이 일어나지 않음 (함수가 호출되지 않음)
}

//상태 변경 함수
function changeName() {
    name.value += "동";
}
</script>

<style scoped>

</style>
