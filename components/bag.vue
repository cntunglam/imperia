<script setup>
import { GET_CART } from '~/queries/getCart';
    const { $shopifyClient } = useNuxtApp();
    const cartId = ref("")
    const totalItem = ref()
    onMounted(async() => {
        try {
            cartId.value = sessionStorage.getItem('cartId')
            const { data } = await $shopifyClient.request(GET_CART, {
                variables: {
                    id: cartId.value 
                }
            })
            totalItem.value = data.cart.lines.edges.length
            console.log(totalItem.value)
        } catch (error) {
            console.error(error)
        }
    })
    
</script>
<template>
  <a v-if="totalItem > 0" href="/bag" class="my-auto">
    <div class="relative">
        <img src="/icon/bag.svg" alt="bag" class="w-6 h-6 my-auto top-0" />
    </div>
  </a>
  <a v-else href="/bag" class="my-auto">
    <div class="rounded-none bg-[#21e053] text-black w-8 h-8 flex">
        <span class="m-auto text-[12px]">{{ totalItem + 10 }} </span>
    </div>
    </a>
</template>