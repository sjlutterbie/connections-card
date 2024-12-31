import { useGameContext } from './game.context';

export function GameControls() {
  const {
    shuffleItems,
    canDeselectItems,
    canSubmit,
    deselectAllItems,
    handleGuess,
    selectedItems,
  } = useGameContext();

  return (
    <>
      <button className="game-control" onClick={shuffleItems}>
        Shuffle
      </button>
      <button
        className="game-control"
        disabled={!canDeselectItems}
        onClick={deselectAllItems}>
        Deselect All
      </button>
      <button
        className="game-control submit"
        disabled={!canSubmit}
        onClick={() => handleGuess(selectedItems)}>
        Submit
      </button>
    </>
  );
}
