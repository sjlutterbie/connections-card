import { AnswerSet } from './game.types';

export function FoundSet(answerSet: AnswerSet) {
  const { category, color, items } = answerSet;
  return (
    <div className={`answer-set ${color}`}>
      <div className="answer-set-category">{category.toUpperCase()}</div>
      <div className="answer-set-items">{items.join(', ')}</div>
    </div>
  );
}
