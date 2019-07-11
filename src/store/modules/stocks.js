import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
  // how do our stocks ever change?
  // well they need to be set because we loaded them from our server or app.
  // AND they need to be randomised

  // we need to make sure we pass stocks as a payload
  'SET_STOCKS' (state, stocks) {
      state.stocks = stocks;
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};


// not sure I understand any of this
const actions = {
  buyStock: ({commit}, order) => {
      commit('BUY_STOCK', order);
  },
  // we only call it when we initialise our stocks

  // pulling in the stocks that I am importing from our new data stocks.js
  initStocks: ({commit}) => {
      commit('SET_STOCKS', stocks);
  },
  // need an action to randomise our stocks and here i will only need my commit function
  // with that function I want to commit random stocks with no data as it doesn't need any
  randomiseStocks: ({commit}) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    // referring to the stocks array set up in states above
    return state.stocks
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
