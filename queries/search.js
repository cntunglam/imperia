export const SEARCH_QUERY = `
    query searchProducts($query: String!, $first: Int) {
        search(query: $query, first: $first, types: PRODUCT) {
            edges {
            node {
                ... on Product {
                id
                title
                image {
                    url
                }
            }
            }
        }
}
`;
