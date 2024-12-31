import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { gameContext } from './game.context';
import { AnswerSet } from './game.types';

type Props = PropsWithChildren<unknown>;

const INITIAL_SETS: AnswerSet[] = [
  {
    category: 'Category 1',
    color: 'yellow',
    items: ['TAPS', 'UNICORN', 'IRONS', 'BACON'],
  },
  {
    category: 'Category 1',
    color: 'green',
    items: ['PRESSES', 'PHOENIX', 'CAR', 'BUGLER'],
  },
  {
    category: 'Category 1',
    color: 'blue',
    items: ['BRIDGES', 'AFRICA', 'TOAST', 'WASHINGTON'],
  },
  {
    category: 'Category 1',
    color: 'purple',
    items: ['GRITS', 'HITS', 'HASH', 'CLICKS'],
  },
];

export function GameProvider(props: Props) {
  const { children } = props;

  const [openSets, setOpenSets] = useState<AnswerSet[]>(INITIAL_SETS);
  // const [solvedSets, setSolvedSets] = useState<AnswerSet[]>([]);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const canDeselectItems = !!selectedItems.length;
  const canSelectItem = selectedItems.length < 4;

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

  const [availableItems, setAvailableItems] = useState<string[]>(
    shuffleArray(openSets.flatMap((set) => set.items)),
  );

  const shuffleItems = useCallback(() => {
    const shuffledItems = shuffleArray(availableItems);
    setAvailableItems(shuffledItems);
  }, [availableItems]);

  const value = useMemo(
    () => ({
      availableItems,
      canDeselectItems,
      canSelectItem,
      deselectAllItems,
      isItemSelected,
      shuffleItems,
      toggleItem,
    }),
    [
      availableItems,
      canDeselectItems,
      canSelectItem,
      deselectAllItems,
      isItemSelected,
      shuffleItems,
      toggleItem,
    ],
  );

  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
}

function shuffleArray<T>(inputArray: T[]): T[] {
  const localArray = [...inputArray];
  const shuffledItems = [];

  while (localArray.length) {
    const index = Math.floor(Math.random() * localArray.length);
    const [item] = localArray.splice(index, 1);
    shuffledItems.push(item);
  }

  return shuffledItems;
}
