<template>
    <div class="card">
        <div class="card-header">Exam05AttrBinding</div>
        <div class="card-body">

            <div class="mb-4">
                <h5>속성="변수"</h5>
                <!-- <a href="https://www.vue.org" class="me-3">뷰 홈페이지</a> -->
                <a :href="vueHome" class="me-3">뷰 홈페이지</a>
                <!-- <RouterLink to="/">홈 페이지</RouterLink> -->
                <RouterLink :to="appHome">홈 페이지</RouterLink>
            </div>
            
            <div class="mb-4">
                <h5>:속성="연산식 | 매개변수화된 문자열"</h5>
                <!-- <img src="@/assets/photos/photo1.jpg" height="150" class="me-2"/>  -->
                <!-- <img :src="require(`/images/photos/` + imgName)" height="150" class="me-2"/> -->
                <!-- 폴더가 public 밑에 있을 경우 require이 필요 없음 -->
                <!-- build시 이미지가 public 밑으로 들어가면서 주소가 암호화됨 그래서 require이 필요 했던 것 -->
                <!-- 오히려 public 밑에 있을 경우 암호화 되어 있지 않아서 require 사용하면 에러 -->
                <img :src="`/images/photos/` + imgName" height="150" class="me-2"/>
                <!-- 이미지의 경우 require를 사용해서 감싸줘야 나옴 -->
               
                <!-- <img :src="require(`/images/photos/${imgName}`)" height="150" class="me-2"/> -->
                <img :src="`/images/photos/${imgName}`" height="150" class="me-2"/>
            </div>

            <div class="mb-4">
                <h5>:class="변수 | 객체 | 배열"</h5>
                <div class="mb-2 fw-bold text-info">아름다운 풍경</div>
                <div class="mb-3" :class="className1">아름다운 풍경</div>
                <!--변수 1개 | class와 :class가 둘다 있으면 + 되어짐 mr-3 fw-bold 둘다 들어감-->

                <div class="mb-3" :class="[className1, className2]">아름다운 풍경</div> 
                <!--변수 여러개 | 배열이 들어가서 mr-3 fw-bold text-danger 3개 다 들어감 -->

                <div class="mb-3" :class="{'fw-bold' : isBold, 'text-danger' : isRed}">아름다운 풍경</div> 
                <!-- 변수 여러개 (원하는 상황에만 사용 가능하게)| 자바스크립트를 넣을 경우 속성 : 값 형태로 작성, 속성명 = 클래스명 / 값은 변수를 통해서 제어 -->
            </div>

            <div class="mb-4">
                <h5>:style="변수 | 객체 | 배열"</h5>
                <div style="margin-bottom: 10px; font-weight: bold; color: #ffa500">아름다운 풍경</div>

                <div style="margin-bottom: 10px;" :style="[style1, style2]">아름다운 풍경</div> 
                <!-- 배열 사용해서 style 값 변수로 넣어주기 -->

                <div style="margin-bottom: 10px;" :style="{'font-weight': fontWeight,'color': textColor }">아름다운 풍경</div> 
                <!-- 스타일의 이름 : 스타일의 값(변수 처리 가능) -->
               
            </div>

            <hr/>

            <button class="btn btn-info btn-sm" @click="changeData">상태 변수값 변경</button>

            

        </div>

    </div>
</template>

<script setup>
// ref를 사용해서 상태 변수로 위의 변수들에 값을 넣어줌
import {ref} from "vue";

let vueHome = ref("https://vuejs.org");
let appHome = ref("/");

let imgName = ref("photo1.jpg");
let className1 = ref("fw-bold");
let className2 = ref("text-danger");

let isBold = ref(false);
let isRed = ref(true);

let style1 = ref("margin-bottom: 10px");
let style2 = ref("color: green")

let fontWeight = ref("bold");
let textColor = ref("red")

let toggle = ref(true);

function changeData(){
    if(toggle.value) {// 상태값 얻을 때 .value 써야함
        imgName.value = "photo2.jpg"  // 이미지 상태 객체의 값을 변경하려면 .value를 사용해야함
        className1.value = "text-warning";
        fontWeight.value = "";
        textColor.value = "#0000ff";
    } else {
        imgName.value = "photo1.jpg"  // 이미지 상태 객체의 값을 변경하려면 .value를 사용해야함
        className1.value = "text-danger";
        fontWeight.value = "bold";
        textColor.value = "#00ff00";
    }
    toggle.value = !toggle.value;
}
</script>

<style scoped>

</style>