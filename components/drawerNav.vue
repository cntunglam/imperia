<template>
    <nav>
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="xl:px-36 md:px-4 navbar mx-auto">
                <div class="flex-none lg:hidden">
                    <IconDrawer icon="pajamas:hamburger" labelFor="left-drawer" >
                    </IconDrawer>
                </div> 
                <div class="flex-none px-2 lg:hidden">
                    <IconDrawer icon="ph:magnifying-glass-light" labelFor="left-drawer" >
                    </IconDrawer>

                </div> 
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal uppercase">
                    <!-- Navbar menu content here -->
                    <li><a href="/collection">Shop</a></li>
                    <li><a>Company</a></li>
                    <li><a>Design</a></li>
                    <li><a>Couture</a></li>
                    <li><a>Audio</a></li>
                    </ul>
                </div>
                <div class="flex-1 justify-center px-2 mx-2">
                    <a href="/">
                        <img class="h-3 mx-auto w-auto" src="/img/logo.svg">
                    </a>
                </div>
                <div class="flex-none hidden lg:block uppercase">
                    <ul class="menu menu-horizontal">
                    <!-- Navbar menu content here -->                       
                    <li><a href="/login">Login</a></li>
                    <li><a href="/login">Assistance</a></li>
                    <li><a>Shopping Bag</a></li>
                    </ul>
                </div>
                <div class="flex-none lg:hidden">
                        <img src="/icon/bag.png" />
                </div> 

            </div>
            <!-- Page content here -->
        </div>
    </nav>

</template> 