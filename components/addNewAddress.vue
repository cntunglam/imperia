<template>
  <div
    class="card cursor-pointer bg-current border-[1px] border-black rounded-none text-neutral-content"
    @click="showModal(id)"
  >
    <div class="card-body py-4">
      <div>
        <p class="text-gray-400">Add New Address</p>
      </div>
    </div>
  </div>
  <dialog :id="id" class="modal rounded-none">
    <div class="modal-box rounded-none">
      <div class="mb-4 relatve">
        <button
          class="btn-sm btn-circle btn-ghost hover:bg-transparent absolute right-4 top-4 my-0"
          @click="closeModal()"
        >
          ✕
        </button>
        <h3 class="font-bold text-[12px] text-center uppercase">
          Add New Address
        </h3>
      </div>
      <div class="form-control space-y-4 w-full mx-auto uppercase">
        <div class="space-y-4">
          <countries-selector />

          <input
            type="text"
            placeholder="Province/State/County"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
          <input
            type="text"
            placeholder="City"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />

          <input
            type="Number"
            placeholder="Zip Code"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />

          <input
            type="text"
            placeholder="Address"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
        </div>
        <div class="grid grid-cols-2 gap-2 w-full justify-stretch align-middle">
          <button class="btn btn-primary">Save Changes</button>
          <button class="btn btn-outline">Remove Address</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import { GET_CUSTOMER } from "~/queries/getCustomer";
const { $shopifyClient } = useNuxtApp();
const loading = ref(true);

export default {
  props: {
    id: String,
    isPrimary: Boolean,
  },
  methods: {
    showModal(id) {
      const dialog = document.getElementById(id);
      if (dialog) {
        dialog.showModal();
      }
    },
    closeModal() {
      const dialog = document.getElementById(this.id);
      if (dialog) {
        dialog.close();
      }
    },
  },
};

onMounted(async () => {
  try {
    if (localStorage.getItem("accessToken")) {
      const { data } = await $shopifyClient.request(GET_CUSTOMER, {
        variables: {
          customerAccessToken: localStorage.getItem("accessToken"),
        },
      });
      orders.value = data.customer.orders.nodes;
      numberOfOrder.value = data.customer.numberOfOrders;
      console.log(numberOfOrder.value);
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
