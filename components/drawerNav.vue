<script setup>
import 'animate.css';
</script>
<template>
  <header class="sticky top-0 w-full z-10">
    <div class="bg-black flex align-middle justify-center ">
    <p class=" header-text text-sm w-full text-right text-white py-1  animate__slideInLeft animate__animated animate__infinite">Lorem Ipsum</p>
  </div>
  <div class="navbar bg-base-100">
    <div class="navbar-start flex xl:hidden ">
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="btn-button px-2"><Icon name="quill:hamburger" class="text-2xl"/></label>
        </div> 
        <div class="drawer-side z-10">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 md:w-96 min-h-full bg-base-200 text-3xl py-20 text-base-content">
            <!-- Sidebar content here -->
            <li><a href="/">Shop</a></li>
            <li><a href="/">Company</a></li>
            <li><a href="/">Design</a></li>
            <li><a href="/">Couture</a></li>
            <li><a href="/">Audio</a></li>
          </ul>
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
      <a href="" class="btn btn-ghost text-xl">
        <img src="/img/logo.svg" width="150" height="130" alt="Imperia" />
      </a>
    </div>
    <div class="navbar-end hidden md:flex">
      <ul class="menu menu-horizontal text-sm uppercase">
        <li><a>Client Services</a></li>
        <li><a>Login</a></li>
        <img src="/icon/bag.svg" width="18" height="18" alt="shopping bag" />
      </ul>
    </div>
    <div class="navbar-end flex md:hidden">
      <ul class="menu menu-horizontal text-base uppercase">
        <img src="/icon/bag.svg" width="20" height="20" alt="shopping bag" />
      </ul>
    </div>
  </div>
    <div id="hidden--onscroll" class="relative">
      <Icon name="ic:outline-search" class="text-2xl text-black absolute left-4 bottom-3 md:bottom-3"/>
      <input type="text" placeholder="WHAT ARE YOU LOOKING FOR ?" class="input input-bordered border-t-black border-b-black border-l-0 border-r-0 rounded-none min-h-14 w-full max-w-full px-12 text-[11px]" />
    </div>

  </header>
</template>
<style>
  .header-text {
    --animate-duration: 15s;
  }
</style>  