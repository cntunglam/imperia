<script setup>
    import { MainMenu } from "assets/menu.json"
</script>
<template>
    <nav class="w-full grid grid-cols-3 ">
        <div class="py-2 order-1 md:order-2 md:px-12 px-2 ">
            <IconDrawer labelFor="leftSidebar" icon="quill:hamburger" class="block md:hidden"/>
            <ul class="md:flex space-x-4 text-lg uppercase hidden">    
                <a v-for="item in MainMenu" :href="item.link">
                    <li> {{ item.name }}</li>
                </a>
            </ul>
        </div>
        <div class="py-2 order-1 md:order-2 mx-auto">
            <img src="/img/logo.svg" class="h-4 my-1">
        </div>
        <div class="py-2 order-3 hidden md:block">
            Bonjour
        </div>
    </nav>
</template> 