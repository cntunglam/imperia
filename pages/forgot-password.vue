<script setup>
    const isConfirmEmail = ref(false)
    const success = ref(false)
</script>
<template>
    <main class="_body space-y-4">
      <div>
        <h2 class="text-[20px] uppercase text-center">reset password</h2>
      </div>
      <div>
        <div v-if="isConfirmEmail === false" class="form-control pb-8 pt-4 w-full mx-auto uppercase">
            <div class="space-y-4">
                <input
                    type="email"
                    placeholder="Email Address"
                    class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                />
            </div>
            <button class="btn btn-primary" @click="isConfirmEmail = true ">reset my password</button>
        </div>
        <div v-if="isConfirmEmail === true" class="form-control pb-8 pt-4 w-full mx-auto uppercase">
            <div class="space-y-4" v-if="success === false">
                <input
                    type="password"
                    placeholder="New Password"
                    class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                />
            </div>
            <button class="btn btn-primary" v-if="success === false" @click="success = true ">create new password</button>
            <div class="mx-auto text-center w-full" v-if="success === true">
                <p class="text-center">Your password has been successfully reset</p>
                <button class="btn btn-primary w-full" v-if="success === true" @click="navigateTo()">Back To home</button>
            </div>
        </div>
      </div>
    </main>

</template>