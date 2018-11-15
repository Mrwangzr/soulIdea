export default{
	//获取粉丝列表
	handleGetName(state,params){
		state.list = params;
		console.log(state.list);
	}
} 