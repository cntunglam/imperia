<template>
    <div class="_body space-y-8">
        <div>
            <h2 class="text-[28px] uppercase text-center">Welcome, [First Name]</h2>
        </div>
        <div
            role="tablist"
            class="tabs flex max-w-full justify-center md:space-x-4 md:px-0 bg-transparent uppercase font-sans"
        >
            <a role="tab" class="tab tab-xl text-[14px] text-black">My Account</a>
            <a role="tab" class="tab tab-xl text-[14px] text-black underline">Orders</a>
            <a role="tab" class="tab tab-xl text-[14px] text-black">Profile </a>
            <a role="tab" class="tab tab-xl text-[14px] text-black">Log Out</a>
        </div>
        <div class="grid h-64">
            <hr class="border-t-[1px] border-black">
            <p class="place-self-center text-[12px]">You have no placed order</p>
            <button class="btn btn-primary w-full place-self-end">Shop New Arrivals</button>
        </div>

    </div>
</template>