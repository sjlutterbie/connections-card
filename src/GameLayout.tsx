import './GameLayout.css';
import { Tile } from './Tile';

const SET_1 = ['TAPS', 'UNICORN', 'IRONS', 'BACON'];
const SET_2 = ['PRESSES', 'PHOENIX', 'CAR', 'BUGLER'];
const SET_3 = ['BRIDGES', 'AFRICA', 'TOAST', 'WASHINGTON'];
const SET_4 = ['GRITS', 'HITS', 'HASH', 'CLICKS'];

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
