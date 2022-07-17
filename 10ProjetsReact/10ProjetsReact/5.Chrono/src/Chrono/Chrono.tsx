import { useState, useEffect, useReducer } from "react";
import PauseImg from "../Images/pause.svg";
import PlayImg from "../Images/play.svg";
import ResetImg from "../Images/reset.svg";
import "./Chrono.css";

export interface State {
  sessionTime: number;
  sessionTimeFixed: number;
  breakTime: number;
  breakTimeFixed: number;
  workingChrono: boolean;
}

export interface Action {
  type: string;
  payload?: {
    sign?: string;
  };
}

const initialState: State = {
  sessionTime: 1500,
  sessionTimeFixed: 1500,
  breakTime: 1500,
  breakTimeFixed: 300,
  workingChrono: false,
};

export default function Chrono() {
  const reducer = (state: State, action: Action) => {
    const {
      sessionTime,
      sessionTimeFixed,
      breakTime,
      breakTimeFixed,
      workingChrono,
    } = state;
    switch (action.type) {
      case "TICK":
        if (sessionTime >= 0) return { ...state, sessionTime: sessionTime - 1 };
        else if (breakTime >= 0) return { ...state, breakTime: breakTime - 1 };
        else
          return {
            ...state,
            sessionTime: sessionTimeFixed,
            breakTime: breakTimeFixed,
            workingChrono: false,
          };
      case "PAUSE":
        return { ...state, workingChrono: !workingChrono };
      case "CHANGE SESSION TIME":
        if (action.payload!.sign === "+") {
          return { ...state, sessionTimeFixed: sessionTimeFixed + 60 };
        } else {
          if (sessionTimeFixed === 0) return state;
          return { ...state, sessionTimeFixed: sessionTimeFixed - 60 };
        }
      case "CHANGE BREAK TIME":
        if (action.payload!.sign === "+") {
          return { ...state, breakTimeFixed: breakTimeFixed + 60 };
        } else {
          if (breakTimeFixed === 0) return state;
          return { ...state, breakTimeFixed: breakTimeFixed - 60 };
        }
      case "RESET":
        return {...state, sessionTime: sessionTimeFixed, breakTime: breakTimeFixed}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let id: number;
    console.log(state.workingChrono);
    if (state.workingChrono) {
      id = window.setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      window.clearInterval(id);
    };
  }, [state.workingChrono]);

  return (
    <div className={ state.workingChrono ? "anim-glow container-chrono" : "container-chrono"}>
      <div className="container-config">
        <div className="box-btns session">
          <button
            className="minus"
            onClick={() =>
              dispatch({ type: "CHANGE SESSION TIME", payload: { sign: "-" } })
            }
          >
            -
          </button>
          <span>{state.sessionTimeFixed / 60}</span>
          <button
            className="plus"
            onClick={() =>
              dispatch({ type: "CHANGE SESSION TIME", payload: { sign: "+" } })
            }
          >
            +
          </button>
        </div>
        <div className="box-btns break">
          <button
            className="minus"
            onClick={() =>
              dispatch({ type: "CHANGE BREAK TIME", payload: { sign: "-" } })
            }
          >
            -
          </button>
          <span>{(state.breakTimeFixed / 60) < 10 ? `0${state.breakTimeFixed / 60}` : state.breakTimeFixed / 60}</span>
          <button
            className="plus"
            onClick={() =>
              dispatch({ type: "CHANGE BREAK TIME", payload: { sign: "+" } })
            }
          >
            +
          </button>
        </div>
      </div>
      <h1>
        <span>
          {state.sessionTime >= 0
            ? `${Math.trunc(state.sessionTime / 60)} : ${
                state.sessionTime % 60 < 10
                  ? `0${state.sessionTime % 60}`
                  : `${state.sessionTime % 60}`
              }`
            : state.breakTime >= 0
            ? `${Math.trunc(state.breakTime / 60)} : ${
                state.breakTime % 60 < 10
                  ? `0${state.breakTime % 60}`
                  : `${state.breakTime % 60}`
              }`
            : "0 : 00"}
        </span>
      </h1>
      <div className="container-controllers">
        <button onClick={() => dispatch({ type: "PAUSE" })}>
          <img
            src={!state.workingChrono ? PlayImg : PauseImg}
            alt="Play / Pause"
          />
        </button>
        <button>
          <img src={ResetImg} alt="Reset" onClick={() => dispatch({type: 'RESET'})}/>
        </button>
      </div>
    </div>
  );
}
