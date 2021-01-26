import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import store from 'redux/store';
import client from 'graphql/client';

const AppProvider = ({ children }) => (
  <Provider store={store}>
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </Provider>
);

export default AppProvider;
