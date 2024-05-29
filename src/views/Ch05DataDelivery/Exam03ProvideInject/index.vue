<template>
    <div class="card">
        <div class="card-header">Exam03ProvideInject</div>
        <div class="card-body">
             <div>
                <p>data1: {{ data1 }}</p>
                <p>data2.name1: {{ data2.name1 }}</p>
                <p>data2.name2: {{ data2.name2 }}</p>
                <button class="mt-2 btn btn-dark btn-sm mb-2" @click="changeData">데이터 변경</button>
             </div>
             <ChildA/>
        </div>
    </div>
</template>

<script setup>
import { ref,provide } from 'vue';
import ChildA from "./ChildA.vue";
// 상태 생성
const data1 = ref("parent-value1");
const data2 = ref({
    name1: "parent-value2",
    name2: "parent-value3"
});

// 하위 컴포넌트로 데이터 제공
provide("message",{data1: data1, data2});
// 속성과 값이 이름이 같을 경우 위에처럼 생략 가능

//데이터 변경 함수
// 부모에서 값 변경시 자식에서도 전체 다 변경됨
function changeData() {
    data1.value += "0";
    data2.value.name1 += "0";
    data2.value.name2 += "0";
}

</script>

<style scoped>
</style>