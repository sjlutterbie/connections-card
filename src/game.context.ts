import { createContext, useContext } from 'react';

export type GameContext = {
  availableItems: string[];
  shuffleItems: () => void;
};

export const gameContext = createContext<GameContext | undefined>(undefined);

export function useGameContext() {
  const context = useContext(gameContext);

  if (!context) {
    throw new Error('Did you forget your GameProvider?');
  }
  return context;
}

/**
 * I have four sets of four answers.
 * - Each set has a name, and a difficulty/color.
 * - A set is either solved or not.
 * - If a set is solved, its answers are no longer available.
 *
 * Some are "available", not.
 * I should be able to shuffle the available ones.
 * Each answer carries its isSelected state.
 * If four are selected, I cannot select a fifth.
 * I can unselect all of them.
 */
