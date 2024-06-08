<script setup>
  defineProps({
    isOutOfStock: Boolean,
    productName: String,
    price: String,
    description: String,
    availableSize: Object,
    short_description: String,
    variants: Array
});
const size = ref("");
</script>

<template>
  <div class="px-2 grid place-content-start md:w-3/4 m-auto">
    <div class="text-center space-y-6 pt-6 pb-4">
      <div class="">
        <h1 class="text-[12px] uppercase">{{ productName }}</h1>
        <p class="text-[12px]">${{ price }}</p>
      </div>
      <p class="uppercase text-sm">{{ short_description }}</p>
    </div>
    <div v-if="!isOutOfStock" class="form-control py-0 m-0 w-full px-2 text-xl">
      <label class="label">
        <span class="label-text uppercase">Size: (US)</span>
        <span class="label-text uppercase underline">Size Guide</span>
      </label>
      <select
        class="select select-bordered text-[12px] md:text-[10px] uppercase border-black rounded-none"
        v-model="size"
      >
              <option disabled selected value="">Select A Size</option> 

        <option v-for="variant in variants" :key="variant" :value="variant.selectedOptions[1].value">
          {{ variant.selectedOptions[1].value }}
        </option>
      </select>
      <div
        class="btn btn-primary w-full top-90 bg-black font-normal text-white mb-0 p-4 uppercase rounded-none"
        :class="{ 'btn-disabled': !size }"
      >
        <p class="text-center">Add To Bag</p>
      </div>
    </div>
    <OrderModal v-else />
    <div>
      <div v-html="description" class="productInfo"></div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.productInfo ul {
  list-style: disc !important; 
  text-transform: uppercase;
}

.productInfo p {
  @apply uppercase text-sm
}

.productInfo {
  @apply px-2 text-left space-y-6 pt-6 pb-10 text-[14px]
}
</style>