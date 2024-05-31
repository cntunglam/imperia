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
                selectedOptions {
                    name
                    value
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

export const GET_PRODUCT_BY_HANDLE = `
query($handle: String!) {
  productByHandle(handle: $handle) {
    availableForSale
    descriptionHtml
    handle
    id
    title
    trackingParameters
    totalInventory
    updatedAt
    images(first: 10) {
        edges {
            node {
                src
            }
        }
    }
    variants(first: 10) {
      nodes {
        availableForSale
                      price {
                amount
                currencyCode
              }
                selectedOptions {
                    name
                    value
            }

        image {
          src
        }
        id
      }
    }
  }
}
`;
