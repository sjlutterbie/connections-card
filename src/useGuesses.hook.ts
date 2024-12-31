import { useCallback, useRef } from 'react';
import { normalizeStringArray } from './utils';

export function useGuesses() {
  const guesses = useRef<Set<string>>(new Set());

  const isAlreadyGuessed = useCallback((guess: string[]) => {
    const normalizedGuess = normalizeStringArray(guess);
    if (guesses.current.has(normalizedGuess)) {
      return true;
    }
    guesses.current.add(normalizedGuess);
    return false;
  }, []);

  return {
    isAlreadyGuessed,
  };
}
