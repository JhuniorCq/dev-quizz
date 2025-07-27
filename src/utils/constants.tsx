import type { JSX } from "react";
import type { Languages } from "../types/language";
import { importIcons } from "./icons";

export const SERVER_URL = "http://localhost:5173";

export const LANGUAGE_NAMES = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  java: "Java",
  python: "Python",
  cpp: "C++",
};

const {
  javascript: javaScriptIcon,
  typescript: typeScriptIcon,
  python: pythonIcon,
  java: javaIcon,
  cpp: cppIcon,
} = importIcons({ className: "size-20" });

export const LANGUAGES: Languages = [
  {
    id: 1,
    name: "javascript",
    icon: javaScriptIcon as JSX.Element,
  },
  {
    id: 2,
    name: "typescript",
    icon: typeScriptIcon as JSX.Element,
  },
  {
    id: 3,
    name: "python",
    icon: pythonIcon as JSX.Element,
  },
  {
    id: 4,
    name: "java",
    icon: javaIcon as JSX.Element,
  },
  {
    id: 5,
    name: "cpp",
    icon: cppIcon as JSX.Element,
  },
];
