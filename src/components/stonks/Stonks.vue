<template>
  <div>
    <h1>All stonks</h1>
    <app-stonk
      v-for="stonk in stonks"
      :key="stonk.id"
      :stonk="stonk"
    ></app-stonk>
  </div>
</template>

<script>
import Stonk from "./Stonk.vue";

export default {
  components: {
    appStonk: Stonk,
  },
  computed: {
    stonks() {
      return this.$store.getters.stonks;
    },
  },
};
</script>