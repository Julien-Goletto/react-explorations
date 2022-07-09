import { useState } from 'react';
import './MultiForm.css'

import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';

interface FormData {
  diet: string,
  foodStyle: string[],
  prefs: object,
};

interface NewFormData {
  diet?: string,
  foodStyle?: string[],
  prefs?: object,
}

const initialState : FormData = {
  diet: "",
  foodStyle: [],
  prefs: {},
};

export type PageSetterFunc = () => void;
export type StateSetterFunc = (newFormData : NewFormData) => void;

export default function MultiForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState(initialState);

  const modifyIndex : PageSetterFunc = () => setFormIndex(formIndex +1);
  const updateFormData : StateSetterFunc = (newFormData) => setFormData({...formData, ...newFormData});

  return (
    <div className='container-multiform'>
      <Indicator />
        {
          formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} />
          : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} updateFormData={updateFormData}/> 
          : formIndex === 3 ? <FoodStyle /> 
          : <CardEnd /> 
        }
    </div>
  )
}
