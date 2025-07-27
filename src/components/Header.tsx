import { useQuestionsStore } from "../store/useQuestionsStore";
import { LANGUAGE_NAMES } from "../utils/constants";
import { importIcons } from "../utils/icons";
import type { LanguageNames } from "../types/language";

const Header = () => {
  const selectedLanguage = useQuestionsStore((state) => state.selectedLanguage);

  let languageIcon = null;
  let languageName = "";

  if (selectedLanguage) {
    const importedIcon = importIcons({
      language: selectedLanguage as LanguageNames,
      className: "size-12 sm:size-14",
    });
    languageIcon = importedIcon[selectedLanguage as LanguageNames];
    languageName = LANGUAGE_NAMES[selectedLanguage as LanguageNames];
  }

  const description = selectedLanguage
    ? `Pon a prueba tus conocimientos en ${languageName}. ¿Estás listo para el desafío?`
    : "Pon a prueba tus conocimientos en diferentes lenguajes de programación. Elige tu lenguaje favorito y empieza el desafío.";

  return (
    <header className="flex flex-col gap-6">
      <h1
        className={`text-center text-white text-3xl flex justify-center items-center ${
          languageIcon ? "gap-4" : "gap-2"
        } min-[460px]:text-4xl sm:text-5xl`}
      >
        <span className={`${languageIcon && "shrink-0 mt-1"}`}>
          {languageIcon ?? "👨‍💻"}
        </span>{" "}
        <span>DevQuizz</span>
      </h1>
      <p className="text-white text-center text-sm md:text-base">
        {description}
      </p>
    </header>
  );
};

export default Header;
