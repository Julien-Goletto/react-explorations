import { ChangeEvent, FormEvent, useState } from "react";
import "./SubForm.css";
import { PageSetterFunc, StateSetterFunc } from "../MultiForm";

type PropTypes = {
  modifyIndex: PageSetterFunc;
  updateFormData: StateSetterFunc;
};

export default function Tastes({ modifyIndex, updateFormData }: PropTypes) {
  const [formData, setFormData] = useState({
    prefs: { prefered: "", hated: "" },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateFormData(formData);
    modifyIndex(1);
  };
  const handleOnChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    type: string
  ) => {
    setFormData({ prefs: { ...formData.prefs, [type]: e.target.value } });
  };
  return (
    <form action="submit" className="preferences-form" onSubmit={handleSubmit}>
      <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>
      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule.
      </label>
      <textarea
        id="prefered"
        placeholder="Un ou plusieurs, si tu en as"
        onChange={(e) => handleOnChange(e, "prefered")}
      ></textarea>
      <label htmlFor="prefered">
        Les aliments que tu n'aimes pas, séparés par une virgule.
      </label>
      <textarea
        id="hated"
        placeholder="Un ou plusieurs, si tu en as"
        onChange={(e) => handleOnChange(e, "hated")}
      ></textarea>
      <div className="container-nav-btns">
        <button type="button" onClick={() => modifyIndex(-1)} className="prev">
          Précédent
        </button>
        <button className="next">Valider</button>
      </div>
    </form>
  );
}
