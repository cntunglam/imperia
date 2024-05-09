<template>
    <div class="card cursor-pointer bg-current border-[1px] border-black rounded-none text-neutral-content" @click="showModal(id)"> 
        <div class="card-body py-4">
            <p class="text-[12px] font-bold text-black">
                {{ isPrimary === true ? 'Primary Address' : 'Address' }}
            </p>
            <div>
                <p class="text-gray-400">John Doe</p>
                <p class="text-gray-400">St Unit 303 Sandy Springs, GA 30339 </p>
                <p class="text-gray-400">United States </p>
            </div>
        </div>
    </div>
    <dialog :id="id" class="modal rounded-none">
        <div class="modal-box rounded-none">
            <div class="mb-4 relatve">
                    <button
                    class=" btn-sm btn-circle btn-ghost hover:bg-transparent absolute right-2 top-4 my-0" @click="closeModal()"
                    >
                    ✕
                    </button>
                    <h3 class="font-bold text-[12px] text-center uppercase">
                        Edit Address       
                    </h3>
            </div>
            <div class="form-control py-8 w-full mx-auto uppercase">
                    <div class="space-y-4">
                        <input
                        type="text"
                        placeholder="Address"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <input
                        type="text"
                        placeholder="Province/State/County"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />

                        <input
                        type="Number"
                        placeholder="Zip Code"
                        class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
                        />
                        <countries-selector/>
                    </div>
                    <div class="grid grid-cols-2 gap-1 w-full justify-stretch align-middle">
                    <button class="btn btn-primary">Save Changes</button>
                    <button class="btn btn-outline">Remove Address</button>
                </div>
            </div>
        </div>
    </dialog>
</template>

<script>
export default {
    props: {
        id: String,
        isPrimary: Boolean,

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
