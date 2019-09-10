/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2019/9/10
 * ======================================== */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/comp1',
                component: () => import('../views/comp1.vue')
            },
            {
                path: '/comp2',
                component: () => import('../views/comp2.vue')
            },
            { path: '/', redirect: '/comp1' }
        ]
    })
}