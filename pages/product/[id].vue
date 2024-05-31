<template>
  <main class="_body_fullwidth">
    <div class="grid md:grid-cols-2 grid-cols-1">
      <ProductSwiper :images="images"/>
      <ProductInfo
        :isOutOfStock="!product.availableForSale"
        :productName="product.title"
        :description="product.descriptionHtml"
        :price="product.variants?.nodes[0]?.price.amount"
        :availableSize="product.variants?.nodes"
      />
    </div>  
    <StyleWith />
  </main>
</template>
<script setup>
import { GET_PRODUCT_BY_HANDLE } from "~/queries/getProduct";

const { id } = useRoute().params;
const { $shopifyClient } = useNuxtApp();
const loading = ref(true);
const product = ref([]);
const images = ref([]); 
onMounted(async () => {
  try {
    const { data } = await $shopifyClient.request(GET_PRODUCT_BY_HANDLE, {
      variables: {
        handle: id,
      },
    });
    product.value = data.productByHandle;
    images.value = product.value.images?.edges.map((edge) => edge.node)
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
