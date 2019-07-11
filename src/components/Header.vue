<template id="">
  <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
              <!-- this was all taken from bootstrap but we change the anchor tags to router-links -->
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <!-- i want to set up my own links with router router-links -->
                  <!-- we also want to have anchor tags between the router links -->
                  <!-- we can add the active class attribute and set it as active because thats what bootstrap expects on the li item to mark this route as active  -->
                  <!-- So we give this an li tag also so that it is not rendered as an anchor tag but as a list item -->
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds = {{ funds | currency }}</strong>
                <!-- <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong> -->
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <!-- we want to dynamically add the class of open (bootstrap class which opens dropdown) -->

                    <li
                          class="dropdown"
                          :class="{open: isDropDownOpen}"
                          @click="isDropDownOpen = !isDropDownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Save Data</a></li>
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>


<script>

import {mapActions} from 'vuex';

export default {
  data() {
    return {
      isDropDownOpen: false
    }
  }
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions ({
      randomiseStocks: 'randomiseStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      // this will execute the actions in the stocks.js file
      this.randomiseStocks();
    }
  }
};

</script>
