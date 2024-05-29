<template>
    <div class="card">
        <div class="card-header">Exam02DomElementRef</div>
        <div class="card-body">
            <!-- 양방향 매핑을 사용하지 않고 수동으로 값 변경하기 -->
            <h6>[DOM 요소 참조]</h6>
            <p>data: {{ data }}</p>
            <div class="d-flex">
                <input id="input1" ref="input1Ref" type="text" style="line-height: 25px;"/>
                <button class="btn btn-dark btn-sm ms-2" @click="setData">입력 양식값 변경</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

//상태 생성
const data = ref("summer"); 

// input 태그가 생성될 경우 input1Ref가 input 태그를 참조하여 value를 가져옴
const input1Ref = ref(null); // input 태그를 참조하고있음

// 정의는 마운트되기 전에 하지만 호출은 마운트 된 이후에 하기 때문에 쿼리 셀렉터 사용가능
function setData() {

    //방법1
    // const input1 = document.querySelector("#input1");
    // data.value = input1.value;

    //방법2
    data.value = input1Ref.value.value; // input1Ref.value가 input 태그 이고 인풋 태그의 .value를 하면 value값을 알 수 있음
}

</script>

<style scoped>
</style>
