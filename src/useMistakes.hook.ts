import { useCallback, useState } from 'react';

export function useMistakes() {
  const [mistakesRemaining, setMistakes] = useState(4);
  const recordMistake = useCallback(
    () => setMistakes((prev) => prev - 1),
    [setMistakes],
  );

  return {
    mistakesRemaining,
    recordMistake,
  };
}