export type AnswerSet = {
  category: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  items: [string, string, string, string];
};

export enum SubmissionOutcome {
  Correct,
  OffByOne,
  Incorrect,
}
