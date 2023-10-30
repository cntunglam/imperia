<template>
    <div class="grid grid-cols-1 md:grid-cols-2 ">
        <div class="md:my-auto px-2 py-20 md:py-48">
            <h2 class="text-4xl text-center">Login</h2>
            <div class="form-control py-2 w-full max-w-md mx-auto">
            <label class="label py-0 mt-4">
                <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-md" />
            <label class="label py-0 mt-4">
                <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-md" />
            <button class="btn btn-primary my-4">Submit</button>
        </div>
        </div>
        <div class="hover:filter hover:grayscale duration-100 min-h-screen shadow-lg flex justify-center lg:row-span-2 lg:col-span-1 col-span-2 bg-top bg-fixed bg-[url('/img/hoodie.webp')]">
            <div class="my-auto p-4 bg-black text-white">
                    <h2 class="md:text-6xl text-3xl  text-white uppercase">EXCLUSIVE ACCESS</h2>
                    <p class="py-2">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
        </div>
    </div>
</template>