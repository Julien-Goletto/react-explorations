import "./Card.css";
import { PageSetterFunc } from "../MultiForm";

type PropTypes = { modifyIndex: PageSetterFunc };

export default function CardBegin({ modifyIndex }: PropTypes) {
  return (
    <div className="card">
      <h1>🍣 Aide-nous à ravir tes papilles ! 🌶️</h1>
      <button onClick={modifyIndex}>COMMENCER</button>
    </div>
  );
}
