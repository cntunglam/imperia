<script setup>
import { ref } from "vue";

const accordion_1 = ref(false);
const accordion_2 = ref(false);
const accordion_3 = ref(false);
</script>
<template>
  <div class="border-b-[1px] border-black px-1">
    <div class="collapse collapse-arrow">
      <input type="radio" name="accordion-1" v-model="accordion_1" />
      <div
        class="collapse-title text-[12px] font-medium border-t-[1px] border-black"
      >
      <p class="">PRODUCT SUSTAINABILITY</p>
      </div>
      <div class="collapse-content text-[12px] uppercase">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse collapse-arrow">
      <input type="radio" name="accordion-2" v-model="accordion_2" />
      <div
        class="collapse-title text-[12px] font-medium uppercase border-t-[1px] border-black"
      >
      <p>Free Shipping, Free Return</p>
      </div>
      <div class="collapse-content text-[12px] uppercase">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse collapse-arrow">
      <input type="radio" name="accordion-3" v-model="accordion_3" />
      <div
        class="collapse-title text-[12px] font-medium border-t-[1px] border-black"
      >
      <p>PAYMENT</p>
      </div>
      <div class="collapse-content text-[12px] uppercase">
        <p>hello</p>
      </div>
    </div>
  </div>
</template>
<style>
.collapse-arrow8 > .collapse-title:after {
  height: 8px;
  width: 8px;
  vertical-align: middle;
}
</style>
