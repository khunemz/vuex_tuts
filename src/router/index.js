import { createRouter, createWebHistory } from 'vue-router'

import FrontPage from '../pages/FrontPage'

const routes = [ 
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/coaches/:id', 
    component: null,
    children: [
      { path: 'contact', component: null}
    ]
  },
  { path: '/register' , component: null},
  { path: '/messages' , component: null },
  { path: '/:notFound(.*)', component: null},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;