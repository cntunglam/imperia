export const LOGIN = `
  mutation Login($email: String!, $password: String!) {
    customerAccessTokenCreate(input: {email: "", password: ""}) {
      customerAccessToken
      userErrors {
        field
        message
      }
    }
}`

export const LOGOUT = `
  mutation Logout ($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors {
      field
      message
    }
  }
  }
`
export const CREATE_CUSTOMER = `
  mutation createCustomer ($email: String!, $password: String!, $firstName: String!, $lastName: String!, $phone: String!, $acceptsMarketing: Boolean!) {
    customerCreate(
      input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, phone: $phone, acceptsMarketing: $acceptsMarketing}
    ) {
      userErrors {
        field
        message
      }
    }
  }
`