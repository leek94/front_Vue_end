<template>
    <div class="card">
        <div class="card-header">Exam01EventHandling</div>
        <div class="card-body">
            <div class="mb-3">
                <h6 class="mb-3">[이벤트 처리]</h6>
                <!-- 함수 참조 -->
                <button class="btn btn-danger btn-sm me-2" @click="handleBtn1">버튼1</button>
                <!-- 함수 호출 매개값 있음 / 내장 이벤트 객체 전달 -->
                <button class="btn btn-info btn-sm me-2" @click="handleBtn2('vue is good', $event)" >버튼1</button>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <input class="form-control" type="text" name="userID" :value="userID" @keyup="handleInput($event)"/>
                <!-- v-model을 사용하지 않았기 때문에 단방향  -->
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <input class="form-control" type="text" name="userID" v-model="userID"/>
                <!-- 양방향 바인딩  -->
            </div>

            <div>입력내용:{{ userID }}</div>

            <hr/>

            <div>
                <h6>[이벤트 수식어 사용]</h6>
                <!-- <a href="javascript:handleLink()">링크로 자바스크립트 실행</a>  이런식으로는 실행 안됨-->
                <a href="" @click.prevent="handleLink">링크로 자바스크립트 실행</a> 
                <!-- @click.prevent 외부 링크로의 이동을 막고 자바스크립트를 실행 -->

                <!-- 제출 기능을 막고 자바스크립트를 실행 -->
                <form class="my-3" @submit.prevent="handleForm">
                    <div class="input-group mb-3">
                        <span class="input-group-text">이메일</span>
                        <input type="email" class="form-control" v-model="userEmail">
                    </div>
                    <div>입력내용: {{ userEmail }}</div>
                    <input type="submit" value="제출" class="btn btn-success btn-sm mt-2" />
                </form>
            </div>

         
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

function handleBtn1() {
    console.log("handleBtn1() 실행");
}

function handleBtn2(arg, event) {
    console.log("handleBtn2() 실행");
    console.log("arg: "+arg);
    console.log("event.target: ", event.target ); // 이벤트가 어디서 발생했는지 태그를 알려줌
}

let userID = ref("");

function handleInput(event){
    console.log("event.target.name" + event.target.name); // 발생한 태그의 이름을 확인
    console.log("event.target.value" + event.target.value);
    // 양방향을 사용하지 않아서 필요함
    userID.value = event.target.value;
}

function handleLink() {
    console.log("handleLink() 실행");
}

let userEmail = ref("");

function handleForm() {
    console.log(userEmail.value)
}
 </script>

<style scoped>
</style>