import { AnswerSet, SubmissionOutcome } from './game.types';

export function checkSubmission(
  submission: string[],
  set: AnswerSet,
): SubmissionOutcome {
  let matches = 0;
  for (const item of submission) {
    if (set.items.includes(item)) {
      matches += 1;
    }
  }
  if (matches === 4) {
    return SubmissionOutcome.Correct;
  }
  if (matches === 3) {
    return SubmissionOutcome.OffByOne;
  }
  return SubmissionOutcome.Incorrect;
}

export function shuffleArray<T>(inputArray: T[]): T[] {
  const localArray = [...inputArray];
  const shuffledItems = [];

  while (localArray.length) {
    const index = Math.floor(Math.random() * localArray.length);
    const [item] = localArray.splice(index, 1);
    shuffledItems.push(item);
  }

  return shuffledItems;
}

export function normalizeStringArray(input: string[]) {
  return input.sort().join('').toLowerCase();
}
