<template>
	<div class="admin">

		<el-container>
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu
				  router
				  default-active="0"
				  class="el-menu-vertical-demo"
				  background-color='#303133'
				  active-text-color='#f8f8f8'
				  text-color='#fff'
				>
				  <el-submenu index="1">
					<template slot="title">
					  <i class="el-icon-location"></i>
					  <span>文章</span>
					</template>
					<el-menu-item-group>
					
					  <el-menu-item index="/article">干货</el-menu-item>
					  <el-menu-item index="/information">资料</el-menu-item>
					</el-menu-item-group>
					
				  </el-submenu>
				 <el-submenu index="2">
						<template slot="title">
						  <i class="el-icon-location"></i>
						  <span>课程</span>
						</template>
						<el-menu-item-group>
						
						  <el-menu-item index="/topCourse">线上课</el-menu-item>
						  <el-menu-item index="/bouttomCourse">线下课</el-menu-item>
						</el-menu-item-group>
									
				</el-submenu>
				  
				
				</el-menu>
				
			</el-aside>

			<el-container>
				<el-header style='background: #303133;overflow: hidden;color: aliceblue;display: flex;'>
					<div>后台管理系统</div>
					<div class="maleft" style="margin-top: 13px;"><img :src="$store.state.userinfo.imageUrl"  width="15px" height="15px" alt=""></div>
					<div class="maleft">当前用户：{{$store.state.userinfo.phone}}</div>
					
		            	<div style="flex: 1;"></div>
					  <div class="logout">
						<el-button @click='logout' type="primary">退出登录<i class="el-icon-upload el-icon--right"></i></el-button>
						
					  </div> 
	               
				</el-header>

				<el-main>
				
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>

</template>

<script>
	import {
		Loading
	} from 'element-ui';
	export default {
		components: {

		},
		name: 'Admin',
		data() {
			return {
			  openeds: ['1'],
              uniqueOpened: true, //只打开一个二级导航
			}
		},
		methods: {
			//退出登录
			logout() {
				if (window.confirm('退出将会需要再次登录')) {
					localStorage.clear(); //清楚本地存储
					//跳转到登录页面
					this.$router.push({
						path: '/login',
					})
				} else {
					//alert("取消");
					return false;
				}

			},
			handleSelect(key, keyPath) {
                console.log(key, keyPath);
             }

		},
		created: function() {
           console.log(this.$store.state.userinfo.token)
		}
	}
</script>
<style scoped>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.admin {
		width: 100%;
		height: 100%;
	}

	.el-container {
		width: 100%;
		height: 100%;
	}

	.logout {
		width: 9.375rem;
	}
	.maleft{
		margin-left: 15px;;
	}
	.maleft img{
		width: 1.875rem;
		height: 1.875rem;
		border-radius: 0.75rem;
	}
</style>
