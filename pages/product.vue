<script setup>
    import { product } from "/assets/product.json"
</script>
<template>
    <div class="grid md:grid-cols-2 grid-cols-1 md:h-screen container mb-10 md:mb-20">
        <div class="carousel md:carousel-vertical">
            <div class=" carousel-item w-full h-fit ">
                <img src="/img/products/hoodie-1.webp"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/hoodie-2.webp"/>
            </div>
        </div>  
        <div class="md:m-auto md:px-20 px-2">
            <h1 class="text-xl uppercase"> Imperia Hoodie </h1>
            <p class=" text-xl py-2 ">$200</p>
            <div class="form-control w-full max-w-xl">
                <label class="label">
                    <span class="label-text">Size</span>
                </label>
                <select class="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <div class="btn btn-primary w-full mt-4 top-90 bg-black text-white text-md p-4 uppercase"><p class="text-center">Add To Bag</p></div>
                <Payment/>
            </div>
            <p class="py-2">
                black short sleeve t-shirt in a lightweight jersey cotton
            </p>
            <ul class="px-6 list-disc">
                <li>Laser printed script logo on front</li>
                <li>150 GSM 100% french terry cotton</li>
                <li>slightly oversized fit</li>
            </ul>
            <Accordion/>
        </div>
    </div>
    <section class="mx-auto md:my-20">
            <h2 class="md:text-5xl text-4xl text-center py-8">Related Products</h2>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
        </section>

</template>