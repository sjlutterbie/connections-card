import { FoundSet } from './FoundSet';
import { useGameContext } from './game.context';
import { GameControls } from './GameControls';
import './GameLayout.css';
import { Mistakes } from './Mistakes';
import { Tile } from './Tile';

export function GameLayout() {
  const { availableItems, foundSets } = useGameContext();

  return (
    <>
      <div id="section-instructions">Create four groups of four!</div>
      <div id="section-found-sets">
        {foundSets.map((set) => {
          const { category } = set;
          return <FoundSet {...set} key={category} />;
        })}
      </div>
      <div id="section-tiles">
        {availableItems.map((tile) => {
          return <Tile key={tile} label={tile} />;
        })}
      </div>
      <div id="section-mistakes">
        Mistakes Remaining:
        <Mistakes />
      </div>
      <div id="section-controls">
        <GameControls />
      </div>
    </>
  );
}
