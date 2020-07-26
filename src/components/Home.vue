<template>
  <div>
    <h1>Welcome</h1>
    <h4>Buy or sell stonks</h4>
    <hr />
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>