import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'http://localhost:8080/v1/graphql', // <- Configure GraphQL Server URL (must be absolute)
    headers: {
        'x-hasura-admin-secret': process.env.HASURA_SECRET
    }
  })
}

export default withData(config)
