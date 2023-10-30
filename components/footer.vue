<template>
    <Newsletter/>
    <footer class="footer p-10 md:flex justify-evenly">
        <div class="md:w-1/2 mx-auto">
            <img src="/img/logo.svg" class="h-4 my-4 mx-auto">
            <div class="grid grid-flow-col gap-4 mx-auto">
                <icon name="fa6-brands:square-facebook" class="text-3xl"/>
                <icon name="fa6-brands:square-instagram" class="text-3xl"/>
                <icon name="fa6-brands:square-x-twitter" class="text-3xl"/>
            </div>
            <div class="mx-auto">
                <p class="text-center">All contents of this website are the property of Imperia . No part of this site, including all text and images, may be reproduced in any form without the prior written consent of Imperia </p>
                <p class="text-center">Copyright © 2023. All Rights Reserved </p>
                <p class="text-center">Registered company in Atlanta GA.</p>
            </div>
        </div> 
        <div class="flex flex-col mx-auto md:p-8">
            <Payment/>
            <ul class="w-full text-base uppercase">
                <li><a href="">Customer Assistance</a></li>
                <li><a href="">Term Of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
            </ul>
        </div>
    </footer>
</template> 