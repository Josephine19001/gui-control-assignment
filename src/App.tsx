import Slider from "./components/Slider";
import { UISettingOptions } from "./components/Slider/util-types/types";
import { getOpcacity, getScaling } from "./services/slider-service";

const App = () => {
  getScaling();
  getOpcacity();
  return (
    <div>
      <Slider
      min={0.25}
      max={1.25}
      step={0.25}
      options={UISettingOptions.Scaling}
    />
    <Slider
      min={0.5}
      max={1.5}
      step={0.5}
      options={UISettingOptions.Opacity}
    />
    </div>
  );
};

export default App;
