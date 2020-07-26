import stonks from "../../data/stonks";

const state = {
  stonks: [],
};

const mutations = {
  SET_STONKS(state, stonks) {
    state.stonks = stonks;
  },
  RND_STONKS(state) {
    state.stonks.forEach((stonk) => {
      stonk.price = Math.round(stonk.price * (1 + Math.random() - 0.5));
    });
  },
};

const actions = {
  buyStonk: ({ commit }, order) => {
    commit("BUY_STONK", order);
  },
  initStonks: ({ commit }) => {
    commit("SET_STONKS", stonks);
  },
  randomizeStonks: ({ commit }) => {
    commit("RND_STONKS");
  },
};

const getters = {
  stonks: (state) => {
    return state.stonks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
