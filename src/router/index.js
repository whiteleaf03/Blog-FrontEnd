import * as VueRouter from "vue-router";
import {routes} from "./route";

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})