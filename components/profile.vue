<script setup>
import { GET_CUSTOMER } from "~/queries/getCustomer";

const { $shopifyClient } = useNuxtApp();
const loading = ref(true);
const userInfo = ref({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
});
onMounted(async () => {
  try {
    if (localStorage.getItem("accessToken")) {
      const { data } = await $shopifyClient.request(GET_CUSTOMER, {
        variables: {
          customerAccessToken: localStorage.getItem("accessToken"),
        },
      });
      userInfo.value = {
        email: data.customer.email,
        firstName: data.customer.firstName,
        lastName: data.customer.lastName,
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
<template v-else-if="activeTab === 'profile'">
  <div class="py-10 mx-auto w-full">
    <p class="mx-auto text-center">Account Information</p>
  </div>
  <div class="form-control py-8 w-full mx-auto uppercase">
    <div class="space-y-4">
      <select
        class="select custom-select select-bordered w-full md:text-[10px] text-[12px] uppercase border-black rounded-none"
      >
        <option disabled selected>Title</option>
        <option>Mr</option>
        <option>Miss, Mrs, Ms</option>
        <option>Mx</option>
        <option>I'd rather not say</option>
      </select>
      <input
        v-model="userInfo.firstName"
        type="text"
        placeholder="First Name"
        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none"
      />
      <input
        v-model="userInfo.lastName"
        type="text"
        placeholder="Last Name"
        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none"
      />
      <input
        v-model="userInfo.email"
        type="email"
        placeholder="Email Address"
        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none"
      />
      <date-picker />
      <div class="flex gap-2">
        <input
          type="number"
          placeholder="PREFIX"
          class="w-1/3 md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none"
        />
      </div>
    </div>
    <div class="justify-between space-y-4 pt-4">
      <div>
        <input
          type="checkbox"
          id="checkbox-1"
          class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"
        />
        <label for="checkbox-1" class="text-[12px] px-2"
          >Yes, send me marketing and promotional emails.</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox-2"
          class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"
        />
        <label for="checkbox-2" class="text-[12px] px-2"
          >Yes, send me order confirmations and account notifications.</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox-3"
          class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"
        />
        <label for="checkbox-3" class="text-[12px] px-2"
          >Yes, send me marketing and promotional text messages.</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox-4"
          class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"
        />
        <label for="checkbox-4" class="text-[12px] px-2"
          >Yes, send me order updates and delivery notifications.</label
        >
      </div>
    </div>
    <button class="btn btn-primary">Save Changes</button>
  </div>
</template>
