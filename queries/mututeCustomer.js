export const LOGIN = `
  mutation Login($email: String!, $password: String!) {
    customerAccessTokenCreate(input: {email: $email, password: $password}) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
      userErrors {
        field
        message
      }
    }
}`;

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
`;
export const CREATE_CUSTOMER = `
  mutation createCustomer ($email: String!, $password: String!, $firstName: String!, $lastName: String!, $acceptsMarketing: Boolean!) {
    customerCreate(
      input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, acceptsMarketing: $acceptsMarketing}
    ) {
      userErrors {
        field
        message
      }
    }
  }
`;
export const RESET_PASSWORD = `
mutation resetPassword($email: String!) {
  customerRecover(email: $email) {
    userErrors {
      field
      message
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`;

export const UPDATE_NEW_PASSWORD = `
mutation updateNwwPassword($password: String!, $resetUrl: URL!) {
  customerResetByUrl(password: $password, resetUrl: $resetUrl) {
    customerUserErrors {
      code
      field
      message
    }  
      userErrors {  
        field
        message
      }
  }
}
`;
