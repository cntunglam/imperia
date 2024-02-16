<script setup>
import { product } from "/assets/product.json";
</script>
<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 md:h-[800px] container mb-10 md:mb-20"
  >
    <ProductSwiper />
    <ProductInfo />
  </div>
  <StyleWith />
</template>
