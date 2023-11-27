<script setup>
    import { product } from "/assets/product.json"
    useSeoMeta({
        title:"Imperia"
    })
</script>
<template>  
    <main>
        <Hero/>
        <section class="mx-auto py-4">
            <h2 class="md:text-6xl text-4xl text-center uppercase py-8">New Launches</h2>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
        </section>
    </main>
</template>