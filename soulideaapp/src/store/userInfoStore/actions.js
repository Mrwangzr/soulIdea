import axios from "axios";
export default{
	//获取粉丝列表
	handleGetName({commit},data){
		axios({
			method:"get",
			url:"v4/api/list",
			
		}).then((data)=>{
			console.log(data.data)
			commit("handleGetName",data.data)
		})
	}
}