import { useEffect, useState } from "react";
import { updateScaling } from "../../services/slider-service";
import DemoLayout from "./demo-layout";
import { SCALING_KEY, SliderProps } from "./util-types/types";

const Slider = ({ min, max, step, options }: SliderProps) => {
  const [values, setValues] = useState<number[]>([]);
  const [defaultValue, setDefaultValue] = useState(1);

  const onChange = (value: string) => {
    setScalingValue(value);
    updateScaling(parseFloat(value));
  };

  const getRanges = (): number[] => {
    let ranges: number[] = [];
    for (let i = min; i <= max; i += step) {
      ranges.push(i);
    }
    return ranges;
  };

  const setScalingValue = (value: string) => {
    localStorage.setItem(SCALING_KEY, value.toString());
  };

  useEffect(() => {
    let scaling = localStorage.getItem(SCALING_KEY);

    if (scaling) {
      setDefaultValue(parseFloat(scaling));
    }

    setValues(getRanges());
  }, []);

  return (
    <div className="container">
      <div className="slider-container">
        <div key={defaultValue}>
          <input
            type="range"
            name="scaling-slider"
            min={min}
            max={max}
            list="scaling-options"
            step={step}
            defaultValue={defaultValue}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <ul className="range-values">
          {values.map((val, i) => (
            <li key={"value-" + i}>{val}</li>
          ))}
        </ul>
        <datalist id="scaling-options">
          {values.map((val, i) => (
            <option value={val} key={"option-" + i} />
          ))}
        </datalist>
      </div>
      <DemoLayout />
    </div>
  );
};

export default Slider;
