<template>
  <div class="grid py-12">
    <div class="px-2 ">
      <h2 class="text-[28px] py-8 uppercase text-center">Login</h2>
      <div class="form-control py-2 w-full max-w-lg mx-auto uppercase">
        <div class="space-y-4">
          <input
          type="text"
          placeholder="First Name"
          class="w-full md:text-[11px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
        />
        <input
          type="password"
          placeholder="First Name"
          class="w-full md:text-[11px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
        />
        <div class="flex justify-between">
          <div>
            <input type="checkbox" id="remember" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
            <label for="remember" class="text-[12px] px-2">Remember me</label>
          </div>
          <div>
            <a href="/" class="text-[12px] underline uppercase">Forgot password?</a>
          </div>
        </div>
        </div>
        <button class="btn btn-primary my-4">Login</button>
        <p class="text-center underline"><a href="">Create An Account</a></p>
        <hr class="border-black mt-8"/>
      </div>
    </div>
    <div class="text-[12px] max-w-xl mx-auto space-y-4">
      <p>ENJOY AN ELEVATED SHOPPING EXPERIENCE WITH YOUR EXCLUSIVE ACCESS</p>
      <ul class="space-y-2">
        <li>- CHECK THE DETAILS AND MONITOR THE STATUS OF YOUR ORDERS</li>
        <li>- VIEW YOUR PRIVATE APPOINTMENTS</li>
        <li>- RECEIVE TAILORED ASSISTANCE FROM OUR CLIENT SERVICES</li>
        <li>- RECEIVE COMMUNICATIONS ABOUT PRODUCTS, STORES AND EVENTS</li>
      </ul>
    </div>
  </div>
</template>
