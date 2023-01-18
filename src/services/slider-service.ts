import {
  BASE_SIZE,
  DEFAULT_OPACITY,
  DEFAULT_SCALE,
  OPACITY_KEY,
  SCALING_KEY,
} from "../components/Slider/util-types/types";


export const updateUISettingValue = (key: string, value: string) => {
  let root = document.documentElement;
  switch (key) {
    case SCALING_KEY:
      root.style.setProperty("font-size", BASE_SIZE * parseFloat(value) + "px");
      break;
    case OPACITY_KEY:
      root.style.setProperty("opacity", value.toString());
      break;
    default:
      break;
  }
};

export const getUISettingsValue = () => {
  const scaling = localStorage.getItem(SCALING_KEY);
  const opacity = localStorage.getItem(OPACITY_KEY);
  const date = new Date();
  const current = Math.round(+date / 1000);
  const scalingExpiry = localStorage.getItem(SCALING_KEY + "_ExpiresIn");
  const opacityExpiry = localStorage.getItem(OPACITY_KEY + "_ExpiresIn");

  if (scalingExpiry && parseFloat(scalingExpiry) < current) {
    localStorage.removeItem(SCALING_KEY);
  }
  if (opacityExpiry && parseFloat(opacityExpiry) < current) {
    localStorage.removeItem(OPACITY_KEY);
  }

  updateUISettingValue(OPACITY_KEY, opacity ? opacity : DEFAULT_OPACITY.toString());
  updateUISettingValue(SCALING_KEY, scaling ? scaling : DEFAULT_SCALE.toString());
};

export const setUISettingsValue = (
  key: string,
  value: string,
  expiresIn?: number
) => {
  localStorage.setItem(key, value.toString());
  setExpiry(key, expiresIn);
};

const setExpiry = (key: string, expiresIn?: number) => {
  if (expiresIn) {
    const date = new Date();
    const schedule = Math.round(
      date.setSeconds(date.getSeconds() + expiresIn) / 1000
    );
    localStorage.setItem(key + "_ExpiresIn", schedule.toString());
  }
};
