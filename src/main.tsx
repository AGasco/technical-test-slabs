import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import FlightProvider from './context/FlightProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <FlightProvider>
      <App />
    </FlightProvider>
  </StrictMode>
);
