import Vue from "vue";
import  Vuex from "vuex";
import axios from "axios";
import commentStore from "./commentStore"
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
        commentStore
    }
});

export default Store;

