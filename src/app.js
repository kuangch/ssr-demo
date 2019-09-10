import Vue from 'vue'
import App from  './App.vue'

import {createRouter} from "./router";

export function createApp(ssrCtx) {
    const router = createRouter()
    const app = new Vue({
        router,
        ssrCtx,
        render: h => h(App)
    })
    return {app, router}
}