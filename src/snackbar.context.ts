import { createContext, useContext } from 'react';

type SnackbarContext = {
  openSnackbar: (message: string) => void;
};

export const snackbarContext = createContext<SnackbarContext | undefined>(
  undefined,
);

export function useSnackbar() {
  const context = useContext(snackbarContext);
  if (!context) {
    throw new Error('You forgot to use SnackbarProvider!');
  }

  return context;
}
