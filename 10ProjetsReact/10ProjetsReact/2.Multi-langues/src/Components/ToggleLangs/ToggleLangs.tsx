import { useContext } from "react";
import { Context } from "../../context/langContext";
import FrenchFlag from "../../assets/france.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import SpanishFlag from "../../assets/spain.svg";

import "./ToggleLangs.css";

const languages = [["French", FrenchFlag], ["English", EnglishFlag], ["Spannish", SpanishFlag]];

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context)!;
  return (
    <div className="container-langs">
      {languages.map((l) => (
        <img
          key ={l[0]}
          onClick={() => toggleLang(`${l[0].slice(0, 2).toUpperCase()}`)}
          src={l[1]}
          alt={l[0].toLowerCase()}
        />
      ))}
    </div>
  );
}
