<script setup>
defineProps({
  productName: String,
  price: String,
  Image: String,
  inStock: Boolean,
  link: String,
});
</script>
<template>
  <a :href="link">
    <div class="card-normal rounded-none">
      <div class="relative">
        <figure class="">
          <img
            :src="Image"
            alt="t-shirt"
            class="hover:scale-105 ease-in-out duration-500 mx-auto w-auto h-60 xl:h-96"
          />
        </figure>
        <button
          v-if="!inStock"
          class="py-2 border-0 absolute w-full bottom-5 md:top-50 lg:top-80 bg-black text-white text-sm uppercase"
        >
          <p class="text-center">Sold Out</p>
        </button>
      </div>
      <div class="md:p-2 mt-6 md:mt-4 py-2 px-0">
        <h3 class="text-[12px] uppercase leading-4 text-center">
          {{ productName }}
        </h3>
        <p
          class="text-[11px] md:text-[12px] uppercase text-center text-gray-600"
        >
          Product Color
        </p>
        <p class="text-[12px] text-center py-1"><span>$</span>{{ price }}</p>
      </div>
    </div>
  </a>
</template>
