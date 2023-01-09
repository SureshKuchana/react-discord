import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import customTheme from './utils/theme';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <ColorModeScript />
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
