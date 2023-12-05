<template>
    <button class="btn btn-ghost hover:bg-transparent" onclick="my_modal_3.showModal()">© 2023 Imperia</button>
    <dialog id="my_modal_3" class="modal">
        <div class="modal-box w-full min-h-screen md:w-fit md:min-h-fit rounded-none">
            <div class="border-b-2 border-black">
                <form method="dialog">
                    <button class="btn btn-md btn-circle btn-ghost absolute right-2 top-2 hover:bg-transparent">✕</button>
                </form>
                <h3 class="text-lg">COPYRIGHT INFORMATION</h3>
                </div>
            <p class="py-12 text-base">All contents of this website are property of Imperia. No part of this site, including all text and images, maybe reproduced in any form without prior written consent of Imperia</p>
        </div>
    </dialog>

</template>