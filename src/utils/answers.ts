import type { Question } from "../types/questions";

export const getBackgroundColorResponse = (
  questionInfo: Question,
  answerIndex: number
) => {
  const { userSelectedAnswerIndex, correctAnswerIndex } = questionInfo;

  // Antes de que el usuario seleccione una respuesta
  if (userSelectedAnswerIndex === undefined) {
    return "bg-charcoal hover:bg-charcoalLight";
  }

  // A partir de acá el usuario ya ha seleccionado una respuesta
  if (
    answerIndex !== userSelectedAnswerIndex &&
    answerIndex !== correctAnswerIndex
  ) {
    return "bg-charcoal";
  }

  if (answerIndex === correctAnswerIndex) {
    return "bg-green-500";
  }

  if (answerIndex === userSelectedAnswerIndex) {
    return "bg-red-500";
  }

  return "bg-charcoal";
};
