<template>
    <div class="card">
        <div class="card-header">Exam</div>
        <div class="card-body">
            <Child @child-event-1="handleChildEvent"
                   @child-event-2="handleChildEvent2"
                   @increment-event="handleIncrementEvent"
                   @decrement-event="handleDecrementEvent"
                   :counter="counter"/>
            <!-- Child 안에서 child-evnet-1 이벤트가 발생하면 handleChildEvent 함수를 실행하겠다는 의미 -->
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue"

function handleChildEvent(data) {
    console.log("handleChildEvent: 실행");
    console.log("data: " + data)
}

function handleChildEvent2(arg1, arg2){
    console.log("arg1: ", arg1);
    console.log("arg2: ", arg2);
}

const counter = ref(0);


function handleIncrementEvent(amount) {
    counter.value += amount;
}

function handleDecrementEvent(amount) {
    counter.value -= amount;
}
</script>

<style scoped>
</style>