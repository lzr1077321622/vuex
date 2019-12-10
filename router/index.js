import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Admin from '@/components/Admin'

import Notfound from '@/components/Notfound'
import Information from '@/components/menu/Information'//资料
import Article from '@/components/menu/Article'//干货

import TopCourse from '@/components/menu/TopCourse'//上线课
import BouttomCourse from '@/components/menu/BouttomCourse'//线下课




Vue.use(Router)

const router = new Router({
	//mode: 'history', //去掉url中的#  很细一般人都不知道
	routes: [{ //当输入路由为/的时候重定向到登录页面
		        path: '/',
	        	redirect: '/login'
			},
			{ //首页
				path: '/login',
				name: 'Index',
				component: Index,
				meta: {
					title: '首页',
					index: 1,
					requireAuth: false
				}
			},
			{ //
				path: '/admin',
				name: 'admin',
				component: Admin,
				meta: {
					title: '后台首页',
					index: 2,
					requireAuth: true
				},
				children:[
					{ //
						path: '/information',
						name: 'information',
						component: Information,
						meta: {
							title: '资料',
							index: 4,
							requireAuth: true
						}
					},
					{ //
						path: '/article',
						name: 'article',
						component: Article,
						meta: {
							title: '干货',
							index: 3,
							requireAuth: true
						}
					},
					{ //
						path: '/topCourse',
						name: 'topCourse',
						component: TopCourse,
						meta: {
							title: '线上',
							index: 4,
							requireAuth: true
						}
					},
					{ //
						path: '/bouttomCourse',
						name: 'bouttomCourse',
						component: BouttomCourse,
						meta: {
							title: '线下',
							index: 5,
							requireAuth: true
						}
					}
					
				]
			},
			{
				path: '/404',
				name: '404',
				component: Notfound
			 },
			 {
				path: '*',//这里是当用户随意输入路由
				redirect: '/404' //匹配不到就跳转到自定义的404页面
			}
			
			 
	]
})

export default router;

//下面是脚手架自带的 可以改写成上面的形式 只要暴露出去就行
// export default new Router({
//   routes: [
//     {//首页
//       path: '/',
//       name: 'Index',
//       component: Index
//     }, {//
//       path: '/admin',
//       name: 'admin',
//       component: Admin
//     }
//   ]
// })
