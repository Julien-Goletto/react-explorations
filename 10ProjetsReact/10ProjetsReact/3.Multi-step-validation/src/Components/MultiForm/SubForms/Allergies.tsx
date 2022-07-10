import { FormEvent, MutableRefObject, useRef } from "react";
import "./SubForm.css";
import { PageSetterFunc, StateSetterFunc } from "../MultiForm";

type PropTypes = {
  modifyIndex: PageSetterFunc;
  updateFormData: StateSetterFunc;
};

type AllergiesData = {
  allergies : string[];
};
const allergiesData: AllergiesData = {
  allergies : [],
};

export default function Allergies({ modifyIndex, updateFormData }: PropTypes) {
  const allCheckBoxes: MutableRefObject<HTMLInputElement[]> = useRef([]);

  const addCheck = (el: HTMLInputElement) => {
    if (el && !allCheckBoxes.current.includes(el))
      allCheckBoxes.current.push(el);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    allCheckBoxes.current.forEach((checkbox) => {
      checkbox.checked && allergiesData.allergies.push(checkbox.value);
    });
    updateFormData(allergiesData);
    modifyIndex(1);
  };

  return (
    <form action="sumbit" className="checkbox-form" onSubmit={handleSubmit}>
      <p>As-tu des allergies ?</p>
      <span>Choix multiples</span>
      <label htmlFor="milk">Lait 🥛</label>
      <input type="checkbox" id="milk" value="milk" ref={addCheck} />
      <label htmlFor="eggs">Oeufs 🥚</label>
      <input type="checkbox" id="eggs" value="eggs" ref={addCheck} />
      <label htmlFor="nuts">Fruits à coque 🌰</label>
      <input type="checkbox" id="nuts" value="nuts" ref={addCheck} />
      <label htmlFor="gluten">Gluten 🌾</label>
      <input type="checkbox" id="gluten" value="gluten" ref={addCheck} />
      <label htmlFor="seafood">Fruits de mer 🦀</label>
      <input type="checkbox" id="seafood" value="seafood" ref={addCheck} />
      <label htmlFor="fish">Poissons 🐟</label>
      <input type="checkbox" id="fish" value="fish" ref={addCheck} />
      <div className="container-nav-btns">
        <button type="button" onClick={() => modifyIndex(-1)} className="prev">
          Précédent
        </button>
        <button className="next">Valider</button>
      </div>
    </form>
  );
}
