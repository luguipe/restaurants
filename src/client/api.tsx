'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type LayoutProps = {
  children: ReactNode;
};

export const ApiProvider = ({ children }: LayoutProps) => {
  const [client] = useState(
    new ApolloClient({
      uri: 'http://localhost:3000/api/graphql',
      cache: new InMemoryCache(),
    })
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
