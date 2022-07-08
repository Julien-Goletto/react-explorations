import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlidder from "./BtnSlidder";

const initialState = {
  index: 1,
  inProgress: false,
};

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState(initialState);

  type ChangeSlide = () => void;

  // Gestion du timeOut à coller à l'anim CSS, empêche le spam
  const nextSlide: ChangeSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
      setTimeout(
        () => setSlideAnim({ index: slideAnim.index + 1, inProgress: false }),
        400
      );
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });
      setTimeout(() => setSlideAnim({ index: 1, inProgress: false }), 400);
    }
  };

  const prevSlide: ChangeSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(
        () => setSlideAnim({ index: slideAnim.index - 1, inProgress: false }),
        400
      );
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: dataSlider.length, inProgress: true });
      setTimeout(
        () => setSlideAnim({ index: dataSlider.length, inProgress: false }),
        400
      );
    }
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            // the active class determines if the opacity is 1
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${slideAnim.index}.jpg`}
              alt={`Beautiful landscape ${slideAnim.index}`}
            />
          </div>
        );
      })}
      <BtnSlidder moveSlide={nextSlide} direction={"next"} />
      <BtnSlidder moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {
          [...Array(dataSlider.length).keys()]
            .map((index) => (
              <button
                className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              />
            ))
        }
      </div>
    </div>
  );
}
