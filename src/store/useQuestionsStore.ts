import { create } from "zustand";
import type { Question, QuestionsState } from "../types/questions";
import type { LanguageNames } from "../types/language";
import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";
import { verifyCompletedQuestions } from "../utils/game";

export const useQuestionsStore = create<QuestionsState>()(
  persist(
    (set, get) => ({
      questions: null,
      loading: false,
      error: null,
      currentQuestion: 0, // Índice
      selectedLanguage: null,
      completedQuestions: false,
      selectLanguage: (language) => set({ selectedLanguage: language }),
      getQuestions: async (language: LanguageNames) => {
        try {
          set({ loading: true });

          // Dato: El fetch puede ser directamente a /questions.json -> Ya que desde public se sirve de manera directa
          const response = await fetch("/questions.json");

          if (!response.ok)
            throw new Error("Ocurrió un problema las preguntas.");

          const data = await response.json();

          const questions = data
            .sort(() => Math.random() - 0.5)
            .filter((q: Question) => q.language === language);

          set({ questions });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Ocurrió un error.";
          console.error("Error: ", errorMessage);

          set({ error: errorMessage });
        } finally {
          set({ loading: false });
        }
      },
      selectAnswer: (questionId, answerIndex) => {
        const { questions, setCompletedQuestions } = get();
        const questionsCopy = structuredClone(questions) as Question[];
        // Obtención del índice de la pregunta seleccionada
        const questionIndex = questionsCopy.findIndex(
          (q) => q.id === questionId
        );
        // Obtención de la información de la pregunta seleccionada
        const questionInfo = questionsCopy[questionIndex];

        const isCorrectUserAnswer =
          questionInfo.correctAnswerIndex === answerIndex;

        // Actualización de la copia de las preguntas
        questionsCopy[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectedAnswerIndex: answerIndex,
        };

        // Actualizar el estado
        set({ questions: questionsCopy });

        if (isCorrectUserAnswer) confetti();

        if (verifyCompletedQuestions(questionsCopy)) setCompletedQuestions();
      },
      setCompletedQuestions: () => set({ completedQuestions: true }),
      nextQuestion: () => {
        const { currentQuestion, questions } = get();
        const numberQuestions = questions?.length as number;
        if (currentQuestion === numberQuestions - 1) return;
        set({ currentQuestion: currentQuestion + 1 });
      },
      previousQuestion: () => {
        const { currentQuestion } = get();
        if (currentQuestion === 0) return;
        set({ currentQuestion: currentQuestion - 1 });
      },
      resetState: () =>
        set({
          selectedLanguage: null,
          questions: null,
          currentQuestion: 0,
          completedQuestions: false,
        }),
    }),
    {
      name: "questions",
    }
  )
);
