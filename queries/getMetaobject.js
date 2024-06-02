export const GET_METAOBJECT = `
    query($handle: String!, $type: String!) {
        metaobject(handle: {handle: $handle, type: $type}) {
            fields{
                key
                reference {
                    ... on GenericFile {
                    id
                    url
                    }
                    ... on MediaImage {
                    id
                    image {
                        src
                    }
                    }
                    ... on Video {
                    id
                    sources {
                        url
                    }
                    }
                }
                value
                type
            }
            handle
            id
        }
        }
`