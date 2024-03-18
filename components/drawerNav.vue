<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isHidden = ref(true);
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
  if (window.location.pathname === "/") {
    isHidden.value = false;
    window.addEventListener("scroll", handleScroll);
  }
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
      <div class="navbar-start">
        <ul class="menu menu-horizontal text-sm uppercase hidden xl:flex">
          <li><a href="/collection">Shop</a></li>
          <li><a href="/">Company</a></li>
          <li><a href="/">Design</a></li>
          <li><a href="/">Couture</a></li>
          <li><a href="/">Audio</a></li>
        </ul>
        <MobileMenu />
      </div>
      <div class="navbar-center">
        <a href="/" class="btn btn-ghost text-xl">
          <img src="/img/logo.svg" width="150" height="130" alt="Imperia" />
        </a>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal text-sm px-2 md:px-4 uppercase space-x-2">
          <div class="hidden md:flex "> 
            <li><a href="/client-service">Client Services</a></li>
            <li><a href="/login">Login</a></li>
          </div>
          <Icon
            name="material-symbols:search-rounded"
            class="text-2xl my-auto"
            v-if="isHidden"
            @click="isHidden = false"
          />
          <a href="/bag" class="my-auto">
            <img src="/icon/bag.svg" alt="bag" class="w-6 h-6 my-auto" />
          </a>
        </ul>
      </div>
    </div>
    <div :class="[isHidden ? 'hidden' : 'block', 'relative']">
      <Icon
        name="ic:outline-search"
        class="text-2xl text-black absolute z-10 top-3 left-3 md:left-5"
      />
      <input
        type="text"
        placeholder="WHAT ARE YOU LOOKING FOR ?"
        class="input absolute input-bordered border-t-black border-b-black border-l-0 border-r-0 rounded-none uppercase min-h-14 w-full max-w-full px-12 md:px-14 text-[12px] md:text-[11px]"
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
