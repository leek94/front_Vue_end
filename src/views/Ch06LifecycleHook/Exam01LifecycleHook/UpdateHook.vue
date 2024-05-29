<template>
    <div class="card">
        <div class="card-header">UpdateHook</div>
        <div class="card-body">
            <p>count: {{ count }}</p>
            <button class="btn btn-info btn-sm mt-2" @click="count++">상태 변경</button>
            <!-- 함수 호출 없이 값을 올릴 수도 있다. -->
        </div>
    </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";

//상태 생성
const count = ref(0);

//Lifecycle Hook 정의
onMounted(() =>{
    console.info("mountHook 컴포넌트가 마운트됨")
    count.value = 100;
    
    const mybutton = document.querySelector("#mybutton") // 마운트 되고는 사용해도 찾을 수 있는데
});

// const mybutton = document.querySelector("#mybutton") // 이렇게 onMounted 밖에서 실행시키면 DOM에 올라가기 전에 실행되서 찾을 수 없음

onUnmounted(() =>{
    console.info("unMountHook 컴포넌트가 언마운트됨")
});

onBeforeUpdate(() =>{
    console.log("UpdateHook 컴포넌트가 업데이트 직전임")
});

// 업데이트에서는 상태 변경 코드를 넣으면 안된다.
onUpdated(()=>{
    console.log("UpdateHook 컴포넌트가 업데이트됨")
    // count.value += 1; // 무한 루프에 빠짐
    // 상태변경 되면 onUpdated 함수가 자동 실행되는데 그럼 무한히 반복하게됨
});

</script>

<style scoped>
</style>