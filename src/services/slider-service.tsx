import { BASE_SIZE, DEFAULT_SCALE, SCALING_KEY } from "../components/Slider/util-types/types";

export const updateScaling = (value:number) => {
    let root = document.documentElement;
    root.style.setProperty('font-size', (BASE_SIZE * value) +"px");
}

export const getScaling = () => {    
  const scaling = localStorage.getItem(SCALING_KEY);
  updateScaling(scaling ? parseFloat(scaling) : DEFAULT_SCALE);
}

export const setScalingValue = (value: string) => {
    localStorage.setItem(SCALING_KEY, value.toString());
  };


