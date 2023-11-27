<script setup>
    defineProps({
        labelFor: String,
        position:String,
        type: String,
    })
</script>
<template>
    <div class="drawer" :class="position">
    <input :id="labelFor" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
            <!-- Page content here -->
            <label :for="labelFor" class="btn btn-primary drawer-button">
                
            </label>
        </div> 
        <div class="z-10 drawer-side">
            <label :for="labelFor" aria-label="close sidebar" class="drawer-overlay"></label>
            <slot/> 
        </div>
    </div>
</template>