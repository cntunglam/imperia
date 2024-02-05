<script setup>
    import {ref} from 'vue'

    const accordion_1 = ref(false);
    const accordion_2 = ref(false);
    const accordion_3 = ref(false);

</script>
<template>
    <div class="border-b-[1px] border-black">
        <div class="collapse collapse-arrow">
        <input type="radio" name="accordion-1" /> 
        <div class="collapse-title text-xl font-medium border-t-[1px] border-black">
            PRODUCT SUSTAINABILITY        
        </div>
        <div class="collapse-content"> 
            <p>hello</p>
        </div>
        </div>
        <div class="collapse collapse-arrow">
        <input type="radio" name="accordion-2" /> 
        <div class="collapse-title text-xl font-medium uppercase border-t-[1px] border-black">
            Free Shipping, Free Return        </div>
        <div class="collapse-content"> 
            <p>hello</p>
        </div>
        </div>
        <div class="collapse collapse-arrow">
        <input type="radio" name="accordion-3" /> 
        <div class="collapse-title text-xl font-medium border-t-[1px] border-black">
            PAYMENT        </div>
        <div class="collapse-content"> 
            <p>hello</p>
        </div>
        </div>

    </div>
</template>
<style>
    .collapse-arrow > .collapse-title:after {
        height: 10px;
        width: 10px;
    }
</style>