<script setup>
import { product } from "/assets/product.json";
</script>
<template>
<section class="mx-auto pt-14 px-4 ">
    <h2 class="text-[20px] text-center uppercase">Style With</h2>
    <div class="grid md:grid-cols-4 grid-cols-2 px-2 py-10 gap-2 md:gap-8">
      <div v-for="item in product" :key="item">
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
</template>