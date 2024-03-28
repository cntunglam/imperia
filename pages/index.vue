<script setup>
import { product } from "/assets/product.json";
useSeoMeta({
  title: "Imperia",
});
</script>
<template>
  <main class="pb-2">
    <Hero />
    <LatestNews />
    <section class="mx-auto py-4 flex flex-col">
      <div class="py-4">
        <h2 class="text-[28px] text-center uppercase">New Arrivals</h2>
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
