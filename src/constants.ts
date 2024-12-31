import { AnswerSet } from './game.types';

export const INITIAL_SETS: AnswerSet[] = [
  {
    category: 'JAN 31 BIRTHDAYS',
    color: 'yellow',
    items: [
      'JUSTIN TIMBERLAKE',
      'MELISSA TEIXEIRA',
      'MINNIE DRIVER',
      'FRANZ SCHUBERT',
    ],
  },
  {
    category: 'M___T WORDS',
    color: 'green',
    items: ['MAT', 'MUTT', 'MOAT', 'MOOT'],
  },
  {
    category: "MELISSA's LOVELY QUALITIES",
    color: 'blue',
    items: ['BEAUTIFUL', 'BRILLIANT', 'GREAT LAUGH', 'CARING'],
  },
  {
    category: "REVIEWS FOR TONIGHT'S RESTAURANT",
    color: 'purple',
    items: ['AMBITIOUS', 'MICHELIN GRADE', 'AUDACIOUS', 'UNEXPECTED'],
  },
];

export const INITIAL_ITEMS = INITIAL_SETS.flatMap((set) => set.items);
