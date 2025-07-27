import { useShallow } from "zustand/shallow";
import QuestionCounter from "../components/QuestionCounter";
import { useQuestionsStore } from "../store/useQuestionsStore";
import { Navigate, useParams } from "react-router-dom";
import type { LanguageNames } from "../types/language";
import type { Question } from "../types/questions";
import QuizGame from "../components/QuizGame";
import GameInformation from "../components/GameInformation";
import RestartGameButton from "../components/RestartGameButton";

const Game = () => {
  const { language = null } = useParams();
  const { questions, loading, error, currentQuestion, completedQuestions } =
    useQuestionsStore(
      useShallow((state) => ({
        questions: state.questions,
        loading: state.loading,
        error: state.error,
        currentQuestion: state.currentQuestion,
        completedQuestions: state.completedQuestions,
      }))
    );

  if (!language || completedQuestions) return <Navigate to="/" />;

  const questionInfo = questions?.[currentQuestion];

  return (
    <>
      {loading && (
        <div className="text-white text-sm sm:text-base">Cargando...</div>
      )}

      {!loading && error && (
        <p className="text-white text-sm sm:text-bas">
          {error ?? "Ocurrió un problema."}
        </p>
      )}

      {!loading && !error && questions && (
        <>
          <QuestionCounter />

          <QuizGame
            language={language as LanguageNames}
            questionInfo={questionInfo as Question}
          />

          <GameInformation />

          <RestartGameButton name="REINICIAR EL JUEGO" />
        </>
      )}
    </>
  );
};

export default Game;
