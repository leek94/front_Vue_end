const routes =[
    {
            path: "/Ch07VuexStateManagement/Exam01RootState",
            component: () => import (/* webpackChunkName: "Ch07VueStateManagement" */ '@/views/Ch07VuexStateManagement/Exam01RootState')
    },
    {
        path: "/Ch07VuexStateManagement/Exam02CounterState",
        component: () => import (/* webpackChunkName: "Ch07VueStateManagement" */ '@/views/Ch07VuexStateManagement/Exam02CounterState')
    },


];

export default routes;