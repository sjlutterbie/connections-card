import './App.css';
import { GameLayout } from './GameLayout';
import { GameProvider } from './GameProvider';
import { SnackbarProvider } from './SnackbarProvider';
import lightBulbSvg from './assets/light_bulb.svg';
import chartSvg from './assets/chart.svg';
import questionSvg from './assets/question.svg';

function App() {
  return (
    <SnackbarProvider>
      <GameProvider>
        <div id="section-header">
          <span className="logo-character">S</span>
          <div className="divider" />
          <span className="games">Games</span>
        </div>
        <div id="section-title">
          <span className="title">Happy Birthday!</span>
          <span className="date">January 31, 2025</span>
        </div>
        <div id="section-icons">
          <img src={lightBulbSvg} />
          <img src={chartSvg} />
          <img src={questionSvg} />
        </div>
        <div id="section-game">
          <GameLayout />
        </div>
      </GameProvider>
    </SnackbarProvider>
  );
}

export default App;
