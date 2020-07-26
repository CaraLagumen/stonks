<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stonks</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"
            ><a>Portfolio</a></router-link
          >
          <router-link to="/stonks" activeClass="active" tag="li"
            ><a>Stonks</a></router-link
          >
        </ul>

        <strong class="navbar-text navbar-right"
          >Funds: {{ funds | currency }}</strong
        >

        <ul class="nav navbar-nav navbar-right">
          <li><a @click="onEndDay" href="#">End Day</a></li>

          <li
            @click="isDropdownOpen = !isDropdownOpen"
            :class="{ open: isDropdownOpen }"
            class="dropdown"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & load stonks <span class="caret"></span
            ></a>

            <ul class="dropdown-menu">
              <li><a @click="onSaveStonks" href="#">Save stonks</a></li>
              <li><a @click="onLoadStonks" href="#">Load stonks</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStonks", "loadStonks"]),
    onEndDay() {
      this.randomizeStonks();
    },
    onSaveStonks() {
      const data = {
        funds: this.$store.getters.funds,
        stonkPortfolio: this.$store.getters.stonkPortfolio,
        stonks: this.$store.getters.stonks,
      };

      this.$http.put("stonks.json", data);
    },
    onLoadStonks() {
      this.loadStonks();
    },
  },
};
</script>