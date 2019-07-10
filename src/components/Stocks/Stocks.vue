<template>
    <div>
      <!-- i want to send the stock in this loop here to the stock component and bind it with : -->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>

import Stock from './Stock.vue';

  export default {

    components: {
        appStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }

</script>
