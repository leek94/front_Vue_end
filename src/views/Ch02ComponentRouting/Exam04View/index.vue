<template>
    <div class="card">
        <div class="card-header">Exam04View</div>
            <div class="card-body">
                <h4>태그로 화면 이동</h4>
                <p><Router-Link to="/Ch02ComponentRouting/Exam01View">Exam01View</Router-Link></p>
                <p><Router-Link v-bind:to="`/Ch02ComponentRouting/` + `Exam01View`">Exam01View</Router-Link></p> 
                                <!-- Exam01View 부분을 변수 처리해서 원하는 위치로 이동 시킬 수 있음 / 밑에 처럼 생략 가능-->
                <p><Router-Link :to="`/Ch02ComponentRouting/` + `Exam01View`">Exam01View</Router-Link></p>
                <p><Router-Link :to="{path: '/Ch02ComponentRouting/Exam01View'}">Exam01View</Router-Link></p>
                <p><Router-Link :to="{name: 'Exam01View'}">Exam01View</Router-Link></p>


                <hr/>

                <h4>자바스크립트로 화면 이동</h4>
                <p><button class="btn btn-info btn-sm" v-on:click="goUrl('Exam01View')">Exam01View</button></p>
                <p><button class="btn btn-info btn-sm" @click="goUrl('Exam01View')">Exam01View</button></p>

            </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();

function goUrl(kind){
    // 위에 줄이 완료 되기 전에 콘솔이 찍힐 수 있다. -> 비동기 방식  .then으로 이동이 완료되고 나서 이동 완료 콘솔이 찍히게함
    // 그러나 이동은 거의 맨마지막에 하는 일이라서 .then을 자주 사용하지 않음
    router.push("/Ch02ComponentRouting/" + kind);
    // .then(()=>{
    //     console.log("이동 완료");
    // })
    
}


</script>

<style scoped>

</style>
