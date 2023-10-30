<script setup>
    defineProps({
        productName:String,
        price:String,
        Image:String,
        inStock: Boolean,
        link:String
    })

</script>
<template>
    <a :href="link">
        <div class="card-normal rounded-none">
            <div class="relative">
                <figure class=""><img :src="Image" alt="t-shirt" class="hover:scale-105 ease-in-out duration-500 mx-auto w-auto h-48 xl:h-96"/></figure>
                <button v-if="!inStock" class="py-2 absolute w-full top-90 bg-black text-white border-2 text-sm  uppercase"><p class="text-center">Sold Out</p></button>
                <button v-else="!inStock" class="border-2 py-2 absolute w-full top-90 border-black text-sm  uppercase"><p class="text-center">Buy Now</p></button>
            </div>
            <div class="md:p-4 my-12 md:my-10 py-2 px-0">
                <h3 class="text-sm md:text-base font-bold uppercase leading-4 text-center">{{ productName }}</h3>
                <p class="text-lg text-center"><span>$ </span>{{ price }}</p>
            </div>
        </div>
    </a>    
</template> 