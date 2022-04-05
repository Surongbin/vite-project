 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

 const routes: Array<RouteRecordRaw> = [
   {
     path: '/',
     name: 'Page1',
     meta: {
         title: 'page1',
         keepAlive: true,
         requireAuth: false
     },
     component: () => import('@/views/page1/index.vue')
   },
   {
       path: '/page2',
       name: 'Page2',
       meta: {
           title: 'page2',
           keepAlive: true,
           requireAuth: true
       },
       component: () => import('@/views/page2/index.vue')
   }
 ]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;
