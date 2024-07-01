<script setup>
  defineProps({
    productName: String,
    productId : String,
    isComingSoon: String
  })

</script>
<template>
    <div class="form-control w-full px-2">
        <div
          onclick="my_modal.showModal()"
          class="btn btn-primary font-normal rounded-none w-full mt-4 top-90 border-1 border-black bg-black text-white text-md p-4 uppercase"
        >
          <p class="text-center"> {{ isComingSoon === "true" ? 'Coming Soon' : 'notify me when available' }}</p>
        </div>
    </div>
    <dialog id="my_modal" class="modal">
        <div class="modal-box rounded-none">
          <form method="dialog">
            <button
              class="btn btn-sm btn-circle btn-ghost hover:bg-transparent absolute right-4 md:right-5 top-1"
            >
              ✕
            </button>
          </form>
          <h3 class="font-bold text-[12px] text-center uppercase">
          {{ productName }}
          </h3>
          <div class="form-control py-4 w-full max-w-md mx-auto space-y-6">
            <select
              class="select text-[12px] md:text-[10px] select-bordered text-black rounded-none border-black"
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