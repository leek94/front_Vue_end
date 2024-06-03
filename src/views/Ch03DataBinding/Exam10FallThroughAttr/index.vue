<template>
    <div class="card">
        <div class="card-header">Exam10FallThroughAttr</div>
        <div class="card-body">
            <UIComponentA id="uiComponentA" class="bg-info" style="color: orange;"
                    @click="handleClick"/>
            <UIComponentB id="uiComponentB" class="bg-info" style="color: orange;"
                    @click="handleClick"/>
                    <!-- 이렇게 속성값만 변경해서 다른 같은 형태를 생성할 수 있음 -->
            <UIComponentB id="uiComponentB" class="bg-danger" style="color: black;"
                    @click="handleClick"/>
            <!-- id값은 UIComponent의 루트 요소에 값이 들어감 -->
            <UIComponentC id="uiComponentC" class="bg-info" style="color: orange;"
                    @click="handleClick"/>

        </div>
    </div>
</template>

<script setup>
import UIComponentA from "./UIComponentA.vue";
import UIComponentB from "./UIComponentB.vue";
import UIComponentC from "./UIComponentC.vue";

function handleClick() {
    console.log("Exam10FallThroughAttr.handleClick() 실행됨");
}
</script>

<style scoped>

</style>