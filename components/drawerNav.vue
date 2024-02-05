<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isHidden = ref(false);
const isShow = ref(false);
const lastScrollTop = ref(0);

const handleScroll = () => {
const scrollTop = window.scrollY || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop.value) {
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
});

onBeforeUnmount(() => {
window.removeEventListener("scroll", handleScroll);
});

</script>
<template>
  <header class="sticky top-0 w-full z-10">
    <div class="bg-black flex align-middle justify-center ">
    <p class=" header-text text-sm w-full text-right text-white py-1">Lorem Ipsum</p>
  </div>
  <div class="navbar bg-base-100">
    <div class="navbar-start flex xl:hidden ">
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isShow"/>
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="btn-button px-2"><Icon name="quill:hamburger" class="text-2xl"/></label>
        </div> 
        <div class="drawer-side z-10">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <div class="menu p-4 flex-col flex justify-between py-20 w-full md:w-96 min-h-full bg-white text-[14px] uppercase text-base-content">
            <!-- Sidebar content here -->
            <button for="my-drawer" class="btn btn-sm btn-circle btn-ghost hover:bg-transparent absolute left-2 top-2" @click="isShow = false">✕</button>
            <ul>
              <li><a href="/">Shop</a></li>
              <li><a href="/">Company</a></li>
              <li><a href="/">Design</a></li>
              <li><a href="/">Couture</a></li>
              <li><a href="/">Audio</a></li>
            </ul>
            <ul>
              <li><a>Client Services</a></li>
              <li><a>Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-start hidden xl:flex">
      <ul class="menu menu-horizontal text-sm uppercase">
        <li><a href="/">Shop</a></li>
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
        <Icon name="material-symbols:search-rounded" class="text-2xl my-auto" v-if="!isHidden" @click="isHidden = false"/>
        <img src="/icon/bag.svg" width="18" height="18" alt="shopping bag" />
      </ul>
    </div>
    <div class="navbar-end flex md:hidden">
      <ul class="menu menu-horizontal text-base uppercase">
        <Icon name="material-symbols:search-rounded" class="text-2xl mx-2" v-if="!isHidden" @click="isHidden = false" />
        <img src="/icon/bag.svg" width="20" height="20" alt="shopping bag" />
      </ul>
    </div>
  </div>
      <div v-if="isHidden">
        <Icon name="ic:outline-search" class="text-2xl text-black absolute left-2 md:left-5 bottom-3 md:bottom-3"/>
        <input type="text" placeholder="WHAT ARE YOU LOOKING FOR ?" class="input input-bordered border-t-black border-b-black border-l-0 border-r-0 rounded-none uppercase min-h-14 w-full max-w-full px-12 md:px-16 text-[12px] md:text-[11px]" />
      </div>
  </header>
</template>
<style>
  .header-text {
    animation: slideInLeft 15s infinite linear;
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