<template>
    <div class="card">
        <div class="card-header">Exam01Props</div>
        <div class="card-body">
            <ChildA prop1="value1"
                    prop2="value2"
                    productNo="1"
                    product-kind="bag"
                    :productPrice="1000"
                    :objectProp="{name:'홍길동', age:25}"
                    :arrayProp="['블랙','레드']"
                    :funProp="() => '리턴값'"/>
                    <!-- :productNo="1"이렇게 전달시 숫자 1 로 전달 -->
                    <!-- :이 안 붙으면 문자열로 전달, :이 붙으면 코드로 전달 -->
            <hr/>
            <ChildB v-bind:productNo="product.no"
                    :productKind="product.kind"
                    :product="product"
                    v-bind="product"/>
                    <!-- prop의 값이 상태값이 되면 부모의 값이 변경되면 자식에 자동 반영됨 -->
            <button class="btn btn-info btn-sm mt-3" @click="changeData">상태변경</button>
                    <!-- 속성, 속성, 객체, 구조분해된 값 전달 -->
            <hr/>
            <ChildC propA="문자열"
                    :propB="5"
                    :propC="['뷰',5]"
                    :propD="'프론트엔드'"
                    :propF="{message: 'Thanks'}"
                    :propG="['yellow','green']"
                    :propH="() => '기본값1'"
                    :propI="5"
                    />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";

const product = ref({
    no:1,
    kind:"bag"
})

function changeData() {
    product.value.no +=1;
    product.value.kind += "g";
}

</script>

<style scoped>
</style>