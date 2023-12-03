<script setup>
    import { product } from "/assets/product.json"
    useSeoMeta({
        title:"Collection - Imperia"
    })
</script>
<template>
    <div class="grid px-2 md:px-20">
        <div class="">
            <h1 class="text-4xl md:text-5xl py-10">Lorem Ipsum</h1>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 md:py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 md:py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 md:py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
        </div>
    </div>
</template>