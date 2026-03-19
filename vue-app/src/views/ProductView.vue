<template>
  <div className="p-6 max-w-xl mx-auto my-10 border-blue-900 border rounded ">
    <div class="lg:w-1/2 mb-5 lg:mb-0 p-6">
      <img
        class="w-full mb-5 lg:mb-0"
        :src="product.image"
        :alt="product.name"
      />
    </div>
    <h1 className="text-2xl font-bold text-blue-900 mb-4">
      {{ product.name }}
    </h1>

    <p className="mb-2 text-blue-900">{{ product.description }}</p>
    <p className="font-semibold text-red-600">
      Prix : {{ product.price.toFixed(2) }} $
    </p>
    <p className="text-blue-900">Catégorie : {{ product.category }}</p>

    <router-link
      to="/forfaits"
      className="inline-block my-4 text-blue-600 cursor-pointer hover:underline"
    >
      ← Retour aux forfaits
    </router-link>

    <div class="flex gap-4">
      <router-link
        :to="{ name: 'edit-product', params: { id: product.id } }"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modifier</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["inventory", "add"],
  computed: {
    product() {
      const product = this.inventory.find((p) => {
        return p.id === Number(this.$route.params.id);
      });
      return product;
    },
    productIndex() {
      const index = this.inventory.findIndex((p) => {
        return p.id === Number(this.$route.params.id);
      });
      return index;
    },
  },
};
</script>
