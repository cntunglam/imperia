<template>
    <footer class="footer md:block space-y-4">
        <div class="justify-center space-y-4 mx-auto">
            <div class="mx-auto">
                <a href="/">
                    <img class="md:h-10 h-8 w-auto" src="/img/logo.svg">
                </a>
            </div>
            <SocialIcon/>
        </div>
        <div class="py-4">
            <Newsletter/>
        </div>
        <div class="py-4 mx-auto space-y-4">
            <div class="mx-auto">
                <Payment/>
            </div>
            <div class=" mx-auto">
                <ul class="max-w-xl flex flex-col md:flex-row text-center py-2 text-xl md:text-base md:space-x-24 uppercase">
                    <li><a href="">Client Services</a></li>
                    <li><a href="">Terms Of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="mx-auto">
            <div class="mx-auto">
                <div class="dropdown dropdown-top mx-auto">
                    <label tabindex="0" class="text-center mx-auto">
                        <p class="text-center">© 2023 Imperia </p>
                    </label>
                    <div tabindex="0" class="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                        <div class="card-body">
                        <p>All contents of this website are property of Imperia. No part of this site, including all text and images, maybe reproduced in any form without prior written consent of Imperia</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </footer>
</template> 