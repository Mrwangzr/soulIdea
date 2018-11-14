export default {
  //关注列表
  handleFansChangeList_getList(state,params){
    //利用扩展运算符拼接数组
      state.fansChange_list = [...state.fansChange_list,...params];
  },
  handleFansChangeMax_setMax(state,params){
    state.fansChange_max = params;
  },
  //@列表
  handleAiteChangeList_getList(state,params){
    state.aiteChange_list = [...state.aiteChange_list,...params];
  },
  handleAiteChangeMax_setMax(state,params){
    state.aiteChange_max = params;
  },
}

