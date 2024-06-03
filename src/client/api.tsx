'use client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';


export const ApiProvider = ({ children }) => {

  const [client] = useState(new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
    uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
  })
)


  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}