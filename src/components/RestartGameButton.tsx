import { Link } from "react-router-dom";
import { useQuestionsStore } from "../store/useQuestionsStore";

type RestartGameButtonProps = {
  name: string;
};

const RestartGameButton = ({ name }: RestartGameButtonProps) => {
  const resetState = useQuestionsStore((state) => state.resetState);
  return (
    <Link
      to="/"
      className="px-2.5 py-1.5 rounded-sm transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 font-semibold text-[#4ec7e5] text-center text-sm sm:text-base sm:px-3.5 sm:py-2"
      onClick={resetState}
    >
      {name}
    </Link>
  );
};

export default RestartGameButton;
