<template>
    <div class="card">
        <div class="card-header">Exam09FormBinding</div>
        <div class="card-body">
            <!--  '@'을 'v-on:' 로 변경가능 -->
            <form @submit.prevent="handleSubmit">
                <!-- prevent가 있어야 제출을 막을 수 있음 -> 유효성검사 이후에 제출해야함 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">상품</span>
                    <input type="text" class="form-control" v-model="product.name">
                    <!-- v-model은 밑에 값을 디폴트로 가지고 있지만 입력하면 그값으로 변경됨 -->
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">회사</span>
                    <input type="text" class="form-control" v-model="product.company">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">가격</span>
                    <input type="number" class="form-control" v-model="product.price">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">설명</span>
                    <input type="text" class="form-control" v-model="product.info">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">국가</span>
                    <select class="form-control" v-model="product.madein">
                        <option value="한국">한국</option>
                        <option value="미국">미국</option>
                        <option value="독일">독일</option>
                    </select>
                </div>

                <!-- 배열 여러개의 체크 박스 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">색상</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input id="chekboxBlack" class="form-check-input" type="checkbox" value="black" v-model="product.colors">
                            <label class="form-check-label" for="chekboxBlack">블랙</label>
                            <!-- label의 for가 있으면 체크 박스가 아닌 이름을 눌러도 체크가 된다. -> input 태그의 id를 받아야함 for에 -->
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="chekboxRed" class="form-check-input" type="checkbox" value="red" v-model="product.colors">
                            <label class="form-check-label" for="chekboxRed">레드</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="chekboxYellow" class="form-check-input" type="checkbox" value="yellow" v-model="product.colors">
                            <label class="form-check-label" for="chekboxYellow">옐로우</label>
                        </div>
                    </div>
                </div>

                <!-- value값이 1개 뿐일 경우에는 true/false 중 한가지 뿐 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">판매1</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale1" value="true" 
                            v-model="product.sale1">
                            <label class="form-check-label" for="chekboxSale1">판매1</label>
                        </div>
                    </div>
                </div>

                <!-- value 값이 1개 뿐일 때 true/false 이외의 값을 사용하려면 아래처럼 사용 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">판매2</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale2" 
                            v-model="product.sale2" true-value="yeah" false-value="ha">
                            <label class="form-check-label" for="chekboxSale2">판매2</label>
                        </div>
                    </div>
                </div>

                <!-- v-model이 같을 경우 그룹핑됨 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">성별</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex1" value="man" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex1">남성</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex2" value="woman" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex2">여성</label>
                        </div>
                    </div>
                </div>

                <div>
                    <input type="submit" value="등록" class="btn btn-danger btn-sm me-2"/>
                    <!-- Vue에서 리셋 버튼은 양식을 초기화하지 않음 그래서 reset 타입을 바로 쓰지 않음 -->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let product = ref({
    name: "셔츠",
    company: "지오다노",
    price: 35000,
    info: "통풍이 잘되어 시원해요",
    madein: "한국",
    colors: ["black", "yellow"],
    sale1: true,
    sale2: "yeah",
    sex: "woman"
});

function handleSubmit(){
    // 유효성 검사 코드 추가...
    console.log(JSON.parse(JSON.stringify(product.value)));
    // 서버 통신 코드 추가...
}
 // 리셋시 디폴트 값을 다시 전달
function handleReset() {
    console.log("handleReset() 실행")

    // 객체 전체를 변경
    product.value = {
    name: "셔츠",
    company: "지오다노",
    price: 35000,
    info: "통풍이 잘되어 시원해요",
    madein: "한국"
};
    // 아래 방식으로 하나 하나 변경해도 되지만 위처럼 객체 전체를 변경할 수 있다.
    // product.value.name = "셔츠";
    // product.value.company = "지오다노";
}


</script>

<style scoped>

</style>