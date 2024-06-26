<script setup>
import { CREAT_CART } from "~/queries/mutateCart";
const { $shopifyClient } = useNuxtApp();
const loading = ref(true);
const cartId = ref("");
const isCartExist = ref(false);
onMounted(async () => {
  try {
    if (sessionStorage.getItem("cartId")) {
      cartId.value = sessionStorage.getItem("cartId");
      isCartExist.value = true;
    } else {
      const { data } = await $shopifyClient.request(CREAT_CART);
      cartId.value = data.cartCreate.cart.id;
      sessionStorage.setItem("cartId", cartId.value);
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});

</script>
<template>
  <DrawerNav />
  <NuxtPage />
  <Footer />
</template>
