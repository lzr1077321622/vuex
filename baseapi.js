const address = "http://web.source.91yunshi.com/";


const config = {
	address: address,
	api: {
		code: address + "", //code 真实二维码接口，暂不显示
	    login: address + "user/login/sms?phone=",//用户登录
	    article: address + "content?type=3&",//干货
		articleDetail: address + "content/",//干货详情
		Information: address + "material?",//资料下载
		topcourse:address + "class?type=1&",//线上课
		bootcourse:address + "class?type=0&",//线下课
	   	listCourse:address + "class/",//老师列表课程列表
	   
	}
	
};


export default config;
