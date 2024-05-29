import { createApp } from 'vue' // exports
import App from './App.vue'     // default exports
import router from './router'
// import router from './router/index.js' -> 이렇게 사용가능함 index.js는 폴더를 모듈로 사용가능하게 함
// 모듈 .js,  컴포넌트 .vue의 경우 이렇게 생략해서 사용 가능

//Bootstrap 관련 Javascript와 css 로딩
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'
// from이 없는 경우 이자리에 바로 넣겠다는 의미 -> 가져다 쓰지는 않음 로딩만함

// App 컴포넌트를 <div id="app"></div>에 내용으로 추가
createApp(App).use(store).use(router).mount('#app') // mount는 태그 아이디 안에 앞의 내용을 넣으라는 뜻 
// createApp(App)이 들어감
