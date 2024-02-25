<template>
  <div class="grid my-8">
    <div class="px-2 ">
      <h2 class="text-[28px] uppercase text-center">Login</h2>
      <div class="form-control py-8 w-full max-w-3xl mx-auto uppercase">
        <div class="space-y-4">
          <input
          type="text"
          placeholder="First Name"
          class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
        />
        <input
          type="password"
          placeholder="First Name"
          class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
        />
        <div class="flex justify-between py-2">
          <div>
            <input type="checkbox" id="remember" class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"/>
            <label for="remember" class="text-[12px] px-2">Remember me</label>
          </div>
          <div>
            <a href="/" class="text-[12px] underline uppercase">Forgot password?</a>
          </div>
        </div>
        </div>
        <button class="btn btn-primary text-[10px] mt-8">Login</button>
        <p class="text-center underline py-8"><a href="">Create An Account</a></p>
        <hr class="border-black"/>
      </div>
    </div>
    <div class="text-[12px] max-w-xl mx-auto space-y-4 py-8">
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
