import { useQuestionsStore } from "../store/useQuestionsStore";
import { useQuestionsData } from "../hooks/useQuestionsData";
import GameFact from "./GameFact";

const GameInformation = () => {
  const questions = useQuestionsStore((state) => state.questions);

  if (!questions) return;

  const { correctQuestions, incorrectQuestions, missingQuestions } =
    useQuestionsData(questions);

  return (
    <ul className="flex flex-col gap-4 min-[480px]:flex-row min-[480px]:items-center">
      <GameFact fact={correctQuestions} type="correctas" />
      <GameFact fact={incorrectQuestions} type="incorrectas" />
      <GameFact fact={missingQuestions} type="sin responder" />
    </ul>
  );
};

export default GameInformation;
