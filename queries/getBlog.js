export const GET_BLOGS = `
    query {
        blogs(first: 20) {
            nodes {
            articles(first: 20) {
                nodes {
                contentHtml
                image {
                    src
                }
                id
                handle
                title
                }
            }
            }
        } 
    }
`;
