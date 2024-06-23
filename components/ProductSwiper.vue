<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

</script>
<style>
  .swiper-pagination {
    position: initial ;
    margin: 10px auto;
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
    max-height: 90vh;
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
      :modules="[SwiperMousewheel, SwiperPagination, SwiperController	]"
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
      <SwiperSlide v-for="image in images" :key="image.src" class="">
        <img :src="image.src" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
  