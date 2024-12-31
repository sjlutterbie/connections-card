import './GameLayout.css';
import { Tile } from './Tile';

const SET_1 = ['ABE', 'ACT', 'ADD', 'AFT'];
const SET_2 = ['BAG', 'BED', 'BIN', 'BOT'];
const SET_3 = ['CAV', 'CEL', 'CON', 'CUB'];
const SET_4 = ['DAD', 'DEF', 'DOG', 'DUB'];

const TILES = [...SET_1, ...SET_2, ...SET_3, ...SET_4];

export function GameLayout() {
  return (
    <>
      <div id="section-instructions">Create four groups of four!</div>
      <div id="section-tiles">
        {TILES.map((tile) => {
          return <Tile key={tile} label={tile} />;
        })}
      </div>
      <div>Mistakes remaining</div>
      <div>Buttons</div>
    </>
  );
}
