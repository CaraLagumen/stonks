<template>
  <div>
    <app-stonk
      v-for="stonk in stonks"
      :key="stonk.id"
      :stonk="stonk"
    ></app-stonk>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stonk from "./Stonk.vue";

export default {
  computed: {
    ...mapGetters({
      stonks: "stonkPortfolio",
    }),
  },
  components: {
    appStonk: Stonk,
  },
};
</script>