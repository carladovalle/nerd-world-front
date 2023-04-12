import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>      
        <App />
        <GlobalStyle />
        <ToastContainer />         
      </QueryClientProvider>
  </React.StrictMode>
);