import { getUISettingsValue } from "../../services/slider-service";
import DemoLayout from "./demo-layout/demo-layout";
import Slider from "./Slider";
import { UISettingOptions } from "./util-types/types";

const SliderGUIControl = () => {
  getUISettingsValue();

  return (
    <div className="slider-gui">
      <div className="slider">
      <div className="slider-section">
        <strong>UI Scaling setting slider</strong>
        <Slider
          min={0.25}
          max={1.25}
          step={0.25}
          options={UISettingOptions.Scaling}
          expiresIn={3600}
        />
      </div>
      <div className="slider-section">
        <strong>UI Opacity setting slider</strong>
        <Slider
          min={0.5}
          max={1}
          step={0.125}
          options={UISettingOptions.Opacity}
          expiresIn={3600}
        />
      </div>
    </div>    
    <DemoLayout />
    </div>
  );
};
export default SliderGUIControl;
