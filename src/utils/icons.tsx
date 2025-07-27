import CppIcon from "../icons/CppIcon";
import JavaIcon from "../icons/JavaIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import KotlinIcon from "../icons/KotlinIcon";
import PythonIcon from "../icons/PythonIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import type { LanguageNames } from "../types/language";

type ImportIcons = {
  language?: LanguageNames;
  className: string;
};

export const importIcons = ({
  language,
  className = "size-20",
}: ImportIcons) => {
  if (language === "javascript") {
    return {
      [language]: <JavaScriptIcon className={className} />,
    };
  } else if (language === "typescript") {
    return {
      [language]: <TypeScriptIcon className={className} />,
    };
  } else if (language === "java") {
    return {
      [language]: <JavaIcon className={className} />,
    };
  } else if (language === "python") {
    return {
      [language]: <PythonIcon className={className} />,
    };
  } else if (language === "cpp") {
    return {
      [language]: <CppIcon className={className} />,
    };
  } else if (language === "kotlin") {
    return {
      [language]: <KotlinIcon className={className} />,
    };
  } else {
    return {
      javascript: <JavaScriptIcon className={className} />,
      typescript: <TypeScriptIcon className={className} />,
      java: <JavaIcon className={className} />,
      python: <PythonIcon className={className} />,
      cpp: <CppIcon className={className} />,
      kotlin: <KotlinIcon className={className} />,
    };
  }
};
