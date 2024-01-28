<script setup>
    import { product } from "/assets/product.json"
    useSeoMeta({
        title:"Imperia"
    })
</script>
<template>  
    <main class="">
        <Hero/>
        <LatestNews/>
        <section class="mx-auto py-4 flex flex-col">
            <h2 class=" text-[28px] text-center uppercase py-4">New Arrivals</h2>
            <tab/>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 pt-3 py-0 gap-2 font-thin md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
        </section>
        <Collection/>
    </main>
</template>