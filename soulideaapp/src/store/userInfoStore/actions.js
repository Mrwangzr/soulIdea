import axios from "axios";
export default{
	//获取粉丝列表
	handleGetName({commit},data){
		axios({
			method:"get",
			url:"Soulidea1.0/user/loginfanslist",
			
		}).then((data)=>{
			console.log(data.data)
			commit("handleGetName",data.data)
		})
	},
	//获取用户信息
	handleGetMessage({commit}){
		axios({
			method:"get",
			url:"v4/api/message",
			
		}).then((data)=>{
			var obj = {};
			obj.name=data.data[0].name;
			obj.sign=data.data[0].sign;
			obj.v=data.data[0].v;
			obj.fans=data.data[0].fans;
			obj.zan=data.data[0].zan;
			obj.att=data.data[0].att;
			 // console.log(obj);
			commit("handleGetMessage",obj);
		})
	},
	//获取关注列表信息
	handleGetAttentions({commit},data){
		axios({
			method:"get",
			url:"v4/api/list",
		}).then((data)=>{
			commit("handleGetAttentions",data.data)
		})
	},
}