<template>
    <div class="card"> <!-- 이 위치에 id가 포함됨-->
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div :class="prop.class" :style="prop.style" @click="emit('click')">
                                    <!-- $emit('click')으로도 사용 가능 / click 이벤트 발생 시킴 -->
                Content
            </div>

            <button  class="mt-2 btn btn-info btn-sm" @click="handleClick">버튼</button>
        </div>
    </div>
</template>

<script setup>
// 이렇게 defineProps() = 속성 or defineEmits() = 이벤트 에 적어주면 FallThrough의 자동 추가를 막아줌
// 다른 곳에서 사용하고 싶을 경우에도 막아두고 다른 곳에서 사용.
const prop = defineProps(["class", "style"]); // 객체
const emit = defineEmits(["click"]); // 함수
                        // 정의한 이벤트도 가능

function handleClick() {
    //컴포넌트의 속성값 읽기
    console.log(prop.class);
    console.log(prop.style);
    //컴포넌트의 click 이벤트를 발생
    emit('click');
}

</script>

<style scoped>

</style>