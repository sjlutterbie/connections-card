import './App.css';
import { GameLayout } from './GameLayout';

function App() {
  return (
    <>
      <div id="section-header">Page header</div>
      <div id="section-title">Page title</div>
      <div id="section-icons">icons</div>
      <div id="section-game">
        <GameLayout />
      </div>
    </>
  );
}

export default App;
