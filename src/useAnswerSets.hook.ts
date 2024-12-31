import { useCallback, useState } from 'react';
import { AnswerSet } from './game.types';
import { normalizeStringArray } from './utils';
import { INITIAL_SETS } from './constants';

export function useAnswerSets() {
  const [openSets, setOpenSets] = useState<AnswerSet[]>(INITIAL_SETS);
  const [foundSets, setFoundSets] = useState<AnswerSet[]>([]);

  const handleCorrectGuess = useCallback((correctAnswer: AnswerSet) => {
    setFoundSets((prev) => [...prev, correctAnswer]);
    setOpenSets((prev) =>
      prev.filter((answerSet) => answerSet.category !== correctAnswer.category),
    );
  }, []);

  const isCorrectGuess = useCallback(
    (guess: string[]) => {
      const normalizedGuess = normalizeStringArray(guess);
      console.log('Guess', normalizedGuess);
      for (const answerSet of openSets) {
        const normalizedItems = normalizeStringArray(answerSet.items);
        console.log('Comparator', normalizedItems);
        if (normalizedGuess === normalizedItems) {
          handleCorrectGuess(answerSet);
          return true;
        }
      }
      return false;
    },
    [handleCorrectGuess, openSets],
  );

  const isOffByOne = useCallback(
    (guess: string[]) => {
      for (const answerSet of openSets) {
        let matches = 0;
        for (const item of guess) {
          if (answerSet.items.includes(item)) {
            matches += 1;
          }
        }
        if (matches === 3) {
          return true;
        }
      }
      return false;
    },
    [openSets],
  );

  return {
    foundSets,
    isCorrectGuess,
    isOffByOne,
    openSets,
    setFoundSets,
    setOpenSets,
  };
}
