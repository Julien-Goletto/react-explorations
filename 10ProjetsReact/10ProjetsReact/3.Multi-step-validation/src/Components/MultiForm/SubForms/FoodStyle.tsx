import { FormEvent, MutableRefObject, useRef } from "react";
import "./SubForm.css";
import { PageSetterFunc, StateSetterFunc } from "../MultiForm";

type PropTypes = {
  modifyIndex: PageSetterFunc;
  updateFormData: StateSetterFunc;
};

type StylesData = {
  foodStyle: string[];
};
const stylesData: StylesData = {
  foodStyle: [],
};

export default function FoodStyle({ modifyIndex, updateFormData }: PropTypes) {
  const allCheckBoxes: MutableRefObject<HTMLInputElement[]> = useRef([]);

  const addCheck = (el: HTMLInputElement) => {
    if (el && !allCheckBoxes.current.includes(el))
      allCheckBoxes.current.push(el);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    allCheckBoxes.current.forEach((checkbox) => {
      checkbox.checked && stylesData.foodStyle.push(checkbox.value);
    });
    updateFormData(stylesData);
    modifyIndex(1);
  };

  return (
    <form action="sumbit" className="checkbox-form" onSubmit={handleSubmit}>
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix multiples</span>
      <label htmlFor="italian">Italienne</label>
      <input type="checkbox" id="italian" value="italian" ref={addCheck} />
      <label htmlFor="japanese">Japanese</label>
      <input type="checkbox" id="japanese" value="japanese" ref={addCheck} />
      <label htmlFor="indian">Indienne</label>
      <input type="checkbox" id="indian" value="indian" ref={addCheck} />
      <label htmlFor="thai">Thaïlandaise</label>
      <input type="checkbox" id="thai" value="thai" ref={addCheck} />
      <label htmlFor="french">Française</label>
      <input type="checkbox" id="french" value="french" ref={addCheck} />
      <label htmlFor="chinese">Chinoise</label>
      <input type="checkbox" id="chinese" value="chinese" ref={addCheck} />
      <div className="container-nav-btns">
        <button type="button" onClick={() => modifyIndex(-1)} className="prev">
          Précédent
        </button>
        <button className="next">Valider</button>
      </div>
    </form>
  );
}
