<template>
    <div class="card">
        <div class="card-header">Exam03View</div>
            <div class="card-body">
                <UIComponentA/>
                <UIComponentB class="mt-3"/>
                <UIComponentC class="mt-3"/>
                <UIComponentD class="mt-3"/>
            </div>
    </div>
</template>
<script setup>
import UIComponentA from '@/components/Ch02ComponentRouting/UIComponentA.vue';
import UIComponentB from '@/components/Ch02ComponentRouting/UIComponentB.vue';
import UIComponentC from '@/components/Ch02ComponentRouting/UIComponentC.vue';
import UIComponentD from './UIComponentD.vue' // 같은 폴더에 있는 파일 임포트

</script>

<style scoped>

</style>
