import { FormEvent, useState } from "react";
import "./SubForm.css";
import { PageSetterFunc, StateSetterFunc  } from "../MultiForm";

type PropTypes = { modifyIndex: PageSetterFunc, updateFormData: StateSetterFunc };

export default function DietForm({ modifyIndex, updateFormData }: PropTypes) {
  const [newFormData, setFormData] = useState({diet: 'nodiet'});
  const handleRadio = (e : FormEvent<HTMLInputElement>) => {
    setFormData({ diet: e.currentTarget.value });
    updateFormData({ diet: e.currentTarget.value });
  }
  return (
    <form
      action="submit"
      onSubmit={(e) => e.preventDefault()}
      className="diet-form"
    >
      <p>Quel est ton régime alimentaire ?</p>
      <label htmlFor="nodiet" defaultChecked={true}>Pas de régime en particulier</label>
      <input onChange={handleRadio} type="radio" name="diet" id="do-diet" value="nodiet" />
      <label htmlFor="nodiet">Omnivore</label>
      <input onChange={handleRadio} type="radio" name="diet" id="homnivorous" value="omnivorous" />
      <label htmlFor="vegetarian">Végétarien</label>
      <input onChange={handleRadio} type="radio" name="diet" id="vegetarian" value="vegetarian" />
      <label htmlFor="vegan">Vegan</label>
      <input onChange={handleRadio} type="radio" name="diet" id="vegan" value="vegan" />
      <button onClick={modifyIndex}>Valider</button>
    </form>
  );
}