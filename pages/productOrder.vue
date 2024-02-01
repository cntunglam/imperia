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
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/1.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/2.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/3.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/flatback.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/flatfront.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/macroshotmesh.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/macroshotsatin.jpg"/>
            </div>
            <div class=" carousel-item h-fit w-full ">
                <img src="/img/products/short/pantsontheground.jpg"/>
            </div>
        </div>  
        <div class="md:m-auto py-4 md:px-20 px-2">
            <h1 class="text-lg uppercase text-center md:text-left"> Imperia Hoodie </h1>
            <p class=" text-base text-gray-600 uppercase text-center md:text-left ">black</p>
            <p class=" text-lg py-4 text-center md:text-left ">$200</p>
            <p class="py-2 uppercase text-center md:text-left text-sm">
                black short sleeve t-shirt in a lightweight jersey cotton
            </p>

            <div class="form-control w-full max-w-xl">
                <div onclick="my_modal_4.showModal()" class="btn btn-primary  font-normal rounded-none w-full mt-4 top-90 border-1 border-black bg-black text-white text-md p-4 uppercase"><p class="text-center">notify me when available</p></div>

            </div>
            <div class="py-10 space-y-6 px-2">
                <ul class="space-y-2 uppercase text-sm">
                <li>- Laser printed script logo on front</li>
                <li>- 150 GSM 100% french terry cotton</li>
                <li>- slightly oversized fit</li>
                </ul>
                <p class=" uppercase text-sm">
                    Balenciaga Skiwear is a line consisting of technically advanced thermal separates, comfortable and protective outerwear, accessories, and winter sport equipment. Each Skiwear product’s sophisticated design is engineered to withstand the elements.
            </p> 
            <p class=" uppercase text-sm">
                Material: 99% cotton, 1% elastane <br>
                Product ID: 773668TPVQ21000 
            </p>

            </div>
            <Accordion/>
        </div>
    </div>
    <section class="mx-auto md:my-20">
            <h2 class="md:text-5xl text-4xl text-center py-8 uppercase">Style With</h2>
            <div class="grid md:grid-cols-4 grid-cols-2 px-2 py-10 gap-2 md:gap-8">
                <div v-for="item in product">
                    <ProductCard :link="item.permalink" :inStock="item.inStock" :productName="item.name" :Image="item.img" :price="item.price"/>
                </div> 
            </div>
        </section>


    <dialog id="my_modal_4" class="modal">
        <div class="modal-box max-w-3xl">
            <h3 class="font-bold text-xl text-center py-6">Imperia Sweat Shirts</h3>
            <div class="form-control py-2 w-full max-w-md mx-auto space-y-6">
                <select class="select md:text-[11px] text-xl select-bordered text-gray-400">
                    <option disabled selected>SELECT A SIZE</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>

                <input type="text" placeholder="FIRST NAME" class="input input-bordered w-full max-w-md md:text-[11px] text-xl uppercase" />
                <input type="text" placeholder="LAST NAME" class="input input-bordered w-full max-w-md md:text-[11px] text-xl uppercase" />
                <input type="email" placeholder="EMAIL ADDRESS" class="input input-bordered w-full max-w-md md:text-[11px] text-xl uppercase" />
                <input type="tel" placeholder="PHONE NUMBER" class="input input-bordered w-full max-w-md md:text-[11px] text-xl uppercase" />
                <p>BY CLICKING SIGN UP, YOU AGREE TO RECEIVE MARKETING COMMUNICATIONS FROM IMPERIA AT THE NUMBER AND EMAIL ADDRESS PROVIDED. CONSENT IS NOT A CONDITION OF ANY PURCHASE. MESSAGE AND DATA RATES MAY APPLY. MESSAGE FREQUENCY VARIES. VIEW OUR PRIVACY POLICY AND TERMS OF SERVICE</p>
                <button class="btn btn-primary my-4">Submit</button>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>

    </dialog>

</template>