<template>
    <div class="card">
        <div class="card-header">Exam02NotState</div>
        <div class="card-body">
            <p>번호: {{ no }}</p>
            <p>이름: {{ name + "-" + company }}</p>
            <p>설명: {{ detail.info }}</p>
            <p>상태: {{ detail.sale?"판매":"품절" }}</p>   <!-- 삼항 연산자 -->
            <p>가격: {{ getPrice() }}</p>  <!-- 함수로 값 호출 -->

            <button @click="changeData" class="btn btn-info btn-sm">일반 변수 값 변경</button>
            <!-- 함수 이름만 넣어도 됨 () 생략가능 -->

        </div>

    </div>
</template>

<script setup>

let no = 1;
let name = "미니백";
let company = "클레인";

let detail = {
    info: "시그너츠 Cecycle Lock 마그네틱 클로저가 특징입니다",
    sale: false
};

let price = 3000000;

function getPrice() {
    return price;
}

function changeData() {
    no = 2;
    name = "백팩";
}

</script>

<style scoped>

</style>