<template>
    <div class="px-4 pt-14 w-full md:w-1/2 mx-auto">
        <div class="py-4">
            <h2 class="text-4xl md:text-5xl text-center uppercase py-1">sign up for exclusive access</h2>
            <p class="text-center uppercase">receive 10% off your first purchase plus communications about imperia products, services, stores and events.</p>
        </div>
        <div class="form-control py-4 w-full max-w-md mx-auto space-y-6">
            <input type="text" placeholder="First Name" class="input uppercase input-bordered w-full max-w-md rounded-none  border-1 border-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input type="text" placeholder="Last Name" class="input uppercase input-bordered w-full max-w-md rounded-none  border-1 border-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input type="email" placeholder="Email Address" class="input uppercase input-bordered w-full max-w-md rounded-none border-1 border-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black " />
            <input type="tel" placeholder="Phone Number" class="input uppercase input-bordered w-full max-w-md rounded-none border-1 border-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black " />
            <button class="btn btn-primary my-4">Submit</button>
        </div>
        <div class="grid grid-flow-col gap-4 mx-auto w-48">
                <icon name="fa6-brands:square-facebook" class="text-3xl"/>
                <icon name="fa6-brands:square-instagram" class="text-3xl"/>
                <icon name="fa6-brands:square-x-twitter" class="text-3xl"/>
        </div>
    </div>
</template>