import type { Question } from "../types/questions";

export const useQuestionsData = (questions: Question[]) => {
  let correctQuestions = 0;
  let incorrectQuestions = 0;
  let missingQuestions = 0;

  questions.forEach((q) => {
    if (q.isCorrectUserAnswer === undefined) missingQuestions++;
    else if (q.isCorrectUserAnswer) correctQuestions++;
    else incorrectQuestions++;
  });

  return { correctQuestions, incorrectQuestions, missingQuestions };
};
