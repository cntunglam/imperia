<script setup>
import { GET_METAOBJECT } from "~/queries/getMetaobject";
import { convertSchemaToHtml } from '@thebeyondgroup/shopify-rich-text-renderer'
const loading = ref(true);
const { $shopifyClient } = useNuxtApp();
const bodyText = ref("");
const content = ref([]);

onMounted(async () => {
  try {
    const { data } = await $shopifyClient.request(GET_METAOBJECT, {
      variables: {
        handle: "terms-of-service",
        type: "custom_page",
      },
    });
    content.value = data.metaobject.fields;
    bodyText.value = convertSchemaToHtml( content.value.find((obj) => obj.key === "content").value)
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
<style scope>
  h2 {
    @apply py-4
  }
</style>

<template>
  <main class="_body space-y-8">
    <div>
      <h2 class="text-[20px] uppercase text-center">create an account</h2>
    </div>
    <div class="mx-auto text-center">
      <p class="text-center">
        Create an account and benefit from order delivery updates and return
        management as well as personalized recommendations
      </p>
    </div>

    <div>
      <div class="form-control pb-8 pt-4 w-full mx-auto uppercase">
        <div class="space-y-4">
          <select
            class="select select-bordered w-full md:text-[10px] text-[12px] uppercase border-black rounded-none"
          >
            >
            <option disabled selected>Title</option>
            <option>Mr</option>
            <option>Miss, Mrs, Ms</option>
            <option>Mx</option>
            <option>I'd rather not say</option>
          </select>
          <input
            type="text"
            placeholder="First Name"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
          <date-picker />
          <input
            type="email"
            placeholder="Email Address"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
          <countries-selector />
          <input
            type="text"
            placeholder="Province/State/County"
            class="w-full md:text-[10px] text-[12px] input uppercase input-bordered border-1 border-black focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-600"
          />
        </div>
        <ScrollableContent>
          <div v-html="bodyText"></div>
        </ScrollableContent>
        <div class="justify-between space-y-4 pt-4">
          <div>
            <input
              type="checkbox"
              id="checkbox-1"
              class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"
            />
            <label for="checkbox-1" class="text-[12px] px-2"
              >I agree to the <a href="/page/privacy-policy" class="font-bold">Privacy Policy</a> and to the<a class="font-bold" href="/page/terms-of-service"> Terms of use</a>. *</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox-2"
              class="align-middle appearance-none w-4 h-4 border border-black rounded-none checked:text-black"
            />
            <label for="checkbox-2" class="text-[12px] px-2"
              >I would like to receive information and updates about imperia's
              new activities, exclusive products, tailored services (including
              through phone, sms, mms and instant messaging applications), and
              to have a personalized client experience based on my interests. By
              agreeing to receive customized information and updates, you
              authorize imperia to deliver marketing calls and messages to you,
              including an automatic telephone dialing system or artificial or
              prerecorded voice, to the phone number provided on your profile.
              Imperia does not require you to agree to receive such calls or
              messages as a condition of purchasing any products or
              services.</label
            >
          </div>
        </div>
        <button class="btn btn-primary">create my account</button>
        <p class="text-center py-1">
          already have an account? <a class="underline" href="/login">Log in</a>
        </p>
      </div>
    </div>
  </main>
</template>
