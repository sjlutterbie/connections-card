import { ReactNode, useCallback, useMemo, useState } from 'react';
import { snackbarContext } from './snackbar.context';
import { Snackbar } from './Snackbar';

type Props = {
  children: ReactNode;
};

export function SnackbarProvider(props: Props) {
  const { children } = props;

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const openSnackbar = useCallback((message: string) => {
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  const value = useMemo(() => ({ openSnackbar }), [openSnackbar]);

  return (
    <snackbarContext.Provider value={value}>
      <Snackbar message={message} visible={visible} />
      {children}
    </snackbarContext.Provider>
  );
}
