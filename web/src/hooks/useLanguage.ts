import { locales } from "@/locales";

const useLanguage = (language: string) => locales[language];

export default useLanguage;
