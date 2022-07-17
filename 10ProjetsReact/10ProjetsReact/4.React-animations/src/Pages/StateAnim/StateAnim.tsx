import { useState, useRef, RefObject, useEffect, FormEvent } from "react";
import "./StateAnim.css";
// import { useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { animated, useTransition } from "react-spring";

const initialState = [
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
];

export default function StateAnim() {
  const [inputData, setInputData] = useState(initialState);
  const [firstDisplay, setFirstDisplay] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setFirstDisplay(false);
    }, 1000);
  }, []);

  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const handleData = (e: FormEvent) => {
    e.preventDefault();
    setInputData([
      ...inputData,
      { id: uuidv4(), txt: inputRef.current!.value },
    ]);
    inputRef.current!.value = "";
  };

  const listTransitions = useTransition(inputData, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    keys: inputData.map((item) => item.id),
  });

  return (
    <form onSubmit={handleData}>
      <label htmlFor="piano">Renseignez vos pianistes favoris</label>
      <input
        type="text"
        id="piano"
        placeholder="Saisir un pianiste..."
        ref={inputRef}
      />
      <ul>
        {firstDisplay
          ? inputData.map((item) => <li key={item.id}>{item.txt}</li>)
          : listTransitions((styles, item) => (
              <animated.li style={styles}>{item.txt}</animated.li>
            ))}
      </ul>
    </form>
  );
}
