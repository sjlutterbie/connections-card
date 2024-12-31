import { useCallback, useMemo, useState } from 'react';
import { INITIAL_ITEMS } from './constants';
import { shuffleArray } from './utils';

export function useItems() {
  const [availableItems, setAvailableItems] = useState<string[]>(
    shuffleArray(INITIAL_ITEMS),
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
    [selectedItems, setSelectedItems],
  );

  const shuffleItems = useCallback(() => {
    const shuffledItems = shuffleArray(availableItems);
    setAvailableItems(shuffledItems);
  }, [availableItems]);

  const removeItems = useCallback((itemsToRemove: string[]) => {
    setAvailableItems((prev) =>
      prev.filter((item) => !itemsToRemove.includes(item)),
    );
  }, []);

  return {
    availableItems,
    canDeselectItems,
    canSelectItem,
    canSubmit,
    deselectAllItems,
    isItemSelected,
    removeItems,
    selectedItems,
    shuffleItems,
    toggleItem,
  };
}
