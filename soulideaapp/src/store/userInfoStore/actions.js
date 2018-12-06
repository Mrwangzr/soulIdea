import axios from "axios";
export default{
	//获取粉丝列表
	handleGetName({commit},data){
		axios({
			method:"get",
			url:"/Soulidea-1.0/user/loginfanslist",
			
		}).then((data)=>{
			// console.log(data.data.data)
			// commit("handleGetName",data.data.data.userlist)
			commit("handleGetName",data.data.data.userlist)
		})
	},
	//获取用户信息
	handleGetMessage({commit}){
		axios({
			method:"get",
			url:"/Soulidea-1.0/user/getloginuserdata",
			
		}).then((data)=>{
			console.log(data.data);
			var obj = {};
			obj.name=data.data.data.username;
			obj.sign=data.data.data.sign;
			obj.fork=data.data.data.fork;
			obj.fans=data.data.data.fans;
			obj.great=data.data.data.great;
			obj.head=data.data.data.head;
			obj.leave=data.data.data.leave;
			obj.gender=data.data.data.gender;
			obj.exp=data.data.data.exp;
			console.log(obj);
			commit("handleGetMessage",obj);
		})
	},
	//获取关注列表信息
	handleGetAttentions({commit},data){
		axios({
			method:"get",
			url:"/Soulidea-1.0/user/loginforkslist",
		}).then((data)=>{
			console.log(data.data.userlist)
			commit("handleGetAttentions",data.data.userlist)
		})
	},
// 	handleGetRank({commit}，data){
// 		axios({
// 			method:"get",
// 			url:"/Soulidea-1.0/user/getloginuserdata",
// 		}).then((data)=>{
// 			console.log(data)
// 			var obj = {};
// 			obj.level=data.data.data.level;
// 			obj.exp=data.data.data.exp;
// 			commit("handleGetRank",obj)
// 		})
// 	}
	
}