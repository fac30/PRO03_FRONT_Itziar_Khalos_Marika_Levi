export interface Answer {
  id: number;
  text: string;
}

export interface QuizQuestion {
  id: number;
  quizId: number;
  text: string;
  type: string;
  points: number;
  className?: string;
  answers?: Answer[];
}
