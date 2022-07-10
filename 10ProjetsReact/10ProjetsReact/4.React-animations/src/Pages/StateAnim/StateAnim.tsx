import { useState, useRef, useEffect, MutableRefObject, RefObject, FormEvent } from "react";
import "./StateAnim.css";
import { useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";

export default function StateAnim() {
  const [inputData, setInputData] = useState([
    {
      id: uuidv4(),
      txt: "Chopin",
    },
    {
      id: uuidv4(),
      txt: "Mozart",
    },
    {
      id: uuidv4(),
      txt: "Bach",
    },
  ]);

const inputRef : RefObject<HTMLInputElement> = useRef(null);
const handleData = (e : FormEvent) => {
  e.preventDefault();
  const newObj = {
    id: uuidv4(),
    txt: inputRef.current!.value
  }
}

  return <form>
    <label htmlFor="piano">Renseignez vos pianistes favoris</label>
    <input type="text" id="piano" ref={inputRef}/>
    <ul>
      {
        inputData.map((item) => (
          <li key={item.id}>{item.txt}</li>
        ))
      }
      </ul>
  </form>;
}
