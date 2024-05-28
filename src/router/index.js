import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Ch02ComponentRouting from './Ch02ComponentRouting';
import Ch03DataBinding from './Ch03DataBinding';
import Ch04EventHandlingWatch from './Ch04EventHandlingWatch'

const routes = [
  {
    path: '/',
    name: 'home', // 나중에 navigation할 수 있는 이름임
    component: HomeView
  },

  // 구조 분해 - 값을 추가할 때 사용함 (배열의 항목을 넣는 것임)
  ...Ch02ComponentRouting, 
  ...Ch03DataBinding,
  ...Ch04EventHandlingWatch
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// history 뒤로가기 기능이 가능하게 계속해서 url을 저장함
// routes는 위의 경로와 컴포넌트를 매칭해주는 객체로 이루어진 배열
export default router
