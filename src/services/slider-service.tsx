import {
  BASE_SIZE,
  DEFAULT_OPACITY,
  DEFAULT_SCALE,
  OPACITY_KEY,
  SCALING_KEY,
} from "../components/Slider/util-types/types";

export const updateScaling = (value: number) => {
  let root = document.documentElement;
  root.style.setProperty("font-size", BASE_SIZE * value + "px");
};

export const getScaling = () => {
  const scaling = localStorage.getItem(SCALING_KEY);
  updateScaling(scaling ? parseFloat(scaling) : DEFAULT_SCALE);
};

export const setScalingValue = (value: string) => {
  localStorage.setItem(SCALING_KEY, value.toString());
};

export const updateOpacity = (value: number) => {
  let root = document.documentElement;
  root.style.setProperty("opacity", value.toString());
};

export const getOpcacity = () => {
  const opacity = localStorage.getItem(OPACITY_KEY);
  updateOpacity(opacity ? parseFloat(opacity) : DEFAULT_OPACITY);
};

export const setOpacityValue = (value: string) => {
  localStorage.setItem(OPACITY_KEY, value.toString());
};
