import Vue from 'vue';
import Vuex from 'vuex';

import * as h_volume from "./modules/24h_volume";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        h_volume,
    }
})
