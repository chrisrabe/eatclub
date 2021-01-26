import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'material-ui-snackbar-provider';
import store from 'redux/store';
import client from 'graphql/client';

// third party library wrapper

const AppProvider = ({ children }) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 2000 }}>
        {children}
      </SnackbarProvider>
    </ApolloProvider>
  </Provider>
);

export default AppProvider;
