export default{
	//获取粉丝列表
	handleGetName(state,params){
 		// state.list = [...state.list,...params];
		state.list=params;
 		// console.log(state.list);
	},
	handleGetMessage(state,params){
		state.message = params;
		// console.log(state.message);
	},
	handleGetAttentions(state,params){
		state.attentionsList = params;
		// console.log(state.message);
	},
	
} 