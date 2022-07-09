import { useContext } from "react";
import { Context } from "../../context/langContext";
import "./Contenu.css";
import data, { Traductions } from "../../assets/data";

export default function Contenu() {
  const { lang } = useContext(Context)!;
  return (
    <div className="content">
      <h1 className="title">{data[lang as keyof Traductions].title}</h1>
      <p className="content-txt">{data[lang as keyof Traductions].txt}</p>
    </div>
  );
}
