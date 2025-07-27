import SyntaxHighlighter from "react-syntax-highlighter"; // También se debe instalar manualmente su tipado-> npm install @types/react-syntax-highlighter -D
import ListOfAnswers from "./ListOfAnswers";
import type { Question } from "../types/questions";
import { railscasts } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { LanguageNames } from "../types/language";

type QuizGameProps = {
  language: LanguageNames;
  questionInfo: Question;
};

const QuizGame = ({ language, questionInfo }: QuizGameProps) => {
  return (
    <div className="max-w-[620px] p-6 rounded-lg shadow-[0px_0px_8px_rgba(255,255,255)] shadow-white bg-white/10 backdrop-blur-[12px] flex flex-col gap-4 max-[380px]:w-[270px] max-[420px]:w-[300px] max-[470px]:w-[330px] sm:min-w-96">
      <h2 className="text-white text-lg font-semibold sm:text-xl">
        {questionInfo?.question}
      </h2>

      <SyntaxHighlighter
        language={language}
        style={railscasts}
        className="max-w-full overflow-auto text-sm sm:text-base"
      >
        {questionInfo?.code as string}
      </SyntaxHighlighter>

      <ListOfAnswers questionInfo={questionInfo as Question} />
    </div>
  );
};

export default QuizGame;
