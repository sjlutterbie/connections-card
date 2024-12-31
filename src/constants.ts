import { AnswerSet } from './game.types';

export const INITIAL_SETS: AnswerSet[] = [
  {
    category: 'WORDS BEFORE AN ADDRESSEE',
    color: 'blue',
    items: ['ATTENTION', 'DEAR', 'FOR', 'TO'],
  },
  {
    category: 'MOVE QUICKLY',
    color: 'yellow',
    items: ['BOLT', 'DART', 'DASH', 'FLY'],
  },
  {
    category: 'FUN TIME',
    color: 'green',
    items: ['BALL', 'BLAST', 'KICK', 'THRILL'],
  },
  {
    category: 'NAME ___',
    color: 'purple',
    items: ['BRAND', 'DROP', 'GAME', 'NAMES'],
  },
];

export const INITIAL_ITEMS = INITIAL_SETS.flatMap((set) => set.items);
