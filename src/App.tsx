import './App.css';
import { GameLayout } from './GameLayout';
import { GameProvider } from './GameProvider';
import { SnackbarProvider } from './SnackbarProvider';

function App() {
  return (
    <SnackbarProvider>
      <GameProvider>
        <div id="section-header">Page header</div>
        <div id="section-title">Page title</div>
        <div id="section-icons">icons</div>
        <div id="section-game">
          <GameLayout />
        </div>
      </GameProvider>
    </SnackbarProvider>
  );
}

export default App;
