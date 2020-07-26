<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stonk.name.toUpperCase() }}</h3>
        <small>Price: {{ stonk.price }} | Quantity: {{ stonk.quantity }}</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model="quantity"
            :class="{ danger: insufficientQuantity }"
            type="number"
            class="form-control"
            placeholder="Quantity"
          />
        </div>

        <div class="pull-right">
          <button
            @click="onSellStonk"
            :disabled="quantity < 1 || isNan || insufficientQuantity"
            class="btn btn-info"
          >
            {{ insufficientQuantity ? "Quantity low" : "Sell" }}
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
import { mapActions } from "vuex";

export default {
  props: ["stonk"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stonk.quantity;
    },
  },
  methods: {
    ...mapActions(["sellStonk"]),
    onSellStonk() {
      const order = {
        stonkId: this.stonk.id,
        stonkPrice: this.stonk.price,
        quantity: this.quantity,
      };

      this.sellStonk(order);
      this.quantity = 0;
    },
  },
};
</script>