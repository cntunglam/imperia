export const SEARCH_QUERY = `
    query searchProducts($query: String!, $first: Int) {
        search(query: $query, first: $first, types: PRODUCT) {
            edges {
            node {
                ... on Product {
                id
                title
                handle
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
}
`;
