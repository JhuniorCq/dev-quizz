import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useQuestionsStore } from "../store/useQuestionsStore";
import { useShallow } from "zustand/shallow";

const QuestionCounter = () => {
  const { questions, currentQuestion, nextQuestion, previousQuestion } =
    useQuestionsStore(
      useShallow((state) => ({
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        previousQuestion: state.previousQuestion,
        nextQuestion: state.nextQuestion,
      }))
    );

  return (
    <div className="flex items-center gap-4">
      <MdOutlineKeyboardArrowLeft
        className={`shrink-0 text-white text-3xl size-8 rounded-full transition-colors duration-300 ease-in-out  ${
          currentQuestion === 0
            ? "opacity-50 cursor-auto"
            : "cursor-pointer hover:bg-white/20"
        }`}
        onClick={previousQuestion}
      />
      <span className="text-white">
        {currentQuestion + 1} / {questions?.length}
      </span>
      <MdOutlineKeyboardArrowRight
        className={`shrink-0 text-white text-3xl size-8 rounded-full transition-colors duration-300 ease-in-out ${
          currentQuestion === (questions?.length as number) - 1
            ? "opacity-50 cursor-auto"
            : "cursor-pointer hover:bg-white/20"
        }`}
        onClick={nextQuestion}
      />
    </div>
  );
};

export default QuestionCounter;
