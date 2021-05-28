import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';

import UsersList from './UsersList';

const query = gql`
	query {
	  users {
	    id
	    name
	  }
	}
`

const Index = ({ users } ) => {
  return (
    <Query    // <- Wrapping the main component with Query component from react-apollo
      query={ query }
      fetchPolicy={ 'cache-and-network' }
    >
      {({ loading, data, error }) => {
        if(error) {
          return (<div>Error..</div>);
        }
        return (
          <div>
            <h1>My Authors </h1>
            <UsersList users={data ? data.users: []} />
          </div>
        );
      }}
    </Query>
  );
};

export default withData(Index)