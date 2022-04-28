import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/car",
    name: "Car",
    component: () => import("../views/Car"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import("../views/My"),
  },
	{
		path:'/detail',
		name:'detail',
		component:() => import('../views/Detail')
	},
	{
		path:'/search',
		name:'Search',
		component:() => import('../views/Search'),
		children:[
			{
				path:'/',
				name:'index',
				component:() =>import('../views/Search/Search-index/index.vue')
			},
			{
				path:'/searchList',
				name:'list',
				component:() => import('../views/Search/Search-list/index.vue')
			}
		]
	}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
