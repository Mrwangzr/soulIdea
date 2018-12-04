export default{
	//获取粉丝列表
	handleGetName(state,params){
 		// state.list = [...state.list,...params];
		state.list=params;
 		// console.log(state.list);
	},
	//获取用户当前信息
	handleGetMessage(state,params){
		state.message = params;
		// console.log(state.message);
	},
	//获取关注列表
	handleGetAttentions(state,params){
		state.attentionsList = params;
		// console.log(state.message);
	},
	//获取用户等级、经验
// 	handleGetRank(state,promes){
// 		state.
// 	}
	
} 