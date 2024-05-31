<template>
  <main class="_body_fullwidth">
    <div
      class="grid md:grid-cols-2 grid-cols-1"
    >
      <ProductSwiper />
      <ProductInfo :isOutOfStock="false" />
    </div>
    <StyleWith />
  </main>
</template>
