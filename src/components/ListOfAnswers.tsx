import { useQuestionsStore } from "../store/useQuestionsStore";
import type { Question } from "../types/questions";
import { getBackgroundColorResponse } from "../utils/answers";

type QuestionBoxProps = {
  questionInfo: Question;
};

const ListOfAnswers = ({ questionInfo }: QuestionBoxProps) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const handleAnswerSelection = (answerIndex: number) => {
    const { userSelectedAnswerIndex, id: questionId } =
      questionInfo as Question;

    if (userSelectedAnswerIndex === undefined) {
      selectAnswer(questionId, answerIndex);
    }
  };

  return (
    <ul className="text-white">
      {questionInfo?.options.map((o, i) => (
        <li
          key={i}
          className={`text-center text-sm px-4 py-3 border-b border-black/50 transition-colors duration-300 ease-in-out ${
            questionInfo.userSelectedAnswerIndex === undefined
              ? "cursor-pointer"
              : "cursor-auto opacity-50 select-none"
          } ${getBackgroundColorResponse(
            questionInfo,
            i
          )} last:border-b-0 sm:text-base sm:px-6 sm:py-3.5`}
          onClick={() => handleAnswerSelection(i)}
        >
          {o}
        </li>
      ))}
    </ul>
  );
};

export default ListOfAnswers;
