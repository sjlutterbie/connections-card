import './App.css';
import lightBulbSvg from './assets/light_bulb.svg';
import chartSvg from './assets/chart.svg';
import questionSvg from './assets/question.svg';
import { useGameContext } from './game.context';
import { FoundSet } from './FoundSet';
import { Tile } from './Tile';
import { Mistakes } from './Mistakes';
import { GameControls } from './GameControls';

function App() {
  const { availableItems, foundSets } = useGameContext();
  return (
    <>
      <div id="section-header">
        <div id="logo-character">S</div>
        <div id="divider" />
        <div id="games">Games</div>
      </div>
      <div id="section-title">
        <span id="title">Happy Birthday!</span>
        <span id="date">January 31, 2025</span>
      </div>
      <div id="section-icons">
        <img src={lightBulbSvg} />
        <img src={chartSvg} />
        <img src={questionSvg} />
      </div>
      <div id="section-instructions">Create four groups of four!</div>
      <div id="section-game">
        {foundSets.length ? (
          <div id="section-found-sets">
            {foundSets.map((set) => {
              const { category } = set;
              return <FoundSet {...set} key={category} />;
            })}
          </div>
        ) : null}
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
      </div>
    </>
  );
}

export default App;
