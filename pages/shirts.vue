<script setup>
import { product } from "/assets/product.json";
</script>
<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 md:h-screen container mb-10 md:mb-20"
  >
    <div class="carousel md:carousel-vertical">
      <div class="carousel-item h-fit w-full">
        <img src="/img/products/shirts/flattshirtback.png" />
      </div>
      <div class="carousel-item h-fit w-full">
        <img src="/img/products/shirts/flattshirtfront2.png" />
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2 md:hidden">
      <a href="#item1" class="btn btn-xs btn-ghost">- </a>
      <a href="#item2" class="btn btn-xs btn-ghost">-</a>
      <a href="#item3" class="btn btn-xs btn-ghost">-</a>
      <a href="#item4" class="btn btn-xs btn-ghost">-</a>
      <a href="#item5" class="btn btn-xs btn-ghost">-</a>
    </div>
    <div class="md:m-auto py-4 md:px-20 px-2">
      <h1 class="text-lg uppercase text-center md:text-left">Imperia Hoodie</h1>
      <p class="text-base text-gray-600 uppercase text-center md:text-left">
        black
      </p>
      <p class="text-lg py-4 text-center md:text-left">$200</p>
      <p class="py-2 uppercase text-center md:text-left text-sm">
        black short sleeve t-shirt in a lightweight jersey cotton
      </p>

      <div class="form-control w-full max-w-xl text-xl">
        <label class="label">
          <span class="label-text uppercase">Size: (US)</span>
          <span class="label-text uppercase">Size Guide</span>
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
          class="btn btn-primary w-full mt-4 top-90 bg-black font-normal text-white text-md p-4 uppercase rounded-none"
        >
          <p class="text-center">Add To Bag</p>
        </div>
      </div>
      <div class="py-10 space-y-6 px-2">
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
  </div>
  <section class="mx-auto md:my-20">
    <h2 class="text-[28px] text-center py-8 uppercase">Style With</h2>
    <div class="grid md:grid-cols-4 grid-cols-2 px-2 py-10 gap-2 md:gap-8">
      <div v-for="item in product">
        <ProductCard
          :link="item.permalink"
          :inStock="item.inStock"
          :productName="item.name"
          :Image="item.img"
          :price="item.price"
        />
      </div>
    </div>
  </section>
</template>
