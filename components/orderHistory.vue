<template v-else-if="activeTab === 'orders'">
  <div class="py-10 mx-auto">
    <p>Order History</p>
  </div>
  <table class="table min-w-max text-[10px] mb-6 uppercase border-black">
    <thead>
      <tr>
        <th class="text-left px-0 font-thin">Item</th>
        <th class="text-right px-0 font-thin">Order Total</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <td>
          <div class="flex items-center gap-3">
            <div class="w-32">
              <img
                src="https://cdn.shopify.com/s/files/1/0815/2046/0068/files/flatbacktransparent.png?v=1716971277"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
            <div class="">
              <div class="">
                [Order Status]
                <div class="opacity-50">MARCH 24 2024</div>
              </div>
              <div class="pt-6">[Order No]</div>
            </div>
          </div>
        </td>
        <td class="text-right flex justify-end px-0 py-11">
          <div class="">
            <div class="">$200 USD</div>
          </div>
        </td>
      </tr>
      <!-- row 2 -->
      <tr>
        <td>
          <div class="flex items-center gap-3">
            <div class="w-32">
              <img
                src="https://cdn.shopify.com/s/files/1/0815/2046/0068/files/flatbacktransparent.png?v=1716971277"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
            <div class="">
              <div class="">
                [Order Status]
                <div class="opacity-50">MARCH 24 2024</div>
              </div>
              <div class="pt-6">[Order No]</div>
            </div>
          </div>
        </td>
        <td class="text-right flex justify-end px-0 py-11">
          <div class="">
            <div class="">$200 USD</div>
          </div>
        </td>
      </tr>
    </tbody>
    <!-- foot -->
  </table>
  <button class="btn btn-primary w-full">Shop New Arrivals</button>
</template>
