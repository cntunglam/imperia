<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start flex md:hidden ">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <Icon name="quill:hamburger" class="text-2xl"/>
        </div>
      </div>
    </div>
    <div class="navbar-start hidden md:flex">
      <ul class="menu menu-horizontal text-[11px] uppercase">
        <li><a>Shop</a></li>
        <li><a>Company</a></li>
        <li><a>Design</a></li>
        <li><a>Couture</a></li>
        <li><a>Audio</a></li>
      </ul>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-xl">
        <img src="/img/logo.svg" width="150" height="130" alt="Imperia" />
      </a>
    </div>
    <div class="navbar-end hidden md:flex">
      <ul class="menu menu-horizontal text-[11px] uppercase">
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
<div class="relative">
        <Icon name="ic:outline-search" class="text-2xl text-black absolute left-4 bottom-3 md:bottom-2"/>
        <input type="text" placeholder="WHAT ARE YOU LOOKING FOR ?" class="input input-bordered border-t-black border-b-black border-l-0 border-r-0 rounded-none min-h-14 w-full max-w-full px-12" />
    </div>
</template>