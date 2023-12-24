<script setup>
    import { MainMenu } from "assets/menu.json"
</script>
<template>
    <nav class="w-full grid grid-cols-3 grid-flow-cols-dense">
        <div id="left-navbar" class="py-2 order-1 lg:order-2 lg:px-12 px-2 lg:block hidden ">
        </div>
        <div class="py-2 order-1 md:order-2 mx-auto">
            <a href="/">
                <img src="/img/logo.svg" class="h-4 my-1">
            </a>
        </div>
        <div class="py-2 order-3 hidden md:block">
            Bonjour
        </div>
    </nav>
    <Teleport to="#left-navbar">
        <ul class="md:flex space-x-4 text-base uppercase hidden">    
                <a v-for="item in MainMenu" :href="item.link">
                    <li> {{ item.name }}</li>
                </a>
            </ul>
    </Teleport> 
</template> 