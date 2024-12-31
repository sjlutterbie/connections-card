import './App.css';
import { GameLayout } from './GameLayout';
import { GameProvider } from './GameProvider';

function App() {
  return (
    <GameProvider>
      <div id="section-header">Page header</div>
      <div id="section-title">Page title</div>
      <div id="section-icons">icons</div>
      <div id="section-game">
        <GameLayout />
      </div>
    </GameProvider>
  );
}

export default App;
