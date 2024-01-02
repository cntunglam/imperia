<script setup>
    import { product } from "/assets/product.json"
</script>
<template>
    <div class="grid md:grid-cols-2 grid-cols-1 md:h-screen container mb-10 md:mb-20">
        <div class="carousel md:carousel-vertical">
            <div class=" carousel-item w-full h-fit ">
                <img src="/img/products/short/closeupshorts.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/modelfront.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/modelmain.jpg"/>
            </div>
        </div>          
        <div class="md:m-auto md:px-20 px-2">
            <h1 class="text-xl uppercase"> Imperia Sweat Shirts </h1>
            <p class=" text-xl py-2 ">$200.00</p>
            <div  class="form-control disabled w-full max-w-xl">
                <label class="label">
                    <span class="label-text">Size</span>
                </label>
                <select disabled class="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <div onclick="my_modal_4.showModal()" class="btn btn-secondary w-full mt-4 top-90 border-1 border-black bg-white text-black hover:bg-black hover:text-white text-md p-4 uppercase"><p class="text-center">notify me when available</p></div>
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
            <h2 class="md:text-5xl text-4xl text-center uppercase py-8">Style With</h2>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
        </section>
    <dialog id="my_modal_4" class="modal">
        <div class="modal-box max-w-3xl">
            <h3 class="font-bold text-xl text-center">Imperia Sweat Shirts</h3>
            <div class="form-control py-2 w-full max-w-md mx-auto">
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

            <label class="label py-0 mt-4">
                <span class="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md" />
            <label class="label py-0 mt-4">
                <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-md" />
            <label class="label py-0 mt-4">
                <span class="label-text">Phone Number</span>
            </label>
            <input type="tel" placeholder="Type here" class="input input-bordered w-full max-w-md" />
            <button class="btn btn-primary my-4">Submit</button>
        </div>
            <div class="modal-action">
            <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn">Close</button>
            </form>
        </div>
    </div>
    </dialog>

</template>