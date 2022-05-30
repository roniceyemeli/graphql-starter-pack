import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
	query GetUsers {
		users {
			id
			name
			age
			username
      nationality
		}
	}
`;

const DisplayData = () => {
	const {data, loading, error} = useQuery(QUERY_ALL_USERS);
  if (loading) {
    return <h1>your Data is loading</h1>
  }
  if(data){
    console.log(data)
  }
  if(error){
    console.log(error)
  }
	return <div>
    {
      data && data.users.map((user,index) => {
        return <div key={index}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.name}</h1>
          <h1>Pseudo: {user.name}</h1>
          <h1>Nationality: {user.nationality}</h1>
        </div>
      })
    }
  </div>;
};

export default DisplayData;
