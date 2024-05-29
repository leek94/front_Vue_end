<template>
    <div class="card">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <!-- message로 전달된 것은 .value를 붙여야만함 여기만 특이하게 -->
            <p>data1: {{ message.data1.value }}</p>
            <p>data2.name1: {{ message.data2.value.name1 }}</p>
            <p>data2.name2: {{ message.data2.value.name2 }}</p>
            <button class="mt-2 btn btn-dark btn-sm mb-2" @click="changeData">데이터 변경</button>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("message");

console.log("message.data1.value: " + message.data1.value);
console.log("message.data2.value.name1: " + message.data2.value.name1);
console.log("message.data2.value.name2: " + message.data2.value.name2);

// 데이터 변경 함수
// 자식에서 데이터 변경시 부모도 변경
function changeData() {
    message.data1.value += "1";
    message.data2.value.name1 += "1";
    message.data2.value.name2 += "1";
}
</script>

<style scoped>
</style>