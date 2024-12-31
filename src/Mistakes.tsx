import { useMemo } from 'react';
import { useGameContext } from './game.context';

export function Mistakes() {
  const { mistakesRemaining } = useGameContext();
  const mistakes = useMemo(() => {
    const mistakes = [];
    for (let i = 0; i < mistakesRemaining; i++) {
      mistakes.push(<div className="mistake" key={i} />);
    }
    return mistakes;
  }, [mistakesRemaining]);

  return <div id="mistakes-container">{...mistakes}</div>;
}
