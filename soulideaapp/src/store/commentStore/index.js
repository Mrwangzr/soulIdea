// import Vue from "vue";
// import  Vuex from "vuex";
import axios from "axios";

// Vue.use(Vuex);


import state from "./state.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";
export default {
    namespaced:true,
            state,
            mutations,
            getters,
            actions
  
}

