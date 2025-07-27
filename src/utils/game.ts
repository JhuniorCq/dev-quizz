import type { Question } from "../types/questions";

export const verifyCompletedQuestions = (questions: Question[]) =>
  questions.every((q) => q.userSelectedAnswerIndex !== undefined);
