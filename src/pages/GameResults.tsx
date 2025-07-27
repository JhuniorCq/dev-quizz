import GameFact from "../components/GameFact";
import RestartGameButton from "../components/RestartGameButton";
import { useQuestionsData } from "../hooks/useQuestionsData";
import { useQuestionsStore } from "../store/useQuestionsStore";
import type { Question } from "../types/questions";

const GameResults = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const { correctQuestions, incorrectQuestions } = useQuestionsData(
    questions as Question[]
  );

  return (
    <div className="flex flex-col gap-10 items-center mt-2">
      <p className="text-3xl text-white text-center font-bold sm:text-4xl lg:text-5xl">
        ¡Tus resultados!
      </p>

      <ul className="flex flex-col items-center gap-3">
        <GameFact fact={correctQuestions} type="correctas" />
        <GameFact fact={incorrectQuestions} type="incorrectas" />
      </ul>

      <RestartGameButton name="REINICIAR EL JUEGO" />
    </div>
  );
};

export default GameResults;
