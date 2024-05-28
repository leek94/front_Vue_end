<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <div class="mb-3">
                <div class="row mb-2">
                    <label class="col-sm-2 col-form-label">UserId</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="userId">
                    </div>

                    <div class="mt-3 mb-2">
                        <button class="btn btn-info btn-sm" @click="handleProductChange">product 상태의 객체 변경</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 상태 생성
let userId = ref("");

// 상태 감시
watch(userId, (newUserId, oldUserId) => {
    console.group("userId 변경 감시");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd("");
})

// 상태 생성
let product = ref({
    name: "",
    company: "",
    price: 0
});

// 상태 감시 -> 1. 객체 자체 2. 객체 안의 속성

// 객체 자체가 변경될 때를 감시
// watch(product, (newProduct, oldProduct) => {
//     console.group("product 객체 자체 변경 감시");
//     console.log("newPrdouct: ", JSON.parse(JSON.stringify(newProduct)));
//     console.log("oldPrdouct: ", JSON.parse(JSON.stringify(oldProduct)));
//     console.groupEnd("");
// });

// 객체 자체 뿐만 아니라, 속성까지도 변경 감시
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 변경 감시 뿐만 아니라 속성까지도 변경 감시");
    console.log("newPrdouct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldPrdouct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd("");
}, { deep: true });
// deep 속성에 true를 옵션을 주면 객체 자체 뿐만 아니라 속성이 변경된 것도 watch로 볼 수 있음

// 특정 속성만 변경 감시
watch(() => product.value.price, (newPrice, oldPrice)=>{
    console.group("price 속성만 변경 감시");
    console.log("newPrice: "+ newPrice);
    console.log("oldPrice: "+ oldPrice);
    console.groupEnd("");
})

//복수개의 상태를 감시할 경우 -> 복잡하게 이렇게 사용하지 말고 watch를 여러개 작성하자!!!
watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) =>{
    console.group("복수개의 상태를 감시할 경우");
    console.log("newPrice: "+ newUserId);
    console.log("oldPrice: "+ oldUserId);
    console.log("newPrice: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldPrice: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd("");
});

function handleProductChange() {
    
    // 속성만 변경 -> 속성만 변경시 watch가 실행이 안됨
    product.value.name = 90000000;


    //객체 자체가 변경됨
    product.value = {
        name: "제네시스",
        company: "현대",
        price: 80000000
    }
}


 </script>

<style scoped>
</style>