import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

interface SliderProps {
  data: object[];
  visibleItemsNumber: 1 | 2 | 3 | 4 | 5;
  children: ReactNode[];
}

const Slider: React.FC<SliderProps> = ({
  data,
  visibleItemsNumber = 3,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemWidth = 100 / visibleItemsNumber;
  const totalItems = data.length;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? totalItems - visibleItemsNumber
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= totalItems - visibleItemsNumber;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative h-72 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full flex transition-transform transform"
          style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
        >
          {children}
        </div>
      </div>
      {/* Botón Izquierdo */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-secondary-400 hover:bg-secondary-500 shadow-xl px-4 py-2 rounded-full z-10"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* Botón Derecho */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-secondary-400 hover:bg-secondary-500 shadow-xl px-4 py-2 rounded-full z-10"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Slider;
