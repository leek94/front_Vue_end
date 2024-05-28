<template>
    <!-- v-bind="$attrs" 부모 요소의 속성이 전달됨 -->
    <div class="card" :id="$attrs.id">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <div class="mb-2" :class="$attrs.class" :style="$attrs.style" @click="$attrs.onClick">
                <!-- $attrs로 받을 경우 onClick(예약어)으로 값을 받을 수 있고 -->
                Content
            </div>
            <hr/>
            <button class="btn btn-info btn-sm me-2" @click="handleBtn1">버튼1(속성값 이용)</button>
            <button class="btn btn-info btn-sm" @click="handleBtn2">버튼2(리스너 이용)</button>
        </div>
    </div>
</template>

<script setup>
import { defineOptions, useAttrs } from 'vue';

// FallThrough 속성을 비활성화 - 루트 요소에 속성을 넣지 않고 원하는 위치에 값을 넣겠다는 의미
defineOptions({
    inheritAttrs: false
});
const attrs = useAttrs();

function handleBtn1() {
    // 속성으로 전달된 값 얻기
    console.log(attrs.id);
    console.log(attrs.style);
    console.log(attrs.class);
}

function handleBtn2() {
    // 속성으로 전달된 핸들러 함수(리스너)를 호출
    attrs.onClick();
}

</script>

<style scoped>

</style>