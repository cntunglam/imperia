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
            class="tabs flex max-w-full justify-center md:space-x-4 md:px-0 bg-transparent uppercase font-sans border-b-[1px] border-black pb-4"
        >
            <a role="tab" class="tab tab-xl text-black" :class="{ 'active underline': activeTab === 'account' }" @click="setActiveTab('account')">My Account</a>
            <a role="tab" class="tab tab-xl text-black" :class="{ 'active underline': activeTab === 'orders' }" @click="setActiveTab('orders')">Orders</a>
            <a role="tab" class="tab tab-xl text-black" :class="{ 'active underline': activeTab === 'profile' }" @click="setActiveTab('profile')">Profile</a>
            <a role="tab" class="tab tab-xl text-black">Log Out</a>
        </div>
        <div class="grid">
            <template v-if="activeTab === 'account'">
                <div class="w-full max-w-3xl mx-auto uppercase">
                    <p class="py-6 text-center">Payment Information</p>
                    <div class="grid grid-flow-col-dense overflow-x-scroll overflow-y-hidden no-scrollbar gap-1 max-w-3xl">
                        <credit-card id="1"/>
                        <credit-card id="2"/>
                        <credit-card id="3"/>
                    </div>
                    <div class="mt-6">
                        <p class="py-2 text-center">Your Bag</p>
                        <table class="table min-w-max text-[10px] mb-6 uppercase border-black">
                            <thead>
                            <tr>
                                <th class="text-left px-0 font-thin">Item</th>
                                <th class="text-right px-0 font-thin">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <!-- row 1 -->
                            <tr>
                                <td>
                                <div class="flex items-center align-middle gap-3">
                                    <div class="w-32">
                                        <img src="/img/products/short/flatfront.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    <div class="">
                                    <div>Imperia Short
                                        <div class="opacity-50">White</div>
                                    </div>
                                    <select
                                        class="my-6 uppercase border-none rounded-none"
                                    >
                                        <option selected> XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    </div>
                                </div>
                                </td>
                                <td class="text-right px-0 py-8">
                                    <div class="">
                                        <div class="">$200 USD</div>
                                        <div class="underline my-6 pt-4">Remove</div>
                                    </div>
                                </td>
                            </tr>
                            <!-- row 2 -->
                            <tr>
                                <td>
                                <div class="flex items-center align-middle gap-3">
                                    <div class="w-32">
                                        <img src="/img/products/short/flatfront.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    <div class="">
                                    <div>Imperia Short
                                        <div class="opacity-50">White</div>
                                    </div>
                                    <select
                                        class="my-6 uppercase border-none rounded-none"
                                    >
                                        <option selected> XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    </div>
                                </div>
                                </td>
                                <td class="text-right px-0 py-8">
                                    <div class="">
                                        <div class="">$200 USD</div>
                                        <div class="underline my-6 pt-4">Remove</div>
                                    </div>
                                </td>
                            </tr>

                            </tbody>
                            <!-- foot -->                    
                        </table>
                        <button class="btn btn-primary w-full font-thin"><a href="/bag">View Full Bag</a></button>
                    </div>
                </div>
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
                <div class="py-10 mx-auto w-full">
                    <p class="mx-auto text-center">Account Information</p>
                </div>
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
                        <input type="date" placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)"                         class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                     required>
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
                    <div class="justify-between space-y-4 pt-4">
                        <div>
                        <input type="checkbox" id="checkbox-1" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="checkbox-1" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>
                        <div>
                        <input type="checkbox" id="checkbox-2" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="checkbox-2" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>
                        <div>
                        <input type="checkbox" id="checkbox-3" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="checkbox-3" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>
                        <div>
                        <input type="checkbox" id="checkbox-4" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
                        <label for="checkbox-4" class="text-[12px] px-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</label>
                        </div>

                    </div>
                    <button class="btn btn-primary">Save Changes</button>
                </div>
            </template>
        </div>
    </div>
</template>