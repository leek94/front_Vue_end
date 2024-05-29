<template>
    <div class="card">
        <div class="card-header">Exam02CounterState</div>
        <div class="card-body">
            <h6>[카운터 상태 읽기]</h6>
            <p>count 단방향 바인딩: {{ $store.state.counter.count }}</p>
            <!-- 계층적으로 $store.state 까지는 루트의 상태 $store.state.counter는 하위 루트의 상태 -->
            <!-- count는 하위 모듈의 상태 -->
            <p>count 단방향 바인딩: {{ $store.getters["counter/getCount"] }}</p>
            <p>count 단방향 바인딩: {{ getCount() }}</p>
            <p>count 단방향 바인딩: {{ computedCount }}</p>
            <p>count 양방향 바인딩: <input type="text" v-model="$store.state.counter.count"/></p>
            
            <hr/>

            <h6>[counter 상태 변경]</h6>
            <button class="btn btn-dark btn-sm me-3" @click="changeByMutation">count 변경 (Mutation 동기 방식)</button>
            <button class="btn btn-dark btn-sm" @click="changeByAction">count 변경 (Action 동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

function getCount() {

    // 둘다 가능 (위에 추천)
    return store.state.counter.count;
    // return store.getters["counter/getCount"];
}

const computedCount = computed(() => {

    // 둘다 가능 (위에 추천)
    return store.state.counter.count;
    // return store.getters["counter/getCount"];
});

function changeByMutation() {
    store.commit("counter/setCount", 1)
}

function changeByAction() {
    store.dispatch("counter/addAction", 1)
}

</script>

<style scoped>
</style>