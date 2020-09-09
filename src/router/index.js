import Vue from 'vue'
import VueRouter from 'vue-router'
import wgvi from '../views/wgvi.vue'
import dmdm from '../views/dmdm.vue'

Vue.use(VueRouter)
const routes = [{
		path: '/',
		name: 'wgvi',
		redirect: '/wgvi'

	},
	{
		path: '/wgvi',
		component: wgvi
	},
	{
		path: '/dmdm',
		component: dmdm,
		children: [{
				path: '/',
				component: () => import('../components/utdm/udm.vue')
			},
			{
				path: 'udm',
				component: () => import('../components/utdm/udm.vue')
			},
			{
				path: 'wcgq',
				component: () => import('../components/wckm/wckmdqge.vue')
			},
			{
				path: 'ycwf',
				component: () => import('../components/wckm/ycwf.vue')
			},
			{
				path: 'tkwv',
				component: () => import('../components/wckm/tkwv.vue')
			},
			{
				path: 'ynvi',
				component: () => import('../components/wckm/ynvi.vue')
			},
			{
				path: 'iexj',
				component: () => import('../components/wckm/iexj.vue')
			},
			{
				path: 'wdgj',
				component: () => import('../components/wdgj/wdgj.vue')
			},
			{
				path: 'umkkdge',
				component: () => import('../components/umkktpgj/umkkdge.vue')
			},
			{
				path: 'umkkwvod',
				component: () => import('../components/umkktpgj/umkkwvod.vue')
			},
			{
				path: 'umkkysuj',
				component: () => import('../components/ysujtpgj/umkkysuj.vue')
			},
			{
				path: 'ptkynysuj',
				component: () => import('../components/ysujtpgj/ptkynysuj.vue')
			},
			{
				path: 'wypwynvi',
				component: () => import('../components/ysujtpgj/wypwynvi.vue')
			},
			{
				path: 'yndytjgp',
				component: () => import('../components/ptyntpgj/yndytjgp.vue')
			},
			{
				path: 'ynga',
				component: () => import('../components/ptyntpgj/ynga.vue')
			},
			{
				path: 'wypwd',
				component: () => import('../components/ptyntpgj/wypwd.vue')
			},
			{
				path: 'rmyc',
				component: () => import('../components/ymc/rmyc.vue')
			},
			{
				path: 'tpgjkm',
				component: () => import('../components/etyntpgj/tpgjkm.vue')
			},
			{
				path: 'eqqc',
				component: () => import('../components/etyntpgj/eqqc.vue')
			},
		]
	},


]

const router = new VueRouter({
	//hash 
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	// 1.如果访问的是登录页面（无需权限），直接放行
	if (to.path === '/wgvi') return next()
	// 2.如果访问的是有登录权限的页面，先要获取token
	const tokenStr = window.sessionStorage.getItem('key');
	// 2.1如果token为空，强制跳转到登录页面；否则，直接放行
	if (!tokenStr) return next('/wgvi')
	next()
})

export default router
