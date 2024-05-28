<template>
  <div class="card">
    <div class="card-header">
      HomeView
    </div>
      <div class="card-body">
        <div class="home">
          <img alt="Vue logo" src="../assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
     </div>
  </div>
</template>


<script setup>
// script에 setup으로 적히면 composition 방식
// setup이 없으면 option 방식
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


</script>

<style scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>