export const GET_COLLECTION = `
    query($handle: String!) {
        collectionByHandle(handle: $handle) {
            title
            products(first: 10) {
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
        }
`

export const GET_ALL_COLLECTIONS = `
    query {
        collections(first: 250) {
            edges {
                node {
                    id
                    title
                    handle
                    image {
                        src
                    }
                    metafields(identifiers: {namespace: "custom", key: "isbigimage"}) {
                        value
                    }   
                }
            }
        }
    }
`;