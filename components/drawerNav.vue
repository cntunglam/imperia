<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isHidden = ref(false);
const isOpen = ref(false);
const lastScrollTop = ref(0);
console.log(isOpen.value);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop >= lastScrollTop.value && scrollTop > 100) {
    // Scrolling down
    isHidden.value = true;
  } else {
    // Scrolling up
    isHidden.value = false;
  }
  lastScrollTop.value = scrollTop;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.addEventListener("toggle", () => {
    isOpen.value = dropdownMenu.open;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <header class="sticky top-0 w-full z-10">
    <div class="bg-black flex align-middle justify-center">
      <p class="header-text text-sm w-full text-right text-white py-1">
        Lorem Ipsum
      </p>
    </div>
    <div class="navbar bg-white">
      <div class="navbar-start lg:hidden flex">
        <details id="dropdown-menu" class="dropdown dropdown-bottom">
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
      </div>
      <div class="navbar-start hidden xl:flex">
        <ul class="menu menu-horizontal text-sm uppercase">
          <li><a href="/collection">Shop</a></li>
          <li><a href="/">Company</a></li>
          <li><a href="/">Design</a></li>
          <li><a href="/">Couture</a></li>
          <li><a href="/">Audio</a></li>
        </ul>
      </div>
      <div class="navbar-center">
        <a href="/" class="btn btn-ghost text-xl">
          <img src="/img/logo.svg" width="150" height="130" alt="Imperia" />
        </a>
      </div>
      <div class="navbar-end hidden md:flex">
        <ul class="menu menu-horizontal text-sm uppercase space-x-2">
          <li><a>Client Services</a></li>
          <li><a>Login</a></li>
          <Icon
            name="material-symbols:search-rounded"
            class="text-2xl my-auto"
            v-if="isHidden"
            @click="isHidden = false"
          />
          <img src="/icon/bag.svg" width="18" height="18" alt="shopping bag" />
        </ul>
      </div>
      <div class="navbar-end flex md:hidden">
        <ul class="menu menu-horizontal text-base uppercase">
          <Icon
            name="material-symbols:search-rounded"
            class="text-2xl mx-2"
            v-if="isHidden"
            @click="isHidden = false"
          />
          <img src="/icon/bag.svg" width="20" height="20" alt="shopping bag" />
        </ul>
      </div>
    </div>
    <div :class="[isHidden ? 'invisible' : 'visible', 'relative']">
      <Icon
        name="ic:outline-search"
        class="text-2xl text-black absolute left-3 md:left-5 bottom-3 md:bottom-3"
      />
      <input
        type="text"
        placeholder="WHAT ARE YOU LOOKING FOR ?"
        class="input input-bordered border-t-black border-b-black border-l-0 border-r-0 rounded-none uppercase min-h-14 w-full max-w-full px-12 md:px-16 text-[12px] md:text-[11px]"
      />
    </div>
  </header>
</template>
<style>
.header-text {
  animation: slideInLeft 15s infinite linear;
}

@media (min-width: 768px) {
  .header-text {
    animation-duration: 45s;
  }
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
