import Vue from "vue";
import  Vuex from "vuex";
import axios from "axios";
import signInStore from "./signInStroe";
import otherUserTwo from "./otherUserTwo";


Vue.use(Vuex);

const state = {

};

const mutations = {

};

const actions = {

};

const Store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        signInStore,
        otherUserTwo
    }
});

export default Store;

