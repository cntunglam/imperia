<script setup>
useSeoMeta({
  title: "Imperia",
});
import { ref } from 'vue';
import { GET_METAOBJECT } from '~/queries/getMetaobject';

// Fetch products data
const { $shopifyClient } = useNuxtApp();
const loading = ref(true);
const content = ref([]);
const videoUrl = ref("");
const lastestNewsImage = ref("");
const lastestNewsLink = ref("");
const lastestNewsTitle = ref("");
onMounted(async () => {
  try {
    const {data} = await $shopifyClient.request(GET_METAOBJECT,{
          variables: {
            handle: "home-page",
            type: "homepage"
          }
    });
    
    content.value = data.metaobject.fields;
    videoUrl.value = content.value.find((obj) => obj.key === "hero_video").reference.sources[0].url;
    lastestNewsImage.value = content.value.find((obj) => obj.key === "feature_image").reference.image.src;
    lastestNewsTitle.value = content.value.find((obj) => obj.key === "feature_title").value;
    console.log(lastestNewsImage.value, lastestNewsTitle.value)
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});

</script>
<template>
  <main class="pb-1">
    <Hero :videoUrl="videoUrl" />
    <LatestNews :backgroundImg="lastestNewsImage" :heading="lastestNewsTitle" />
    <NewArrival/>
    <Collection />
  </main>
</template>
