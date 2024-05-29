<template>
    <div class="card">
        <div class="card-header">ChildA</div>
        <div class="card-body">
            <!-- message로 전달된 것은 .value를 붙여야만함 여기만 특이하게 -->
            <p>data1: {{ message.data1.value }}</p>
            <p>data2.name1: {{ message.data2.value.name1 }}</p>
            <p>data2.name2: {{ message.data2.value.name2 }}</p>
            <ChildB/>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
import ChildB from "./ChildB.vue"

const message = inject("message");

console.log("message.data1.value: "+ message.data1.value);
console.log("message.data2.value.name1: "+message.data2.value.name1);
console.log("message.data2.value.name2: "+message.data2.value.name2);
</script>

<style scoped>
</style>