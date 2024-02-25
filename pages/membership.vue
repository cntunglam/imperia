<template>
    <div class="grid my-8 px-2 space-y-8 w-1/2 mx-auto">
        <div class="px-2 ">
            <h2 class="text-[28px] uppercase text-center">Welcome, [First Name]</h2>
        </div>
        <div
            role="tablist"
            class="tabs space-x-2 flex flex-nowrap overflow-y-hidden overflow-x-scroll max-w-full no-scrollbar justify-start md:justify-center px-2 md:px-0 bg-transparent uppercase font-sans"
        >
            <a role="tab" class="tab tab-xl text-black">My Account</a>
            <a role="tab" class="tab tab-xl text-black">Orders</a>
            <a role="tab" class="tab tab-xl text-black">Profile </a>
            <a role="tab" class="tab tab-xl text-black">Log Out</a>
        </div>
        <div class="px-2 grid h-52">
            <hr class="border-t-[1px] border-black">
            <p class="place-self-center">You have no placed order</p>
            <button class="btn btn-primary text-[10px] w-full mt-4 place-self-end">Shop New Arrivals</button>
        </div>

    </div>
</template>