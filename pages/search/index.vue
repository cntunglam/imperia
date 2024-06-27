<script setup>
defineProps({
  searchValue: String,
});


const { id } = useRoute().params;
const { $shopifyClient } = useNuxtApp();
const loading = ref(true);
const products = ref([]);
onMounted(async () => {
  try {
    const { data } = await $shopifyClient.request(SEARCH_QUERY, {
      variables: {
        handle: id,
      },
    });
    products.value = data.collectionByHandle.products.edges.map(
      (edge) => edge.node
    );
  } catch (error) {
    navigateTo("/collection");
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <div class="grid px-4 md:px-8">
    <div class="" v-if="products.length > 0 && !loading">
      <div class="grid md:grid-cols-4 grid-cols-2 px-2 md:py-10 gap-2 md:gap-8">
        <div v-for="item in products" :key="item.id">
          <ProductCard
            :link="`/product/${item.handle}`"
            :inStock="item.availableForSale"
            :productName="item.title"
            :productColor="item.variants.nodes[0]?.selectedOptions[0]?.value"
            :Image="item.images.edges[0]?.node.src"
            :price="item.variants.nodes[0]?.price.amount"
          />
        </div>
      </div>
    </div>
    <div v-else class="h-96 flex">
      <p class="text-center m-auto">No Products In This Collection</p>
    </div>
  </div>
</template>
