import { useGameContext } from './game.context';

export function GameControls() {
  const { shuffleItems } = useGameContext();
  return (
    <>
      <button className="game-control" onClick={shuffleItems}>
        Shuffle
      </button>
      <button className="game-control">Deselect All</button>
      <button className="game-control">Submit</button>
    </>
  );
}
