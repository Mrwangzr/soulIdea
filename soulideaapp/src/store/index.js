import Vue from "vue";
import  Vuex from "vuex";
import newsModulesStore from "./newsModulesStore";
import axios from "axios";
import storeLi from "./store-Libo";
// import BScroll from 'better-scroll';
import userInfoStore from "./userInfoStore";
import signInStore from "./signInStroe";
import otherUserTwo from "./otherUserTwo";


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
		storeLi,
        userInfoStore,
        newsModulesStore,
    signInStore,
    otherUserTwo
	}
});

export default Store;

