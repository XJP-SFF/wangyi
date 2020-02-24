import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

//创建一个store对象并暴露
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});