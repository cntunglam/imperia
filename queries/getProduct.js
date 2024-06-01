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
    seo {
      description
      title
    }
    metafields(identifiers: [
      {key: "short_description", namespace: "custom"},
      {key: "payment", namespace: "custom"},
      {key: "free_shipping_free_returns", namespace: "custom"}
      {key: "product_sustainability", namespace: "custom"}
      {key: "stylewith", namespace: "custom"}
    ]) {
        id
        key
        value
    }
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

export const GET_PRODUCTS_BY_ID = `
  query($ids: [ID!]!  ) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        handle
        description
        availableForSale
        images(first: 10) {
          edges {
            node {
              src
            }
          }
        }
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
      }
    }
  }
`;