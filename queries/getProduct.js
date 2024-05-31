export const GET_PRODUCTS = `
  query($number: Int) {
    products(first: $number) {
      edges {
        node {
          id
          title
          handle
          description
          availableForSale
          variants(first: 10) {
            nodes {
              price {
                amount
                currencyCode
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
`;
