import React, { useState } from "react";

interface DualRangeSliderProps {
  min: number;
  max: number;
  step: number;
  onChange: (values: { minValue: number; maxValue: number }) => void;
}

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min,
  max,
  step,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
    onChange({ minValue: value, maxValue });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
    onChange({ minValue, maxValue: value });
  };

  const getPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between mb-2">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
      <div className="relative h-2">
        {/* Track */}
        <div className="absolute bg-gray-300 w-full h-1 rounded" />
        {/* Range Selected */}
        <div
          className="absolute bg-blue-500 h-1 rounded"
          style={{
            left: `${getPercentage(minValue)}%`,
            right: `${100 - getPercentage(maxValue)}%`,
          }}
        />
        {/* Min Slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-1 appearance-none pointer-events-auto range-slider-thumb"
          style={{
            zIndex: 3,
          }}
        />
        {/* Max Slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-1 appearance-none pointer-events-auto range-slider-thumb"
          style={{
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
