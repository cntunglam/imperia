<script setup>
import { GET_PRODUCTS } from "~/queries/getProduct";
import { product } from "/assets/product.json";
useSeoMeta({
  title: "Imperia",
});
const { $shopifyClient } = useNuxtApp();
const { data } = await useAsyncData('products', () =>
  $shopifyClient.request(GET_PRODUCTS)
);
const products = data.value?.data.products.edges.map(edge => edge.node) || [];
console.log(products)
</script>
<template>
  <main class="pb-1">
    <Hero />
    <LatestNews />
    <section class="mx-auto py-4 flex flex-col">
      <div class="py-4">
        <h2 class="text-[20px] text-center uppercase">New Arrivals</h2>
        <tab />
      </div>
      <div
        class="grid md:grid-cols-4 grid-cols-2 px-2 pt-3 py-4 gap-2 font-thin md:gap-8"
      >
        <div v-for="item in product">
          <ProductCard
            :link="item.permalink"
            :inStock="item.inStock"
            :productName="item.name"
            :Image="item.featureImg"
            :price="item.price"
          />
        </div>
      </div>
    </section>
    <Collection />
  </main>
</template>
