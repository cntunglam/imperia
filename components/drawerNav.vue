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
      <ul class="menu menu-horizontal text-base uppercase">
        <li><a>Shop</a></li>
        <li><a>Company</a></li>
        <li><a>Desgin</a></li>
        <li><a>Couture</a></li>
        <li><a>Audio</a></li>
      </ul>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost text-xl">
        <img src="/img/logo.svg" width="100" height="100" alt="Imperia" />
      </a>
    </div>
    <div class="navbar-end hidden md:flex">
      <ul class="menu menu-horizontal text-base uppercase">
        <li><a>Client Services</a></li>
        <li><a>Login</a></li>
        <img src="/icon/bag.svg" width="20" height="20" alt="shopping bag" />
      </ul>
    </div>
    <div class="navbar-end flex md:hidden">
      <ul class="menu menu-horizontal text-base uppercase">
        <img src="/icon/bag.svg" width="20" height="20" alt="shopping bag" />
      </ul>
    </div>
</div>
<div class="relative">
        <Icon name="ic:outline-search" class="text-2xl text-gray-400 absolute left-2 bottom-3 md:bottom-2"/>
        <input type="text" placeholder="WHAT ARE YOU LOOKING FOR" class="input input-bordered max-h-12 md:max-h-10 w-full max-w-full px-10" />
    </div>
</template>