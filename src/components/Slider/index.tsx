import { getOpcacity, getScaling } from "../../services/slider-service";
import DemoLayout from "./demo-layout/demo-layout";
import Slider from "./Slider";
import { UISettingOptions } from "./util-types/types";

const SliderUIControl = () => {
  getScaling();
  getOpcacity();
  return (
    <div className="slider">
      <div className="slider-section">
        <strong>UI Scaling setting slider</strong>
        <Slider
          min={0.25}
          max={1.25}
          step={0.25}
          options={UISettingOptions.Scaling}
        />
      </div>
      <div className="slider-section">
        <strong>UI Opacity setting slider</strong>
        <Slider
          min={0.5}
          max={1}
          step={0.125}
          options={UISettingOptions.Opacity}
        />
      </div>
      <DemoLayout />
    </div>
  );
};
export default SliderUIControl;
