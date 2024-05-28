<template>
    <div class="card">
        <div class="card-header">Exam11Slot</div>
        <div class="card-body">
            <button class="btn btn-info btn-sm me-3" @click="showDialogA">기본 다이얼로그</button>
            <button class="btn btn-warning btn-sm me-3" @click="showDialogB">알림 다이얼로그</button>
            <button class="btn btn-danger btn-sm" @click="showDialogC">로그인</button>
        </div>
        <!-- Dialog는 기본적으로 안보임 show 했을 때만 보임 -->
        <!-- 기본적으로 dialog나 -->
        <DialogA id="dialogA"/>
        <DialogB id="dialogB" @close="hideDialogB"/>
        <DialogC id="dialogC" @close="hideDialogC"/>

    </div>

</template>

<script setup>

import { onMounted } from "vue";
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";
import DialogC from "./DialogC.vue";
// Modal을 부트 스트랩에서 가져옴
import {Modal} from "bootstrap";

let modalDialogA = null;
let modalDialogB = null;
let modalDialogC = null;

// 라이프 사이클에 대해서 나중에 배움 onMouted
// 컴포넌트가 생성되고, DOM 부착될 때 자동으로 실행되는 콜백
onMounted(() => {
    modalDialogA = new Modal(document.querySelector("#dialogA"));
    modalDialogB = new Modal(document.querySelector("#dialogB"));
    modalDialogC = new Modal(document.querySelector("#dialogC"));
});

// 버튼 클릭시 modal 보이게 설정
function showDialogA() {
    modalDialogA.show();
}

function showDialogB() {
    modalDialogB.show();
}

function showDialogC() {
    modalDialogC.show();
}

// hideDialogB를 호출하는 곳은 dialogB 안에서 이다
function hideDialogB() {
    modalDialogB.hide();
}
function hideDialogC() {
    modalDialogC.hide();
}

</script>

<style scoped>

</style>