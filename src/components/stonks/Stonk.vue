<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stonk.name.toUpperCase() }}</h3>
        <small>Price: {{ stonk.price }}</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model="quantity"
            :class="{ danger: insufficientFunds }"
            type="number"
            class="form-control"
            placeholder="Quantity"
          />
        </div>

        <div class="pull-right">
          <button
            @click="onBuyStonk"
            :disabled="quantity < 1 || isNan || insufficientFunds"
            class="btn btn-success"
          >
            {{ insufficientFunds ? "Funds low" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
export default {
  props: ["stonk"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stonk.price > this.funds;
    },
  },
  methods: {
    onBuyStonk() {
      const order = {
        stonkId: this.stonk.id,
        stonkPrice: this.stonk.price,
        quantity: this.quantity,
      };

      this.$store.dispatch("buyStonk", order);
      this.quantity = 0;
    },
  },
};
</script>