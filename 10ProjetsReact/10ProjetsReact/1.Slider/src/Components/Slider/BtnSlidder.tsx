import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

type Proptypes = { moveSlide: () => void; direction: string };

export default function BtnSlidder({
  moveSlide,
  direction,
}: Proptypes): JSX.Element {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt={direction === "next" ? "next img" : "previous img"}
      />
    </button>
  );
}
