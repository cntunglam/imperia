<script setup>
</script>
<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 mx-auto mb-10 md:mb-20"
  >
    <ProductSwiper/>
    <ProductInfo/>
  </div>
  <StyleWith />
  <dialog id="my_modal_4" class="modal">
    <div class="modal-box max-w-xl rounded-none">
      <form method="dialog">
        <button
          class="btn btn-sm btn-circle btn-ghost hover:bg-transparent absolute right-2 top-2"
        >
          ✕
        </button>
      </form>
      <h3 class="font-bold text-[12px] text-center uppercase">
        Imperia Sweat Shirts
      </h3>
      <div class="form-control py-4 w-full max-w-md mx-auto space-y-6">
        <select
          class="select text-[12px] select-bordered text-black rounded-none border-black"
        >
          <option disabled selected>SELECT A SIZE</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>

        <input
          type="text"
          placeholder="FIRST NAME"
          class="input input-bordered w-full max-w-md text-[11px] uppercase rounded-none border-black"
        />
        <input
          type="text"
          placeholder="LAST NAME"
          class="input input-bordered w-full max-w-md text-[11px] uppercase rounded-none border-black"
        />
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          class="input input-bordered w-full max-w-md text-[11px] uppercase rounded-none border-black"
        />
        <input
          type="tel"
          placeholder="PHONE NUMBER"
          class="input input-bordered w-full max-w-md text-[11px] uppercase rounded-none border-black"
        />
        <p class="text-[12px]">
          BY CLICKING SIGN UP, YOU AGREE TO RECEIVE MARKETING COMMUNICATIONS
          FROM IMPERIA AT THE NUMBER AND EMAIL ADDRESS PROVIDED. CONSENT IS NOT
          A CONDITION OF ANY PURCHASE. MESSAGE AND DATA RATES MAY APPLY. MESSAGE
          FREQUENCY VARIES. VIEW OUR PRIVACY POLICY AND TERMS OF SERVICE
        </p>
        <button class="btn btn-primary my-4 font-thin">
          notify me when available
        </button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
