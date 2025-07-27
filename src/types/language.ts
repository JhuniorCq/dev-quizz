import type { JSX } from "react";
import type { LANGUAGE_NAMES } from "../utils/constants";

export type LanguageNames = keyof typeof LANGUAGE_NAMES;

export type Languages = {
  id: number;
  name: LanguageNames;
  icon: JSX.Element;
}[];
