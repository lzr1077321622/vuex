<template>
	<div class="login">
		<el-row class='rowbox'>
			<el-col :offset='9' :span="6">
				<el-input v-model="username" placeholder="请输入手机号码"></el-input>
			</el-col>
		</el-row>

		<el-row class='rowbox'>
			<el-col :offset='9' :span="5">
				<el-input v-model="code" placeholder="请输入验证码"></el-input>
			</el-col>
			<el-col  :span="4">
				<el-button @click='getCode'>发送验证码</el-button>
			</el-col>
		</el-row>
		<el-row class='rowbox'>
			<el-col :offset='10' :span="4">
				<el-button @click='getadmin' type="primary" style='width: 100%;'>登录</el-button>
			</el-col>
		</el-row>
		<el-row>
			<el-col :offset='10' :span="4" class='red'>
			如果你没有账号，点击下面按钮实现无账号登录
			<el-button @click='nopasslogin' type="primary" style='width: 100%;'>无账号登录</el-button>
			</el-col>
		</el-row>
	</div>
</template>
<script>

import __Config from '../baseapi.js';
	export default {
		
		components: {
			
		},
		name: 'Index',
		data() {
			return {
				username: '',
				code:''
			}
		},
		methods: {
			
			getCode(){
				
				this.$axios.post(__Config.api.code+this.username,{
				 }).then(function (res) {
					  alert('验证码获取成功')
				 }).catch(function (error) {
					 
				 });
										
			},
			getadmin() {
		
				 var self = this;
				 this.$axios.post(__Config.api.login+this.username+"&code=" + this.code,{
				 }).then(function (res) {
					 //当你看到这里你可以直接在浏览器的缓存中自己加入userinfo 为下面即可登录
			     	//{"imageUrl":"http://store.91yunshi.com/storage/guagua/200*190*b76edea54301999679750b91e8480ae3.jpg","nickName":"小二郎","phone":"15331742840","token":"eyJhbGciOiJIUzI1NiJ9.eyJjdGUiOiIyMDE5LTEyLTA5VDAxOjA5OjM0LjY3NVoiLCJwZXIiOjQsInBybyI6MCwicmFuIjoiZjA3OTg5MWRmNDZlNGFjYjk4YTA2MmFhZjgwMzFiZjkiLCJyaWQiOjM1NzE0fQ.vDViE3h3lcGKxV2OFqPZ_BCq_qxitUi9Gih86b5iXyY"}
					 //触发store SaveNane
					   self.$store.commit('SaveNane',res.data.data);
					   //跳转到后台首页
					   self.$router.push({
						path: '/admin',
					 })
				    }).catch(function (error) {
					 
				 }); 		
			
				
			},	
			//模仿后台返回的用户信息，实现登录，真真实接口返回数据一个道理
		 	nopasslogin(){
				var userdata ={"imageUrl":"http://store.91yunshi.com/storage/guagua/200*190*b76edea54301999679750b91e8480ae3.jpg","nickName":"小二郎","phone":"15331742840","token":"eyJhbGciOiJIUzI1NiJ9.eyJjdGUiOiIyMDE5LTEyLTA5VDAxOjA5OjM0LjY3NVoiLCJwZXIiOjQsInBybyI6MCwicmFuIjoiZjA3OTg5MWRmNDZlNGFjYjk4YTA2MmFhZjgwMzFiZjkiLCJyaWQiOjM1NzE0fQ.vDViE3h3lcGKxV2OFqPZ_BCq_qxitUi9Gih86b5iXyY"};
								
				  this.$store.commit('SaveNane',userdata);
				  //跳转到后台首页
				  this.$router.push({
					path: '/admin',
				})
			},
		},
		created: function() {
           
		}
	}
</script>
<style scoped>
	.rowbox {
		margin-top: 1.25rem;
	}

	.login {
		margin: 150px auto;
	}
</style>
