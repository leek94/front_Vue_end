<template>
  <div class="card">
      <div class="card-header">HelloWorld</div>
      <div class="card-body">
        <h4>{{msg}}</h4>
      <hr/>
      <span> UI Component 입니다.</span>
    </div>
  </div>
</template>

<!-- composition 방식으로 변경 -> setup 추가 -->
<script setup>
//import { defineProps } from "vue";
// HomeView에서 msg 값을 받아옴
const props = defineProps(['msg']);

</script>

<!-- scoped가 붙으면 현재 컴포넌트에만 css가 먹음 -->
<style scoped>
span {
  color: green
}

</style>
