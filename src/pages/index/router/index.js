import Vue from 'vue'
import Router from 'vue-router'


const About = () => import('../views/About.vue')
const Other = () => import('../views/Other.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
