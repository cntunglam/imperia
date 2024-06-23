export const CREAT_CART = `
    mutation cartCreate {
    cartCreate {
        cart {
        id
        checkoutUrl
        lines(first: 5) {
            edges {
            node {
                merchandise {
                ... on ProductVariant {
                    title
                }
                }
                quantity
            }
            }
        }
        }
    }
    }

`

export const ADD_TO_CART = `
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
        id
    }
    userErrors {
      field
      message
    }
  }
}`;