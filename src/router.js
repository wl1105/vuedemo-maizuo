import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes=[
    {
        path:"/home",
        component:()=>import("./views/Home.vue")
    },
    {
        path:"/about",
        component:()=>import("./views/About.vue")
    },
    {
        path:"/list",
        component:()=>import("./views/List.vue")
    },
    {
        path:"/user",
        redirect:"/user/profile",
        component:()=>import("./views/User.vue"),
        children:[
            {
                path:"profile",
                component:()=>import("./views/UserProfile.vue")
            },
            {
                path:"posts",
                component:()=>import("./views/UserPosts.vue")
            }
        ]
    },
    {
        path:"*",
        redirect:"/home",
        component:()=>import("./views/Home.vue")
    },
]
const router=new VueRouter({
    mode: "history",
    routes:routes
})
export default router;