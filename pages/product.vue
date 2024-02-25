<script setup>
import { product } from "/assets/product.json";
</script>
<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 md:h-[800px] mb-10 md:mb-20"
  >
    <ProductSwiper />
    <ProductInfo :isOutOfStock="false" />
  </div>
  <StyleWith />
</template>
