<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1"
  >
    <ProductSwiper />
    <ProductInfo :isOutOfStock="false" />
  </div>
  <StyleWith />
</template>
