import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/Home.vue";
import login from "@/components/login.vue";
import signup from "@/components/signup.vue";
import update from "@/components/update.vue";
import add from "@/components/add.vue";

const routes=[
    {
        path:'/Home',
        name:'Home',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/signup',
        name:'signup',
        component:signup
    },
    {
        name:'add',
        path:'/add',
        component: add,
    },
    {
        name:'update',
        path:'/update/:id',
        component: update,
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router