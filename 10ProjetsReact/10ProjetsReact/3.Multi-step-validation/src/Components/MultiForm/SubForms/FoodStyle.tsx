import { FormEvent, useRef } from "react";
import "./SubForm.css";

export default function FoodStyle() {
  const preventFunc = (e: FormEvent) => e.preventDefault();
  return (
    <form
      action="sumbit"
      className="checbox-form"
      onSubmit={preventFunc}
    >
      <span>Choix multiples</span>
      <label htmlFor="italian">Italienne</label>
      <input type="checkbox" id="italian" value="italian" />
      <label htmlFor="japanese">Japanese</label>
      <input type="checkbox" id="japanese" value="japanese" />
      <label htmlFor="indian">Indienne</label>
      <input type="checkbox" id="indian" value="indian" />
      <label htmlFor="thai">Thaïlandaise</label>
      <input type="checkbox" id="thai" value="thai" />
      <label htmlFor="french">Française</label>
      <input type="checkbox" id="french" value="french" />
      <label htmlFor="chinese">Chinoise</label>
      <input type="checkbox" id="chinese" value="chinese" />
      <div className="container-nav-btns">
        <button type="button" className="prev">Précédent</button>
        <button type="button" className="next">Suivant</button>
      </div>
    </form>
  );
}
