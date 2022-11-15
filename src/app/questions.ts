export type QuestionType = {
  question: string,
  weight: number,
  order: number,
  id: number,
}

export const QUESTIONS: QuestionType[] = [
  {
    question: 'Are you happy?',
    weight: 1,
    order: 1,
    id: 1,
  },
  {
    question: 'Are you free from anxiety?',
    weight: 2,
    order: 2,
    id: 2,
  },
  {
    question: 'Are you calm?',
    weight: 4,
    order: 3,
    id: 3,
  },
  {
    question: 'Are you healthy?',
    weight: 2,
    order: 4,
    id: 4
  },
];
