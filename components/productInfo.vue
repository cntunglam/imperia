<script setup>
  defineProps({
    isOutOfStock: Boolean,
  });

</script>
<template>
      <div class="px-2 grid place-content-start md:w-3/4 m-auto">
        <div class="text-center space-y-6 pt-6 pb-4">
          <div class="">
            <h1 class="text-[12px] uppercase">Imperia Hoodie</h1>
            <p class="text-[12px]">$200</p>
          </div>
          <p class=" uppercase text-sm">
            black short sleeve t-shirt in a lightweight jersey cotton
          </p>
        </div>
        <div v-if="!isOutOfStock" class="form-control py-0 m-0 w-full px-2 text-xl">
        <label class="label">
          <span class="label-text uppercase">Size: (US)</span>
          <span class="label-text uppercase underline">Size Guide</span>
        </label>
        <select
          class="select select-bordered uppercase border-black rounded-none"
        >
          <option disabled selected>Select A Size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <div
          class="btn btn-primary w-full top-90 bg-black font-normal text-white mb-0 p-4 uppercase rounded-none"
        >
          <p class="text-center">Add To Bag</p>
        </div>
        </div>
      <OrderModal v-else/>
      <div class="px-2 text-left space-y-6 pt-6 pb-10">
        <ul class="space-y-2 list-none uppercase text-sm">
          <li>- Laser printed script logo on front</li>
          <li>- 150 GSM 100% french terry cotton</li>
          <li>- slightly oversized fit</li>
        </ul>
        <p class="uppercase text-sm">
          Balenciaga Skiwear is a line consisting of technically advanced
          thermal separates, comfortable and protective outerwear, accessories,
          and winter sport equipment. Each Skiwear product’s sophisticated
          design is engineered to withstand the elements.
        </p>
        <p class="uppercase text-sm">
          Material: 99% cotton, 1% elastane <br />
          Product ID: 773668TPVQ21000
        </p>
      </div>
      <Accordion />
    </div>

</template>