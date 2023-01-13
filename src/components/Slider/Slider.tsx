import { useEffect, useState } from "react";
import {
  setOpacityValue,
  setScalingValue,
  updateOpacity,
  updateScaling,
} from "../../services/slider-service";
import DemoLayout from "./demo-layout";
import {
  OPACITY_KEY,
  SCALING_KEY,
  SliderProps,
  UISettingOptions,
} from "./util-types/types";

const Slider = ({ min, max, step, options }: SliderProps) => {
  const [values, setValues] = useState<number[]>([]);
  const [defaultScalingValue, setDefaultScalingValue] = useState(1);
  const [defaultOpacityValue, setDefaultOpacityValue] = useState(1);

  const getRanges = (): number[] => {
    let ranges: number[] = [];
    for (let i = min; i <= max; i += step) {
      ranges.push(i);
    }
    return ranges;
  };

  useEffect(() => {
    let scaling = localStorage.getItem(SCALING_KEY);

    if (scaling) {
      setDefaultScalingValue(parseFloat(scaling));
    }

    let opacity = localStorage.getItem(OPACITY_KEY);

    if (opacity) {
      setDefaultOpacityValue(parseFloat(opacity));
    }

    setValues(getRanges());
  }, []);

  const onChange = (value: string) => {
    switch (options) {
      case UISettingOptions.Scaling:
        setScalingValue(value);
        updateScaling(parseFloat(value));
        break;
      case UISettingOptions.Opacity:
        setOpacityValue(value);
        updateOpacity(parseFloat(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="slider-container">
        <div
          key={
            options === UISettingOptions.Scaling
              ? defaultScalingValue
              : defaultOpacityValue
          }
        >
          <input
            type="range"
            name={"slider-" + options}
            min={min}
            max={max}
            list={"options-" + options}
            step={step}
            defaultValue={
              options === UISettingOptions.Scaling
                ? defaultScalingValue
                : defaultOpacityValue
            }
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <ul className="range-values">
          {values.map((val, i) => (
            <li key={"value-" + i}>{val}</li>
          ))}
        </ul>
        <datalist id={"options-" + options}>
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
