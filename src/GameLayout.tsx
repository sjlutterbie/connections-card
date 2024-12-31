import { useGameContext } from './game.context';
import { GameControls } from './GameControls';
import './GameLayout.css';
import { Tile } from './Tile';

export function GameLayout() {
  const { availableItems } = useGameContext();

  return (
    <>
      <div id="section-instructions">Create four groups of four!</div>
      <div id="section-tiles">
        {availableItems.map((tile) => {
          return <Tile key={tile} label={tile} />;
        })}
      </div>
      <div id="section-mistakes">Mistakes remaining: TODO</div>
      <div id="section-controls">
        <GameControls />
      </div>
    </>
  );
}
