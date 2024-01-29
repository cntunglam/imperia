<template>
    <footer class="footer md:block py-2">
        <div class="justify-center space-y-4 mx-auto py-2">
            <div class="mx-auto">
                <a href="/">
                    <img class="md:h-[28px] h-[22px] w-auto" src="/img/logo.svg">
                </a>
            </div>
            <SocialIcon/>
        </div>
        <div class="py-0 md:py-12">
            <Newsletter/>
        </div>
        <div class="py- mx-auto space-y-4">
            <div class="mx-auto">
                <Payment/>
            </div>
            <div class="mx-auto">
                <ul class="max-w-xl flex flex-col md:flex-row text-center py-2 text-xl md:text-base md:space-x-24 uppercase">
                    <li><a href="">Client Services</a></li>
                    <li><a href="">Terms Of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="mx-auto">
            <div class="mx-auto">
                <Modal name="footerModal" action="footerModal.showModal()" icon="" modalStyle="modal-box w-full min-h-screen md:w-fit md:min-h-fit rounded-none" buttonText="© 2023 Imperia" buttonStyle="hover:cursor-help hover:bg-transparent" boxHeader="Copyright Information">
                    <p class="py-12 text-base uppercase">All contents of this website are property of Imperia. No part of this site, including all text and images, may be reproduced in any form without prior written consent of Imperia. </p>
                </Modal>
            </div>
        </div>
    </footer>
</template> 