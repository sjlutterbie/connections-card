import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import { SnackbarProvider } from './SnackbarProvider.tsx';
import { GameProvider } from './GameProvider.tsx';

createRoot(document.getElementById('app-root')!).render(
  <StrictMode>
    <SnackbarProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </SnackbarProvider>
  </StrictMode>,
);
