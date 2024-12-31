import { useGameContext } from './game.context';

export function GameControls() {
  const { shuffleItems, canDeselectItems, deselectAllItems } = useGameContext();
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
      <button className="game-control">Submit</button>
    </>
  );
}
