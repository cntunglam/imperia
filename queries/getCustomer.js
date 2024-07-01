export const GET_CUSTOMER = `
query ($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    firstName
    lastName
    email
    numberOfOrders
    orders(first: 50) {
      nodes {
        canceledAt
        name
        orderNumber
        totalPriceV2 {
          amount
          currencyCode
        }
      }
    }
    addresses(first: 10) {
      nodes {
        address1
        city
        company
        country
        countryCode
        firstName
        lastName
        id
        name
        phone
      }
    }
  }
}
`;
