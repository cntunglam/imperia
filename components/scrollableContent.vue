<template>
  <div
    id="scrollable"
    class="my-2 pt-6 space-y-4 overflow-x-hidden overflow-y-scroll h-48 text-[10px]"
  >
    <!-- Your content will go here -->
    <slot />
    <!-- Gradient blur effect at the bottom -->
  </div>
</template>

  <style scoped>
#scrollable h2 {
  @apply py-2;
}

#scrollable > div {
  @apply space-y-2;
}
</style>