import { createContext, useState, PropsWithChildren } from "react";

export type SetterFunc = (newLang : string) => void;
interface AppContextInterface {
  lang: string;
  toggleLang: SetterFunc;
}
export const Context = createContext<AppContextInterface | undefined>(undefined);

const supportedLangs = ['FR','EN','SP'];

let browserLang = navigator.language.toUpperCase();

const ContextProvider = (props: PropsWithChildren) => {
  const [lang, setLang] = useState(
    supportedLangs.includes(browserLang) ? browserLang : 'EN'
    );
  const toggleLang : SetterFunc = (newLang) => setLang(newLang);
  return <Context.Provider value={{ lang, toggleLang }}>{props.children}</Context.Provider>;
};

export default ContextProvider;
