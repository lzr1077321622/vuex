<template>
	<div>
		<p class="left red">老师</p>
		<el-row class='top'>
			<el-tag class='left top' v-for="(item,index) in teacherList" :key='index'>{{item.name}}</el-tag>
		</el-row>
		<p class="left top red">课程</p>
		<el-row class='top' style='line-height:1.75rem'>
			<el-col class='left top' v-for="(item,index) in courseList" :key='index'>
				<span class="red">{{index}}</span>&nbsp;{{item.title}}
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import __Config from '../../baseapi.js';
	export default {
		props: {
			id: null,
		},
		components: {

		},
		name: 'CourseDetail',
		data() {
			return {
				teacherList: [],
				courseList: []
			}
		},
		methods: {

		},
		//监听父组件传递过来的id的值的变化
		watch: {
			'id': function(newid) {
				let ter = '/teacher';
				let cor = '/course';
				var self = this;
				this.$async.map([__Config.api.listCourse + newid + ter, __Config.api.listCourse + newid + cor], function(item,
					callback) {
					self.$axios.get(item, {}).then(function(res) {
						callback(null, res.data)
					})
				}, function(err, res) {
					self.teacherList = res[0].data;
					self.courseList = res[1].data;
				});

			}
		},


		created: function() {

		}
	}
</script>
<style >
	.el-drawer {
		overflow-y: scroll !important;
	}
</style>
