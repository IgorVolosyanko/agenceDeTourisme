<template>
  <main class="min-h-screen">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-xl text-blue-900 font-bold">Forfaits</h1>
        <router-link
          :to="{ name: 'add-product' }"
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >Ajouter le forfait</router-link
        >
      </div>

      <div
        class="grid sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-4 border-gray-100 my-4"
      >
        <div
          v-for="(product, i) in inventory"
          :key="i"
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-300 dark:border-blue-400"
        >
          <img
            class="p-8 rounded-t-lg"
            :src="product.image"
            :alt="product.name"
          />
          <div class="px-5 pb-5 text-center">
            <div class="mb-2 text-blue-900">
              <router-link
                :to="{ name: 'product', params: { id: product.id } }"
                class="hover:text-blue-600 cursor-pointer hover:underline"
              >
                Voir plus..</router-link
              >
            </div>
            <h5
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2"
            >
              {{ product.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: ["inventory"],
};
</script>
