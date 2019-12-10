<template>
	<div class="box">
		<el-row style='margin-bottom: 20px;'>
			<span>当前位置</span>
			<el-divider direction="vertical"></el-divider>
			<span>课程</span>
			<el-divider direction="vertical"></el-divider>
			<span>线上课</span>
		</el-row>

		<!--课程列表-->
		<el-row style='margin-top: 1.25rem;'>
			<el-table :data="CourseData" style="width: 100%" @row-click='clickta($event)'>
				<el-table-column prop="id" label="id" width="150"></el-table-column>
				<el-table-column prop="title" label="标题" width="400"></el-table-column>
				<el-table-column prop="price" label="价格" width="200"></el-table-column>
				<el-table-column prop="totalNum" label="总数" width="200"></el-table-column>
				<el-table-column prop="buyerNum" label="已购买" width="200"></el-table-column>

				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="opendetail" size="small" type="primary">详情<i class="el-icon-platform-eleme el-icon--right"></i></el-button>
						<el-button @click="edit" size="small" type="primary">编辑<i class="el-icon-edit el-icon--right"></i></el-button>

					</template>
				</el-table-column>
			</el-table>
		</el-row>

		<!--分页-->
		<el-row style='margin-top: 1.25rem;'>
			<el-col :span='10' :offset='7'>
				<el-pagination background @current-change="changePage" layout="prev, pager, next" :page-count="countPage">
				</el-pagination>
			</el-col>
		</el-row>
		
        <!--侧边-->
		<el-row>
			<el-drawer
			  :title="title"
			  :visible.sync="drawer"
			  :with-header="false">
			   <!--详情页子组件-->
			    <Detaultop v-bind:id="id"></Detaultop>
			</el-drawer>
		</el-row>
		
	</div>
</template>

<script>
	import Detaultop from './CourseDetail.vue';
	import __Config from '../../baseapi.js';
   
	import {
		Loading
	} from 'element-ui';
	export default {
		components: {
           Detaultop
		},
		name: 'TopCourse',
		data() {
			return {
				drawer: false, //侧边框
				title:'',
				id: '', //点击查看的id
				countPage: 1, //总页数
				inputval: '', //搜索内容
				pageNo: 1, //当前野蛮
				pageSize: 10, //请求页数
				CourseData: [] //课程列表
			}
		},
		methods: {

			getCourse(page, pagesize) {

				let loadingInstance = Loading.service({
					text: '加载中',
					background: 'rgba(0,0,0,0.1)'
				});
				let uriArr = [
					'sort=desc_startData',
					'pageNo=' + page,
					'pageSize=' + pagesize
				];
				var uri = uriArr.join('&');
				var self = this;
				this.$axios.get(__Config.api.topcourse + uri, {}).then(function(res) {
					loadingInstance.close();
					self.CourseData = res.data.data;
					//获取后台返回的总条数
					self.countPage = res.data.page.countPage;
				}).catch(function(error) {

				});
			},
			//分页
			changePage: function(e) {
				this.pageNo = e;
				this.getCourse(this.pageNo, this.pageSize);
			},
			//鼠标移入获取ID 
			clickta(e) {
				this.id = e.id;
				this.title = e.title;
			},
			//详情页
			opendetail() {
				this.drawer = true
			},
			edit() {
				this.$message({
					message: '线上真是数据，仅做案例参考，不能修改',
					type: 'error',
					center: true
				});
			}
			//http://91yunshi.com/xianshang_detail.html?id=3963	
		},
		created: function() {
			this.getCourse(this.pageNo, this.pageSize);
		}
	}
</script>
<style scoped>
	.image {
		width: 100%;
		height: 11.875rem;
	}
.el-drawer{
	overflow-y: scroll !important;
}
</style>
