<script setup>
    const isOpen = ref(false);
    onMounted(() => {
        const dropdownMenu = document.getElementById("dropdown-menu");
        dropdownMenu.addEventListener("toggle", () => {
            isOpen.value = dropdownMenu.open;
        });
    });

</script>
<template>
        <details id="dropdown-menu" class="dropdown dropdown-bottom xl:hidden flex">
          <summary
            role="button"
            class="btn btn-circle bg-transparent border-none hover:bg-transparent"
          >
            <Icon
              :name="
                isOpen ? 'material-symbols-light:close' : 'quill:hamburger'
              "
              class="text-2xl"
            />
          </summary>
          <ul
            class="flex flex-col justify-between dropdown-content z-[1] menu p-2 shadow bg-white text-[14px] uppercase py-20 rounded-none w-screen h-screen"
          >
            <div>
              <li><a href="/collection">Shop</a></li>
              <li><a href="/">Company</a></li>
              <li><a href="/">Design</a></li>
              <li><a href="/">Couture</a></li>
              <li><a href="/">Audio</a></li>
            </div>
            <div class="py-32 ">
              <li><a href="/">Client Services</a></li>
              <li><a href="/">Login</a></li>
            </div>
          </ul>
        </details>

</template>