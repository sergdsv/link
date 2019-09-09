import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./components/auth/Login')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('./components/auth/Register')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./components/DashboardComponent'),
        meta: {layout: 'main', requiresAuth: true},
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import('./components/auth/Logout')
    },
    {
        path: '/doc',
        name: 'PostsIndex',
        component: () => import('./components/docs/posts/PostsIndex.vue'),
        meta: {layout: 'main', requiresAuth: true},
    },
    {
      path: '/create',
      name: 'PostCreate',
      component: () => import('./components/docs/posts/PostCreate.vue'),
      meta: {layout: 'main', requiresAuth: true},
    },
    {
      path: '/show/:id',
      name: 'PostShow',
      component: () => import('./components/docs/posts/PostShow.vue'),
      meta: {layout: 'main', requiresAuth: true},
    },
    {
      path: '/organs/',
      name: 'OrgansIndex',
      component: () => import('./components/docs/organs/OrgansIndex.vue'),
      meta: {layout: 'main', requiresAuth: true},
    },
    {
      path: '/organs/create',
      name: 'OrganCreate',
      component: () => import('./components/docs/organs/OrganCreate.vue'),
      meta: {layout: 'main', requiresAuth: true},
    },
    {
      path: '/locations/',
      name: 'LocationsIndex',
      component: () => import('./components/docs/locations/LocationsIndex.vue'),
      meta: {layout: 'main', requiresAuth: true},
    },
  ]

})

  router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        // redirect to login page
        console.log('not autorize!')
        next({ name: 'login' })
        return
    }

    // if logged in redirect to dashboard
    if(to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'dashboard' })
        return
    }

    next()

})

export default router
