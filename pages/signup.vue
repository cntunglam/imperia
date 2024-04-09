<template>
    <main class="_body">
      <div>
        <h2 class="text-[20px] uppercase text-center">create an account</h2>
        <p class="text-center">Create an account and benefit from order delivery updates and return management as well as personalized recommendations</p>
      </div>
      <div>
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
                        <input
                        type="email"
                        placeholder="Email Address"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
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
                    </div>
                    <button class="btn btn-primary">Create My Profile</button>
                    <p class="text-center">Already have a profile? <a class="underline" href="/login">Log in</a></p>
                </div>
      </div>
    </main>
  </template>
  