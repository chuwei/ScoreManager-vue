import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AdminIndex from '../components/admin/AdminIndex'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import DashBoard from '../components/admin/dashboard/admin/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppIndex',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      },
      children: [
      ]
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound,
      meta: {
        title: '页面走丢了'
      }
    },
    {
      path: '*', // 此处需特别注意置于最底部
      redirect: '/404'
    }
  ]
})
// 用于创建默认路由
export const createRouter = routes => new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: DashBoard,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
