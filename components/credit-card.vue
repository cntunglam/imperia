<template>
    <div class="card cursor-pointer bg-current border-[1px] border-black rounded-none text-neutral-content" @click="showModal(id)"> 
        <div class="card-body py-2">
            <Icon name="logos:mastercard" class="text-4xl"/>
            <p class="text-black">**** **** **** **** 5472</p>
            <p class="text-black">02/27 </p>
        </div>
    </div>
    <dialog :id="id" class="modal">
        <div class="modal-box">
            <div class="form-control w-full mx-auto space-y-4 uppercase">
                <div class="border-b-[1px] border-black flex justify-between mb-2 py-1">
                    <h3>Edit Cards</h3>
                    <button class="" @click="closeModal()">x</button>
                </div>
                <input
                        type="number"
                        placeholder="**** **** **** **** 5472"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                />
                <input
                        type="text"
                        placeholder="Lam Cao"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                />
                <div class="grid grid-cols-2 gap-2">
                            <input
                                type="date"
                                placeholder="Expired Date"
                                class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                                />
                                <input
                                type="number"
                                placeholder="***"
                                class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                                />
                </div>
                <div class="flex gap-1 w-full">
                    <button class="btn btn-primary w-1/2">Save Change</button>
                    <button class="btn btn-warning bg-red-600 w-1/2">Remove Cards</button>
                </div>
            </div>
        </div>
    </dialog>
</template>

<script>
export default {
    props: {
        id: String
    },
    methods: {
        showModal(id) {
            const dialog = document.getElementById(id);
            if (dialog) {
                dialog.showModal();
            }
        },
        closeModal() {
            const dialog = document.getElementById(this.id);
            if (dialog) {
                dialog.close();
            }
        }
    }
}
</script>
