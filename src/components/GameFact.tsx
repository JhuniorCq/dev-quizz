import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";

type GameFactProps = {
  fact: number;
  type: "correctas" | "incorrectas" | "sin responder";
};

const getInformation = (
  type: "correctas" | "incorrectas" | "sin responder"
) => {
  let containerStyles = "";
  let icon = null;

  if (type === "correctas") {
    containerStyles =
      "text-white text-center flex justify-center items-center gap-2.5";
    icon = FaCheck({ className: "shrink-0 text-md text-green-600" });
  } else if (type === "incorrectas") {
    containerStyles =
      "text-white text-center flex justify-center items-center gap-2";
    icon = IoClose({ className: "shrink-0 text-[22px] text-red-600" });
  } else {
    containerStyles =
      "text-white text-center flex justify-center items-center gap-1.5";
    icon = MdOutlineQuestionMark({
      className: "shrink-0 text-lg text-orange-600",
    });
  }

  return {
    containerStyles,
    icon,
  };
};

const GameFact = ({ fact, type }: GameFactProps) => {
  const { containerStyles, icon } = getInformation(type);

  return (
    <li className={containerStyles}>
      {icon}
      <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
        {fact} <span className="capitalize">{type}</span>
      </span>
    </li>
  );
};

export default GameFact;
