<template>
    <div class="card">
        <div class="card-header">MountHook</div>
        <div class="card-body">

        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() =>{
    console.info("Mounted 컴포넌트가 마운트됨")
});

onUnmounted(() =>{
    console.info("Mounted 컴포넌트가 언마운트됨")
});

</script>

<style scoped>
</style>