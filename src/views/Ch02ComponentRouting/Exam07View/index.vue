<template>
    <div class="card">
        <div class="card-header">Exam07View</div>
            <div class="card-body">
                <h5>경로 변수(파라미터)로 전달된 데이터</h5>
                <p>전달된 게시판 등록: {{ route.params.kind }}</p>
                <p>전달된 색상: {{ route.params.color }}</p>

                <h5>쿼리 스트링으로 전달된 데이터</h5>
                <p>전달된 게시판 등록: {{ route.query.kind }}</p>
                <p>전달된 색상: {{ route.query.color }}</p>
            </div>
    </div>
</template>

<script setup>
// 데이터 전달할때 주의 router가 아닌 route를 얻어야 한다.
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.params.kind);
console.log(route.params.color);
console.log(route.query.kind);
console.log(route.query.color);

</script>

<style scoped>

</style>
