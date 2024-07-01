import { defineStore } from "pinia";
import { GET_CUSTOMER } from "~/queries/getCustomer";

export const useAuthenticated = defineStore("authenticate", {
  state: () => ({
    accessToken: "",
    isAuthenticated: false,
  }),
  actions: {
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },

    setIsAuthenticated(isAuthenticated) {
      this.isAuthenticated = isAuthenticated;
    },
    async fetchCart(accessToken) {
      try {
        const { $shopifyClient } = useNuxtApp(); // Ensure this is properly injected
        if (!$shopifyClient) {
          throw new Error("$shopifyClient is not available");
        }

        const response = await $shopifyClient.request(GET_CUSTOMER, {
          variables: {
            customerAccessToken: accessToken,
          },
        });
        this.setIsAuthenticated(true);
        if (!response || !response.data || !response.data.cart) {
          throw new Error("Invalid response from Shopify API");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
