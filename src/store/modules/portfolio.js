const state = {
  // what is the state of our portfolio?
  funds: 10000,
  // refers to the stocks in our porfolio - not to all the stocks that are available.
  stocks: []
};

// mutations are what allow us to change our state
// one actions - i want to be able to buy a stock
const mutations = {
  // all mutations get the 'state' passed in
  // then i know i'll get an object as the second argument and i'll use destructuring to pull out the id, quantity and stockPrice
  //
  'BUY_STOCK'(state, { stockId, quantity, stockPrice}) {
    // I want to check if i do have this stocks in my stocks array
    // I'll check if i do have a record by accessing my state and then my stockst
    // and then executing find which takes a function as an argument where the element will be passed in automatically - will automatically loop through all my elements
    const record = state.stocks.find(element => element.id == stockId);
    // if record is set and i already do have that stock in my array
    if (record) {
      // i will take the record which was the stock found in my array and update the quantity to be the old quantity plus the new quantity
      record.quantity += quantity
    } else {
      // i want to take my stocks and push a new object on it - this object will have an id and quantity - so thats the data I want to store in this stocks array in my porfolio
        state.stocks.push({
          id: stockId,
          quantity: quantity
        });
    }
    state.funds -= stockPrice * quantity;
  },
  // i will get an order which will have same fields for buying a stock
  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    // i will first find the stock id in my array
    const record = state.stocks.find(element => element.id == stockId);
    // I will check if my record quantity is great than the quantity of what i want to sell
    if(record.quantity > quantity) {
      record.quantity -= quantity;
      // if i try to sell more than i have, i want to remove it from the array
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    // update my funds
    state.funds += stockPrice * quantity;
  }
};
// my sell stock action which gets me my commit method and has an order
const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order);
  }
};


const getters = {
  stockPortfolio (state, getters) {
    // i then want to return state stocks and i need to access the stocsk on the stocks model to find out the id of the stocks i have in my stock Portfolio
    // Map allows me to transform each element in my array so this will input the current element i am looping through implicity into this callback function
    return state.stocks.map(stock => {
      // i want to fetch the records - i will use my getters that refers to my store getters so my overall stockPrice
      // there i can use the stocks getter which i set up in the stocks module
      // Find - allows me to find an element where i check whether the element id matches my stock id.
      // stock refers to the stock recurrently in this map method whereas the element id refers to the element of this stocks array in my stocks module - so all the stocks, not just the one in my portfolio
      const record = getters.stock.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  }
  funds (state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
