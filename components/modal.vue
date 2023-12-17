<script setup>
    defineProps({
        buttonText: String,
        buttonStyle: String,
        boxHeader: String,
        icon: String,
        iconStyle: String,
        modalStyle: String,
    })
</script>
<template>
    <button class="btn font-normal" :class="buttonStyle" onclick="my_modal_3.showModal()"><Icon :name="icon" :class="iconStyle" /> {{ buttonText }}</button>
    <dialog id="my_modal_3" class="modal">
        <div :class="modalStyle">
            <div class="border-b-2 border-black">
                <form method="dialog">
                    <button class="btn btn-md btn-circle btn-ghost absolute right-2 top-2 hover:bg-transparent">✕</button>
                </form>
                <h3 class="text-lg uppercase">{{ boxHeader }}</h3>
                </div>
                <slot/>
        </div>
    </dialog>

</template>