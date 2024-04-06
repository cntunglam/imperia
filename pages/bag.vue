<template>
<main class="_body">
        <div>
            <h1 class="text-center uppercase text-[20px]">Bag</h1>
            <div class="overflow-x-auto">
                <table class="table min-w-max text-[10px] uppercase border-black">
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
                <div class="flex justify-between pt-4 uppercase">
                    <div>
                        <p>Total</p>
                        <p>Shipping</p>
                        <p class=" font-bold my-2">Order Total</p>
                    </div>
                    <div class="text-right">
                        <p>$400 USD</p>
                        <p>Calculated At Checkout</p>
                        <p class="font-bold my-2">$400 USD</p>
                    </div>
                </div>
                <button class="btn btn-primary w-full font-thin">CHECKOUT SECURELY <Icon name="material-symbols:lock-open-outline-rounded" class="text-xl mb-1"/></button>
            </div>
        </div>
</main>
</template> 