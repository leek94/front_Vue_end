<template>
    <!-- FallThrough를 통해서 이 위치에 속성들이 들어옴 -->
    <div class="card">
        <div class="card-header">ChildA</div>
        <div class="card-body" :class="prop.prop1"> <!--속성 값으로도 사용 가능-->
            <p>{{ prop.prop1 }}, {{ prop1 }}</p> <!-- 두가지 방식 사용 가능-->
            <p>{{ prop.prop2 }}, {{ prop2 }}</p>
            <p>{{ prop.productKind }}, {{ productKind }}</p>
            <p>{{ prop.productPrice }}, {{ productPrice }}</p>
            <p>{{ prop.objectProp.name }}, {{ objectProp.age }}</p>
            <p>{{ prop.arrayProp[0] }}, {{ arrayProp[1] }}</p>
            <p>{{ prop.funProp() }}, {{ funProp() }}</p>

        </div>
    </div>
</template>

<script setup>
const prop = defineProps([
    "prop1",
    "prop2",
    "productNo",
    "productKind",
    "productPrice",
    "objectProp",
    "arrayProp",
    "funProp"
]);

// 속성값 읽기
console.log("prop1: " + prop.prop1);
console.log("prop2: " + prop.prop2);
console.log("prodoucNo: " + prop.productNo, typeof(prop.productNo));
console.log("productKind: " + prop.productKind);
console.log("productPrice: " + prop.productPrice, typeof(prop.productPrice));
console.log("objectProp: " + prop.objectProp.name, prop.objectProp.age);
console.log("arrayProp: " + prop.arrayProp[0], prop.arrayProp[1]);
console.log("funProp: " + prop.funProp(),typeof(prop.funProp) );

</script>

<style scoped>
</style>