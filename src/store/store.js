import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';


Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  // two modules created here for portfolio and one for Stocks
  // each of these modules will have its own state
    modules: {
        stocks,
        portfolio
    }
});
