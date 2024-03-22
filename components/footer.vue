<template>
  <footer class="footer mt-10 space-y-0 md:block bg-[#f2f2f2]">
    <div class="justify-center space-y-4 mx-auto py-1 pt-12 md:pb-12">
      <div class="mx-auto">
        <a href="/">
          <img class="md:h-[28px] h-[22px] w-auto" src="/img/logo.svg" />
        </a>
      </div>
      <SocialIcon />
    </div>
    <div class="py-0">
      <Newsletter />
    </div>
    <div class="mx-auto space-y-4">
      <div class="mx-auto">
        <Payment />
      </div>
      <div class="mx-auto">
        <ul
          class="max-w-xl text-[12px] flex flex-col md:flex-row text-center py-2 md:space-x-24 uppercase"
        >
          <li><a href="">Client Services</a></li>
          <li><a href="">Terms Of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="mx-auto">
      <div class="mx-auto">
        <Modal
          name="footerModal"
          action="footerModal.showModal()"
          modalStyle="modal-box w-full min-h-screen md:w-fit md:min-h-fit rounded-none"
          buttonText="© 2023 Imperia"
          buttonStyle="hover:cursor-help hover:bg-transparent"
          boxHeader="Copyright Information"
        >
        <form method="dialog">
          <button class="btn btn-sm btn-circle bg-transparent border-none hover:bg-inherit absolute right-4 top-1">✕</button>
        </form>
          <p class="py-12 uppercase">
            All contents of this website are property of Imperia. No part of
            this site, including all text and images, may be reproduced in any
            form without prior written consent of Imperia.
          </p>
        </Modal>  
      </div>
    </div>
  </footer>
</template>
