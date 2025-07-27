import type { LanguageNames } from "./language";

export type Question = {
  id: number;
  language: LanguageNames;
  question: string;
  code: string;
  options: string[];
  correctAnswerIndex: number;
  userSelectedAnswerIndex?: number;
  isCorrectUserAnswer?: boolean;
};

export type QuestionsState = {
  questions: Question[] | null;
  loading: boolean;
  error: string | null;
  currentQuestion: number;
  selectedLanguage: LanguageNames | null;
  completedQuestions: boolean;
  selectLanguage: (language: LanguageNames) => void;
  getQuestions: (language: LanguageNames) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  setCompletedQuestions: () => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetState: () => void;
};
