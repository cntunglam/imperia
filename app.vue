<script setup>
import { CREAT_CART } from "~/queries/mutateCart";
import { GET_CUSTOMER } from "./queries/getCustomer";
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
    if (sessionStorage.getItem("accessToken")) {
      const { data } = await $shopifyClient.request(GET_CUSTOMER, {
        variables: {
          customerAccessToken: sessionStorage.getItem("accessToken"),
        },
      });
      localStorage.setItem("firstName", data.customer.firstName);
      localStorage.setItem("email", data.customer.email);

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
