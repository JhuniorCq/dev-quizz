import LanguageCard from "../components/LanguageCard";
import { useQuestionsStore } from "../store/useQuestionsStore";
import { LANGUAGES } from "../utils/constants";
import GameResults from "./GameResults";

const Start = () => {
  const completedQuestions = useQuestionsStore(
    (state) => state.completedQuestions
  );

  return completedQuestions ? (
    <GameResults />
  ) : (
    <ul className="w-full mt-4 flex justify-center flex-wrap gap-4 sm:gap-5 xl:gap-8">
      {LANGUAGES.map((language) => (
        <LanguageCard
          key={language.id}
          name={language.name}
          icon={language.icon}
        />
      ))}
    </ul>
  );
};

export default Start;
