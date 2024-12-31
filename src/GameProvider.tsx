import { ReactNode, useCallback, useMemo } from 'react';
import { gameContext } from './game.context';
import { useMistakes } from './useMistakes.hook';
import { useAnswerSets } from './useAnswerSets.hook';
import { useItems } from './useItems.hook';
import { useGuesses } from './useGuesses.hook';
import { useSnackbar } from './snackbar.context';

type Props = {
  children: ReactNode;
};

export function GameProvider(props: Props) {
  const { children } = props;

  const { openSnackbar } = useSnackbar();

  const { mistakesRemaining, recordMistake } = useMistakes();
  const { isAlreadyGuessed } = useGuesses();
  const { foundSets, isCorrectGuess, isOffByOne, openSets } = useAnswerSets();
  const {
    availableItems,
    canDeselectItems,
    canSelectItem,
    canSubmit,
    deselectAllItems,
    isItemSelected,
    selectedItems,
    shuffleItems,
    toggleItem,
  } = useItems();

  const isVictorious = useMemo(() => {
    if (openSets.length !== 0) {
      return false;
    }
    if (foundSets.length !== 4) {
      throw new Error('Set mistmach');
    }
    return true;
  }, [foundSets.length, openSets.length]);

  const handleToggleItem = useCallback(
    (item: string) => {
      toggleItem(item);
    },
    [toggleItem],
  );

  const handleGuess = useCallback(
    (guess: string[]) => {
      if (isAlreadyGuessed(guess)) {
        openSnackbar('Already guessed!');
        return;
      }
      if (isCorrectGuess(guess)) {
        return;
      }
      if (isVictorious) {
        return;
      }

      recordMistake();

      if (isOffByOne(guess)) {
        openSnackbar('One away...');
        return;
      }
    },
    [
      isAlreadyGuessed,
      isCorrectGuess,
      isOffByOne,
      isVictorious,
      openSnackbar,
      recordMistake,
    ],
  );

  const value = useMemo(
    () => ({
      availableItems,
      canDeselectItems,
      canSelectItem,
      canSubmit,
      deselectAllItems,
      foundSets,
      handleGuess,
      handleToggleItem,
      isItemSelected,
      mistakesRemaining,
      selectedItems,
      shuffleItems,
    }),
    [
      availableItems,
      canDeselectItems,
      canSelectItem,
      canSubmit,
      deselectAllItems,
      foundSets,
      handleGuess,
      handleToggleItem,
      isItemSelected,
      mistakesRemaining,
      selectedItems,
      shuffleItems,
    ],
  );

  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
}
