
const routes = [
    {
        path: '/Ch02ComponentRouting/Exam01View',
        name: 'Exam01View',
        component: () => import (/* webpackChunkName: " Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam01View')
    },

    {
        path: '/Ch02ComponentRouting/Exam02View', // 요청이 들어왔을때 다운로드 됨
        component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam02View')
    },

    {
        path: '/Ch02ComponentRouting/Exam03View',
        component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam03View')
    },

    {
        path: '/Ch02ComponentRouting/Exam04View',
        name: 'Exam04View',
        component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam04View')
    },

    {
        path: '/Ch02ComponentRouting/Exam05View',
        name: 'Exam05iew',
        component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam05View'),
        redirect: '/Ch02ComponentRouting/Exam05View/UIComponentA',
        // redirect에 적어주면 최초 들어왔을때 실행되게 됨
        children: [
        {
            path:"UIComponentA", // Ch02ComponentRouting/Exam05View/UIComponentA
            component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/components/Ch02ComponentRouting/UIComponentA.vue')
        },
        {
            path:"UIComponentB", // Ch02ComponentRouting/Exam05View/UIComponentB
            component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/components/Ch02ComponentRouting/UIComponentB.vue')
        },
        {
            path:"UIComponentC", // Ch02ComponentRouting/Exam05View/UIComponentC
            component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/components/Ch02ComponentRouting/UIComponentC.vue')
        }
        ]
    },

    {
        path: '/Ch02ComponentRouting/Exam06View',
        name: 'Exam06View',
        component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam06View')
    },

    {
        path: '/Ch02ComponentRouting/Exam07View/:kind?/:color?',  // ?는 값이 있어도 되고 없어도 된다는 의미
        name: 'Exam07View',
        component: () => import (/* webpackChunkName: "Ch02ComponentRouting" */ '@/views/Ch02ComponentRouting/Exam07View')
    }
];

export default routes;