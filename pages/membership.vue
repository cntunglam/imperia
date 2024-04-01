<script setup>
    import { ref } from 'vue';

    const activeTab = ref('account');

    const setActiveTab = (tab) => {
        activeTab.value = tab;
    };
</script>
<template>
    <div class="_body space-y-8">
        <div>
            <h2 class="text-[20px] uppercase text-center">Welcome, [First Name]</h2>
        </div>
        <div
            role="tablist"
            class="tabs flex max-w-full justify-center md:space-x-4 md:px-0 bg-transparent uppercase font-sans"
        >
            <a role="tab" class="tab tab-xl text-black" :class="{ 'active underline': activeTab === 'account' }" @click="setActiveTab('orders')">My Account</a>
            <a role="tab" class="tab tab-xl text-black" :class="{ 'active underline': activeTab === 'orders' }" @click="setActiveTab('orders')">Orders</a>
            <a role="tab" class="tab tab-xl text-black" :class="{ 'active underline': activeTab === 'profile' }" @click="setActiveTab('profile')">Profile</a>
            <a role="tab" class="tab tab-xl text-black">Log Out</a>
        </div>
        <div class="grid">
            <template v-if="activeTab === 'account'">
                <p class="place-self-center text-[12px]">Account content goes here</p>
            </template>
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
                                <img src="/img/products/short/flatfront.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            <div class="">
                                <div class="">[Order Status]
                                    <div class="opacity-50">MARCH 24 2024</div>
                                </div>
                                <div class="pt-6">[Order No]
                                </div>
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
                                <img src="/img/products/short/flatfront.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            <div class="">
                                <div class="">[Order Status]
                                    <div class="opacity-50">MARCH 24 2024</div>
                                </div>
                                <div class="pt-6">[Order No]
                                </div>
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
            <template v-else-if="activeTab === 'profile'">
                <div class="form-control py-8 w-full mx-auto uppercase">
                    <div class="space-y-4">
                        <select
                            class="select select-bordered w-full text-[12px] uppercase border-black rounded-none"
                            >
                            <option disabled selected>Title</option>
                            <option>Mr</option>
                            <option>Miss, Mrs, Ms</option>
                            <option>Mx</option>
                            <option>I'd rather not say</option>
                        </select>
                        <input
                        type="text"
                        placeholder="First Name"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <input
                        type="text"
                        placeholder="Last Name"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <input
                        type="email"
                        placeholder="Email Address"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <input
                        type="date"
                        placeholder="Date of Birth"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <div class="flex gap-2">
                            <input
                            type="number"
                            placeholder="PREFIX"
                            class="w-1/3 md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                            />
                            <input
                            type="tel"
                            placeholder="Phone Number"
                            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                            />
                        </div>
                    </div>
                    <div class="justify-between space-y-4 pt-4 pb-2">
                        <div>
                        <input type="checkbox" id="remember" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="remember" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>
                        <div>
                        <input type="checkbox" id="remember" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="remember" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>
                        <div>
                        <input type="checkbox" id="remember" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="remember" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>
                        <div>
                        <input type="checkbox" id="remember" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="remember" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>

                    </div>
                    <button class="btn btn-primary">Save Changes</button>
                    <button class="btn btn-outline">Cancel</button>
      </div>
            </template>
        </div>
    </div>
</template>