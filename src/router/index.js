import {createWebHistory} from "vue-router";
import {routes} from "./route";

const router = VueRouter.createRouter({
    history: createWebHistory,
    routes
})