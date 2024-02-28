<script setup>
</script>
<style>
  .swiper-pagination {
    position: initial ;
    margin: 0px auto;
  }

  .swiper-pagination-bullet {
    background-color: #7a7474;
    border-radius: 0px;
    height: 1px;
    width: 20px;
  }

  .swiper-pagination-bullet-active {
    background-color: #494949 !important;
    width: 40px;
  }
  
  ._full-height {
    max-height: 95vh;
  }

  @media screen and (min-width: 768px){
    .swiper-pagination {
      display: none;
    }
  }

</style>
<template>
  <div id="swiper" class="w-full">
    <Swiper
      class="_full-height"
      :modules="[SwiperMousewheel, SwiperPagination	]"
      :edge-swipe-detection="true"
      :breakpoints="{
        768: {
          direction: 'vertical',
        },
      }"
      :loop="true"
      :pagination="{
        enabled: true,
        type: 'bullets',
        clickable: true,
      }"
      :mousewheel="{
        eventsTarget: '#swiper',
      }"
    >
      <SwiperSlide class="">
        <img src="/img/products/short/flatback.png"/>
      </SwiperSlide>
      <SwiperSlide class="">
        <img src="/img/products/short/flatfront.png"/>
      </SwiperSlide>
      <SwiperSlide class="">
        <img src="/img/products/short/closeupshorts.jpg"/>
      </SwiperSlide>
      <SwiperSlide class="">
        <img src="/img/products/short/modelfront.jpg"/>
      </SwiperSlide>
      <SwiperSlide class="">
        <img src="/img/products/short/modelmain.jpg"/>
      </SwiperSlide>
      <SwiperSlide class="">
        <img src="/img/products/short/1.jpg"/>
      </SwiperSlide>
      <SwiperSlide class="">
        <img src="/img/products/short/2.jpg"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
  