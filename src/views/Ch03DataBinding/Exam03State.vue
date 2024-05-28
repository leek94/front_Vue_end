<template>
    <div class="card">
        <div class="card-header">Exam03State</div>
        <div class="card-body">
            <p>번호: {{ no }}</p>
            <p>이름: {{ name + "-" + company }}</p>
            <p>설명: {{ detail.info }}</p>
            <p>상태: {{ detail.sale?"판매":"품절" }}</p>   <!-- 삼항 연산자 -->
            <p>가격: {{ getPrice() }}</p>  <!-- 함수로 값 호출 -->

            <hr/>
            <button @click="changeData" class="btn btn-info btn-sm">상태 변수 값 변경</button>
            <!-- 함수 이름만 넣어도 됨 () 생략가능 -->

        </div>

    </div>
</template>

<script setup>
// ref를 사용해서 상태 변수로
import {ref} from 'vue';
let no = ref(1);
let name = ref("미니백");
let company = ref("클레인");

let detail = ref({
    info: "시그너츠 Cecycle Lock 마그네틱 클로저가 특징입니다",
    sale: false
});

let price = ref(3000000);


function getPrice() {
    return price.value;
}

function changeData() {
    no.value++;
    name.value = "백팩";

    // 개별 속성 변경
    // detail.value.info = "시그너츠 Cecycle Lock 마그네틱 클로저와 빨간색의 조화가 좋습니다.";
    // detail.value.sale = !detail.value.sale;

    // 객체 속성 변경
    detail.value = {
        info: "시그너츠 Cecycle Lock 마그네틱 클로저와 빨간색의 조화가 좋습니다.",
        sale: !detail.value.sale
    };


    price.value += 1000;
}

</script>

<style scoped>

</style>