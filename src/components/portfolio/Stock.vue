<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | {{ stock.quantity}} )</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            key="inputQuantity"
                            v-model.number="quantity"
                            :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    >{{ insufficientQuantity ? 'Not enough' : 'Sell'}}
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


<!-- I'll set up my props and props is at least stock because i'm getting the individual stock sent to this component. -->
<script>

import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    // want to bind the data i get back to my data object here
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
          placeSellOrder: 'sellStock'
      }),
        sellStock() {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          };
          this.placeSellOrder(order);
          this.quantity = 0;

      }
    }
  }
</script>
