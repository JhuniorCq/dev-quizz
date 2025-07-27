import type { JSX } from "react";
import type { LanguageNames } from "../types/language";
import { useNavigate } from "react-router-dom";
import { LANGUAGE_NAMES } from "../utils/constants";
import { useQuestionsStore } from "../store/useQuestionsStore";

type LanguageCardProps = {
  name: LanguageNames;
  icon: JSX.Element;
};

const LanguageCard = ({ name, icon }: LanguageCardProps) => {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);
  const selectLanguage = useQuestionsStore((state) => state.selectLanguage);
  const navigate = useNavigate();

  const goToGame = () => {
    selectLanguage(name);
    getQuestions(name);
    navigate(`/game/${name}`);
  };

  return (
    <li className="w-44 h-48 border border-white rounded-xl bg-white/10 backdrop-blur-[12px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
      <button
        className="w-full h-full cursor-pointer flex flex-col justify-center items-center gap-5"
        onClick={goToGame}
      >
        {icon}
        <span className="text-center text-white">{LANGUAGE_NAMES[name]}</span>
      </button>
    </li>
  );
};

export default LanguageCard;
