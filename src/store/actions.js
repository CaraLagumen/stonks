import Vue from "vue";

export const loadStonks = ({ commit }) => {
  Vue.http
    .get("stonks.json")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const stonks = data.stonks;
        const stonkPortfolio = data.stonkPortfolio;
        const funds = data.funds;

        const portfolio = {
          stonks,
          stonkPortfolio,
          funds,
        };

        commit("SET_STONKS", stonks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
