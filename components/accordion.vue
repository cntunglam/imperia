<script setup>
  defineProps({
    payment: String,
    product_sustainability: String,
    free_shipping_free_returns: String,
  })
</script>
<template>
  <div class="_accordion px-2">
    <details class="collapse collapse-arrow uppercase">
      <summary class="collapse-title text-[12px] font-medium"> <p>PRODUCT SUSTAINABILITY</p> </summary>
      <div class="collapse-content text-[12px]"> 
        <p>{{ product_sustainability }}</p>
      </div>
    </details>
    <details class="collapse collapse-arrow uppercase">
      <summary class="collapse-title text-[12px] font-medium">Free Shipping, Free Returns</summary>
      <div class="collapse-content text-[12px]"> 
        <p>{{ free_shipping_free_returns }}</p>
      </div>
    </details>
    <details class="collapse collapse-arrow uppercase">
      <summary class="collapse-title text-[12px] font-medium">PAYMENT</summary>
      <div class="collapse-content text-[12px]"> 
        <p>{{ payment }}</p>
      </div>
    </details>
  </div>
</template>
