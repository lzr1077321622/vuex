<template>
	<div class="transition">
			<el-row style='margin-bottom: 20px;'>
			
				<span>当前位置</span>
				<el-divider direction="vertical"></el-divider>
				<span>文章</span>
				<el-divider direction="vertical"></el-divider>
				<span>资料</span>
			 
		   </el-row>
		<el-row>
			<el-col :span="5">
				<el-input @focus='onfocus' v-model="inputval" placeholder="请输入内容"></el-input>
			</el-col>
			<el-col :span="5" :offset='1'>
				<el-button type="primary" @click='getval' icon="el-icon-search">搜索</el-button>
			</el-col>
		</el-row>
		<el-row style='margin-top: 1.25rem;'>
			<el-table :data="tableData" style="width: 100%" @cell-mouse-enter='clickta($event)'>
				<el-table-column  prop="typeName"  label="类型" width="150"></el-table-column>
				<el-table-column  prop="title" label="标题" width="300"></el-table-column>
	            <el-table-column  prop="downloadUrl" label="下载地址" width="750"></el-table-column>



				<el-table-column label="操作" width="100">
					<template slot-scope="scope">
					
						<el-button @click="opendetail" size="small" type="primary" icon="el-icon-download"></el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-row>
		
		<!--分页-->
		<el-row style='margin-top: 1.25rem;'>
		    <el-col :span='10' :offset='7'>
					<el-pagination
					background
					@current-change="changePage"
					layout="prev, pager, next"
					:page-count="countPage"
				
			    	>
				</el-pagination>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
	import __Config from '../../baseapi.js';
	import {
		Loading
	} from 'element-ui';
	export default {
		components: {

		},
		name: 'information',
		data() {
			return {
				id:'',//点击查看的id
				countPage:1,//总页数
				inputval:'',//搜索内容
				pageNo:1,//当前野蛮
				pageSize:10,//请求页数
				tableData: [],//列表数据
				counttxt:'',//文章详情内容
				
			}
		},
		methods: {

            getArticle(page,pagesize,val){
					let loadingInstance = Loading.service({
						text: '加载中',
						background:'rgba(0,0,0,0.1)'
						});
					let uriArr = [
						'sort=desc_ctime',
						'pageNo=' + page,
						'pageSize='+ pagesize,
						'query='+val
					 ];
					 var uri = uriArr.join('&');
					 var self = this;
					
				 	     this.$axios.get(__Config.api.Information+uri,{
				    	}).then(function (res) {
							loadingInstance.close();
							 self.tableData=res.data.data;
							 //获取后台返回的总条数
							 self.countPage = res.data.page.countPage;
					   }).catch(function (error) {
										 
					}); 
			},
			//分页
			changePage:function(e){
				 this.pageNo =e;
				 this.getArticle(this.pageNo,this.pageSize,this.inputval);
		    },
			//获取焦点
			onfocus(){
				this.pageNo=1;
				this.pageSize10;
			},
			//搜索
			getval(){
				 this.getArticle(this.pageNo,this.pageSize,this.inputval);
			},
			//打开遮罩
			opendetail(){
	            this.$message({
					  message: '请复制链接进行下载',
					  type:'error',
					  center: true
					});
			},
			//鼠标移入获取ID 
			clickta(e){
				this.id=e.id;
			}
		},
		created: function() {
            this.getArticle(this.pageNo,this.pageSize,this.inputval);
			      let slef = this;
				  document.onkeydown = function (e) {
					let key = window.event.keyCode;
					if (key === 13){
					    slef.getArticle(slef.pageNo,slef.pageSize,slef.inputval);
					}
				  }

		}
	}
</script>
<style scoped>

</style>
