<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class=" md:px-36 navbar mx-auto">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal uppercase">
                    <!-- Navbar menu content here -->
                    <li><a href="/collection">Shop</a></li>
                    <li><a>News</a></li>
                    <li><a>About Us</a></li>
                    </ul>
                </div>
                <div class="flex-1 justify-center px-2 mx-2">
                    <a href="/">
                        <img class="h-3 mx-auto" src="/img/logo.svg">
                    </a>
                </div>
                <div class="flex-none hidden lg:block uppercase">
                    <ul class="menu menu-horizontal">
                    <!-- Navbar menu content here -->
                    <li><a href="/login">Login</a></li>
                    <label for="my-drawer-3" aria-label="open sidebar" class="">
                        <li><a>Shopping Bag</a></li>
                    </label>
                    </ul>
                </div>
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <Icon name="material-symbols:shopping-bag-outline" class="text-2xl"/>
                    </label>
                </div> 

            </div>
            <!-- Page content here -->
        </div> 
        <div class="drawer-side z-10">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
                <ul class="menu uppercase px-4 py-10 w-2/3 md:w-1/3 min-h-full bg-base-200 text-2xl">
            <!-- Sidebar content here -->
                    <li><a href="/collection">Shop</a></li>
                    <li><a>News</a></li>
                    <li><a>About Us</a></li>
                    <li><a href="/login">Login</a></li>
                    <div class="p-2 border-t-4">
                        <p class=""><Icon name="material-symbols:shopping-bag-outline" class="text-4xl mr-2"/></p>
                        <p class="text-base py-2">Your Bag Is Empty</p>
                        
                    </div>
                </ul>

        </div>
    </div>
</template>