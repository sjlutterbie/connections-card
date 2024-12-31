import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { gameContext } from './game.context';
import { AnswerSet, SubmissionOutcome } from './game.types';
import { checkSubmission, shuffleArray } from './utils';

const INITIAL_SETS: AnswerSet[] = [
  {
    category: 'WORDS BEFORE AN ADDRESSEE',
    color: 'blue',
    items: ['ATTENTION', 'DEAR', 'FOR', 'TO'],
  },
  {
    category: 'MOVE QUICKLY',
    color: 'yellow',
    items: ['BOLT', 'DART', 'DASH', 'FLY'],
  },
  {
    category: 'FUN TIME',
    color: 'green',
    items: ['BALL', 'BLAST', 'KICK', 'THRILL'],
  },
  {
    category: 'NAME ___',
    color: 'purple',
    items: ['BRAND', 'DROP', 'GAME', 'NAMES'],
  },
];

type Props = PropsWithChildren<unknown>;

export function GameProvider(props: Props) {
  const { children } = props;

  const [mistakesRemaining, setMistakes] = useState(4);
  const recordMistake = useCallback(
    () => setMistakes((prev) => prev - 1),
    [setMistakes],
  );

  const [openSets, setOpenSets] = useState<AnswerSet[]>(INITIAL_SETS);
  // const [foundSets, setFoundSets] = useState<AnswerSet[]>([]);
  const [foundSets, setFoundSets] = useState<AnswerSet[]>(INITIAL_SETS);

  const [availableItems, setAvailableItems] = useState<string[]>(
    shuffleArray(openSets.flatMap((set) => set.items)),
  );

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const { canDeselectItems, canSelectItem, canSubmit } = useMemo(
    () => ({
      canDeselectItems: !!selectedItems.length,
      canSelectItem: selectedItems.length < 4,
      canSubmit: selectedItems.length === 4,
    }),
    [selectedItems],
  );

  const deselectAllItems = useCallback(
    () => setSelectedItems([]),
    [setSelectedItems],
  );

  const isItemSelected = useCallback(
    (targetItem: string) => selectedItems.includes(targetItem),
    [selectedItems],
  );

  const toggleItem = useCallback(
    (targetItem: string) => {
      if (selectedItems.includes(targetItem)) {
        setSelectedItems(selectedItems.filter((item) => item !== targetItem));
        return;
      }
      setSelectedItems([...selectedItems, targetItem]);
    },
    [selectedItems],
  );

  const shuffleItems = useCallback(() => {
    const shuffledItems = shuffleArray(availableItems);
    setAvailableItems(shuffledItems);
  }, [availableItems]);

  const handleSubmission = useCallback(
    (submission: string[]) => {
      let outcome = SubmissionOutcome.Incorrect;
      for (const setToCheck of openSets) {
        outcome = checkSubmission(submission, setToCheck);
        if (outcome === SubmissionOutcome.Correct) {
          setFoundSets((prev) => [...prev, setToCheck]);
          setOpenSets((prev) =>
            prev.filter((set) => set.category !== setToCheck.category),
          );
          break;
        }
      }
      setSelectedItems([]);
      if (outcome === SubmissionOutcome.Correct) {
        return;
      }
      recordMistake();
      // TODO:
    },
    [openSets, recordMistake, setSelectedItems],
  );

  const value = useMemo(
    () => ({
      availableItems,
      canDeselectItems,
      canSelectItem,
      canSubmit,
      deselectAllItems,
      foundSets,
      handleSubmission,
      isItemSelected,
      mistakesRemaining,
      selectedItems,
      shuffleItems,
      toggleItem,
    }),
    [
      availableItems,
      canDeselectItems,
      canSelectItem,
      canSubmit,
      deselectAllItems,
      foundSets,
      handleSubmission,
      isItemSelected,
      mistakesRemaining,
      selectedItems,
      shuffleItems,
      toggleItem,
    ],
  );

  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
}
