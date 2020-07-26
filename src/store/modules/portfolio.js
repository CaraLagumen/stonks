const state = {
  funds: 10000,
  stonks: [],
};

const mutations = {
  BUY_STONK(state, { stonkId, stonkPrice, quantity }) {
    const record = state.stonks.find((el) => el.id === stonkId);

    if (record) {
      record.quantity += quantity;
    } else {
      state.stonks.push({
        id: stonkId,
        quantity,
      });
    }

    state.funds -= stonkPrice * quantity;
  },
  SELL_STONK(state, { stonkId, stonkPrice, quantity }) {
    const record = state.stonks.find((el) => el.id === stonkId);

    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stonks.splice(state.stonks.indexOf(record), 1);
    }

    state.funds += stonkPrice * quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stonks = portfolio.stonkPortfolio ? portfolio.stonkPortfolio : [];
  },
};

const actions = {
  sellStonk: ({ commit }, order) => {
    commit("SELL_STONK", order);
  },
};

const getters = {
  stonkPortfolio: (state, getters) => {
    return state.stonks.map((stonk) => {
      const record = getters.stonks.find((el) => el.id === stonk.id);

      return {
        id: stonk.id,
        quantity: stonk.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
