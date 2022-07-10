import { useState } from "react";
import "./MultiForm.css";

import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allergies from "./SubForms/Allergies";
import Tastes from "./SubForms/Tastes";

interface FormData {
  diet: string;
  foodStyle: string[];
  allergies: string[];
  prefs: object;
}

interface NewFormData {
  diet?: string;
  foodStyle?: string[];
  allergies?: string[];
  prefs?: object;
}

const initialState: FormData = {
  diet: "",
  foodStyle: [],
  allergies: [],
  prefs: {},
};

export type PageSetterFunc = (modifier: number) => void;
export type StateSetterFunc = (newFormData: NewFormData) => void;

export default function MultiForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState(initialState);

  const modifyIndex: PageSetterFunc = (modifier) =>
    setFormIndex(formIndex + modifier);
  const updateFormData: StateSetterFunc = (newFormData) =>
    setFormData({ ...formData, ...newFormData });

  console.log(formData);

  const forms = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} updateFormData={updateFormData} />,
    <FoodStyle modifyIndex={modifyIndex} updateFormData={updateFormData} />,
    <Allergies modifyIndex={modifyIndex} updateFormData={updateFormData} />,
    <Tastes modifyIndex={modifyIndex} updateFormData={updateFormData} />,
    <CardEnd />
  ]

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex}/>
      {
        forms.map((form, index) => (formIndex === index + 1) && form)
      }
    </div>
  );
}
