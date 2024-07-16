/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingAnimation from './Components/Animation/LoadingAnimation';


const queryClient = new QueryClient();

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

