import Vue from "vue";
import  Vuex from "vuex";
import newsModulesStore from "./newsModulesStore";
import axios from "axios";

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
      newsModulesStore
    }
});

export default Store;

