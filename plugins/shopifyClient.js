// plugins/shopifyClient.js
import {createStorefrontApiClient} from '@shopify/storefront-api-client';
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const shopifyClient = createStorefrontApiClient({
    storeDomain: config.public.shopifyStoreDomain,
    apiVersion: '2024-04',
    publicAccessToken: config.public.shopifyStorefrontAccessToken,
  });
    console.log(shopifyClient); // Check if the client is created correctly
  return {
    provide: {
      shopifyClient
    }
  }
});


