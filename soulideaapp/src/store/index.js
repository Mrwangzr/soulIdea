import Vue from "vue";
import  Vuex from "vuex";
import axios from "axios";
import storeLi from "./store-Libo";
Vue.use(Vuex);

const state = {

};

const mutations = {

};

const actions = {

};
const getters = {
	
};
const Store = new Vuex.Store({
    state,
    mutations,
    actions,
	getters,
	modules:{
		storeLi
	}
});

export default Store;

