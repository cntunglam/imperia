<script setup>
import { GET_CART } from "~/queries/getCart";
import { REMOVE_ITEM } from "~/queries/mutateCart";
const { $shopifyClient } = useNuxtApp();
const cartId = ref("");
const totalAmount = ref("");
const items = ref([]);
onMounted(async () => {
  try {
    cartId.value = sessionStorage.getItem("cartId");
    const { data } = await $shopifyClient.request(GET_CART, {
      variables: {
        id: cartId.value,
      },
    });
    totalAmount.value = data.cart.cost.subtotalAmount.amount.slice(0, -2);
    items.value = data.cart.lines.edges;
    console.log(items.value);
  } catch (error) {
    console.error(error);
  }
});

const removeCartLine = async (lineIds) => {
  try {
      await $shopifyClient.request(REMOVE_ITEM, {
        variables: {
          cartId: cartId.value,
          lineIds: lineIds,
        },
      });
      window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <main class="_body">
    <div>
      <h1 class="text-center uppercase text-[20px]">Bag</h1>
      <div class="overflow-x-auto">
        <table
          v-if="items.length > 0"
          class="table min-w-max text-[10px] uppercase border-black"
        >
          <thead>
            <tr>
              <th class="text-left px-0 font-thin">Item</th>
              <th class="text-right px-0 font-thin">Total</th>
            </tr>
          </thead>
          <tbody v-if="items.length > 0">
            <!-- row 1 -->
            <tr v-for="item in items" :key="item">
              <td>
                <div class="flex items-center align-middle gap-3 pt-4">
                  <div class="w-32">
                    <img :src="item.node.merchandise.image.src" />
                  </div>
                  <div class="">
                    <div>
                      {{ item.node.merchandise.product.title }}
                      <div class="opacity-50">
                        {{ item.node.merchandise.title.split("/")[0] }}
                      </div>
                    </div>
                    <select
                      class="my-6 bg-white uppercase border-none rounded-none"
                      disabled
                    >
                      <option selected>
                        {{ item.node.merchandise.title.split("/")[1] }}
                      </option>
                    </select>
                  </div>
                </div>
              </td>
              <td class="text-right px-0">
                <div class="h-32 mt-10">
                  <div class="">
                    {{ item.node.merchandise.priceV2.amount }} USD
                  </div>
                  <div class="underline mt-10 cursor-pointer btn-ghost hover:bg-transparent" @click="removeCartLine(item.node.id)">
                        Remove
                </div>
                </div>
              </td>
            </tr>

            <!-- row 2 -->
          </tbody>
          <!-- foot -->
        </table>
        <div class="h-36 flex" v-else>
          <p class="text-center m-auto">Your bag is empty</p>
        </div>
        <div
          v-if="items.length > 0"
          class="flex justify-between pt-4 uppercase"
        >
          <div>
            <p>Total</p>
            <p>Shipping</p>
            <p class="font-bold my-2">Order Total</p>
          </div>
          <div class="text-right">
            <p>{{ totalAmount }} USD</p>
            <p>Calculated At Checkout</p>
            <p class="font-bold my-2">{{ totalAmount }} USD</p>
          </div>
        </div>
        <a v-if="items.length > 0" href="/checkout">
          <button class="btn btn-primary w-full font-thin">
            CHECKOUT SECURELY
            <Icon
              name="material-symbols:lock-open-outline-rounded"
              class="text-xl mb-1"
            />
          </button>
        </a>
      </div>
    </div>
  </main>
</template> 