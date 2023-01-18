import { useEffect, useState } from "react";
import {
  setUISettingsValue,
  updateUISettingValue,
} from "../../services/slider-service";
import {
  OPACITY_KEY,
  SCALING_KEY,
  SliderProps,
  UISettingOptions,
} from "./util-types/types";
import './slider-style.css';

const Slider = ({ min, max, step, options, expiresIn }: SliderProps) => {
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
    let key = '';
    switch (options) {
      case UISettingOptions.Scaling:
        key = SCALING_KEY
        break;
      case UISettingOptions.Opacity:
        key = OPACITY_KEY;
        break;
      default:
        break;
    }
    
    setUISettingsValue(key, value, expiresIn);
    updateUISettingValue(key, value);
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
    </div>
  );
};

export default Slider;
