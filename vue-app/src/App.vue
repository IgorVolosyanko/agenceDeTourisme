<template>
  <div>
    <Navbar />
    <router-view
      :inventory="inventory"
      :addInv="addInventory"
      :updateInv="updateInventory"
      :removeInv="removeInventory"
    />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import ProductDataService from "./services/ProductDataService";
export default {
  mounted() {
    ProductDataService.getAll()
      .then((res) => {
        this.inventory = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      inventory: [],
    };
  },
  methods: {
    addInventory(product) {
      this.inventory.push(product);
    },
    updateInventory(index, data) {
      this.inventory[index] = data;
    },
    removeInventory(index) {
      this.inventory.splice(index, 1);
    },
  },
};
</script>
