<script setup>
  defineProps({
    productName: String,
    productId : String,
    isComingSoon: String
  })

</script>
<template>
  <div class="form-control w-full px-2">
    <div onclick="my_modal.showModal()"
      class="btn btn-primary font-normal rounded-none w-full mt-4 top-90 border-1 border-black bg-black text-white text-md p-4 uppercase">
      <p class="text-center">notify me when available</p>
    </div>
  </div>
  <dialog id="my_modal" class="modal">
    <div class="modal-box rounded-none">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost hover:bg-transparent absolute right-4 md:right-5 top-1">
          ✕
        </button>
      </form>
      <h3 class="font-bold text-[12px] text-center uppercase">
        {{ productName }}
      </h3>
      <div class="form-control py-4 w-full max-w-md mx-auto space-y-6">
        <div class="klaviyo-form-Xet8g6"></div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>


</template>